"use client";

import { useEffect, useRef } from "react";

/**
 * Signature hero background: a magnetic dot-field rendered on a 2D canvas.
 *
 * Lifecycle:
 *  1. "forming"    – particles converge from a scattered cloud into the
 *                    initials "PJS" (sampled from an offscreen text canvas).
 *  2. "dispersing" – particles ease out to their resting grid/home positions.
 *  3. "idle"       – particles rest at home and are repelled by the cursor in
 *                    real time (the magnetic field), springing back when free.
 *
 * Canvas 2D is used instead of WebGL here because pixel-space text sampling and
 * cursor physics are simpler and more reliable, while staying smooth at ~2000
 * points. (Three.js powers the ambient FloatingOrb elsewhere.)
 */

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
}

const PARTICLE_COUNT = 2000;
const FORM_MS = 2000;
const HOLD_MS = 1100;
const DISPERSE_MS = 1400;

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    /** Sample "PJS" glyph pixels into an array of {x,y} target points. */
    function sampleText(): { x: number; y: number }[] {
      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d");
      if (!octx) return [];
      const fontSize = Math.min(width * 0.26, height * 0.62);
      octx.fillStyle = "#fff";
      octx.font = `700 ${fontSize}px "Space Grotesk", system-ui, sans-serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillText("PJS", width / 2, height / 2);
      const data = octx.getImageData(0, 0, width, height).data;
      const points: { x: number; y: number }[] = [];
      const step = Math.max(3, Math.round(width / 380)); // density vs perf
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          if (data[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
        }
      }
      return points;
    }

    function init() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const textPoints = sampleText();
      particles = new Array(PARTICLE_COUNT).fill(0).map((_, i) => {
        const t = textPoints.length
          ? textPoints[i % textPoints.length]
          : { x: width / 2, y: height / 2 };
        // small jitter so glyph edges feel organic
        const jx = (Math.random() - 0.5) * 4;
        const jy = (Math.random() - 0.5) * 4;
        const homeX = Math.random() * width;
        const homeY = Math.random() * height;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          homeX,
          homeY,
          targetX: t.x + jx,
          targetY: t.y + jy,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.3 + 0.5,
        };
      });
    }

    const start = performance.now();
    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    function frame(now: number) {
      const elapsed = now - start;
      ctx!.clearRect(0, 0, width, height);

      const forming = elapsed < FORM_MS;
      const dispersing = elapsed >= FORM_MS + HOLD_MS && elapsed < FORM_MS + HOLD_MS + DISPERSE_MS;
      const idle = elapsed >= FORM_MS + HOLD_MS + DISPERSE_MS;

      for (const p of particles) {
        if (reduce) {
          p.x = p.homeX;
          p.y = p.homeY;
        } else if (forming) {
          const k = easeInOut(Math.min(elapsed / FORM_MS, 1));
          p.x += (p.targetX - p.x) * 0.08 * (0.3 + k);
          p.y += (p.targetY - p.y) * 0.08 * (0.3 + k);
        } else if (elapsed < FORM_MS + HOLD_MS) {
          // hold on the glyph with a faint breathing drift
          p.x += (p.targetX - p.x) * 0.2;
          p.y += (p.targetY - p.y) * 0.2;
        } else {
          // dispersing + idle: spring toward home, repel from cursor
          p.vx += (p.homeX - p.x) * 0.004;
          p.vy += (p.homeY - p.y) * 0.004;

          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist2 = dx * dx + dy * dy;
            const radius = 130;
            if (dist2 < radius * radius) {
              const dist = Math.sqrt(dist2) || 1;
              const force = (1 - dist / radius) * 5.5;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }
          p.vx *= 0.86;
          p.vy *= 0.86;
          p.x += p.vx;
          p.y += p.vy;
        }

        // brightness: brighter while forming/holding, calmer when idle
        const alpha = forming || elapsed < FORM_MS + HOLD_MS ? 0.85 : dispersing ? 0.6 : 0.45;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(220, 240, 255, ${alpha})`;
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      // accent: highlight particles near the cursor in cyan when idle
      if (idle && mouse.active && !reduce) {
        ctx!.beginPath();
        ctx!.fillStyle = "rgba(0,212,255,0.55)";
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          if (dx * dx + dy * dy < 140 * 140) {
            ctx!.moveTo(p.x, p.y);
            ctx!.arc(p.x, p.y, p.size + 0.4, 0, Math.PI * 2);
          }
        }
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    let raf = 0;
    init();
    raf = requestAnimationFrame(frame);

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    let resizeT: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeT);
      resizeT = setTimeout(init, 200);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
