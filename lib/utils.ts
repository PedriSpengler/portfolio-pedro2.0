import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conditional logic, dedupe conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scroll to a section id. Uses scrollIntoView (works no matter which
 * element is the scroll container) and relies on each section's `scroll-mt-*`
 * to clear the fixed navbar. We drive smoothness here in JS — there must be no
 * `scroll-behavior: smooth` in CSS, or Chromium ignores this call (the two
 * smooth mechanisms conflict and the scroll silently no-ops).
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  el.scrollIntoView({
    behavior: prefersReduced ? "auto" : "smooth",
    block: "start",
  });
}
