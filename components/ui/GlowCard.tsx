"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** When true, applies the active/highlighted glow regardless of hover. */
  active?: boolean;
  /** Disable the pointer-tracking spotlight (e.g. for small badges). */
  noSpotlight?: boolean;
}

/**
 * Surface card with a pointer-tracking radial spotlight and a cyan glow on
 * hover. The spotlight follows the cursor via CSS variables for cheap GPU work.
 */
export function GlowCard({
  children,
  className,
  active = false,
  noSpotlight = false,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (noSpotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-bg-secondary transition-[box-shadow,border-color,transform] duration-300",
        active
          ? "border-accent-cyan/60 shadow-glow-cyan"
          : "border-border hover:border-accent-cyan/50 hover:shadow-glow-cyan",
        className
      )}
    >
      {!noSpotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(0,212,255,0.10), transparent 60%)",
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
