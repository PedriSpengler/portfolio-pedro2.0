"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TerminalLine {
  /** Raw text content of the line. */
  text: string;
  /** Optional accent for the value portion. */
  tone?: "default" | "muted" | "cyan" | "green";
  /** Render as the command prompt line (prefixed with $). */
  prompt?: boolean;
}

interface TerminalProps {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}

const toneClass: Record<NonNullable<TerminalLine["tone"]>, string> = {
  default: "text-text-primary",
  muted: "text-text-muted",
  cyan: "text-accent-cyan",
  green: "text-accent-green",
};

/**
 * macOS-style terminal card that types its content character-by-character
 * (typewriter effect) once it scrolls into view. The blinking cursor follows
 * the line currently being typed. Respects prefers-reduced-motion by rendering
 * the full output instantly.
 */
export function Terminal({ title = "pedro@portfolio: ~", lines, className }: TerminalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  /** Index of the line currently being typed. */
  const [li, setLi] = useState(0);
  /** How many characters of the current line are revealed. */
  const [ci, setCi] = useState(0);

  // Start typing only when the card scrolls into view (or instantly if reduced).
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStarted(true);
      setLi(lines.length);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [lines.length]);

  // Drive the typewriter: advance one character per tick, then jump to the
  // next line (with a brief pause that feels like a keystroke pause).
  useEffect(() => {
    if (!started || li >= lines.length) return;
    const current = lines[li].text;

    if (ci < current.length) {
      // jitter the cadence a touch so it reads like real typing
      const t = setTimeout(() => setCi((c) => c + 1), 16 + Math.random() * 34);
      return () => clearTimeout(t);
    }
    // line complete -> pause, then move to the next line
    const pause = current.trim() === "" ? 90 : 240;
    const t = setTimeout(() => {
      setLi((l) => l + 1);
      setCi(0);
    }, pause);
    return () => clearTimeout(t);
  }, [started, li, ci, lines]);

  const done = li >= lines.length;
  const Cursor = () => <span className="ml-px inline-block animate-blink">▋</span>;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-[#0a0d12] shadow-glow-cyan/40 shadow-2xl",
        className
      )}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-bg-surface/60 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-text-muted">{title}</span>
      </div>

      {/* body */}
      <div className="min-h-[300px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => {
          if (i > li) return null; // not reached yet
          const isTyping = i === li && !done;
          const shown = isTyping ? line.text.slice(0, ci) : line.text;
          return (
            <div
              key={i}
              className={cn(
                "min-h-[1.4em] whitespace-pre-wrap",
                toneClass[line.tone ?? "default"]
              )}
            >
              {line.prompt && <span className="text-accent-green">$ </span>}
              {shown}
              {isTyping && <Cursor />}
            </div>
          );
        })}
        {done && (
          <div className="text-accent-green">
            $ <Cursor />
          </div>
        )}
      </div>
    </div>
  );
}
