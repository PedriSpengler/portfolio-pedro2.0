"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type ReactNode } from "react";
import { Bot, Cpu, BarChart3, Database } from "lucide-react";

interface SimpleIconProps {
  /** simple-icons slug (CDN logo); falls back to letter glyph on 404. */
  slug?: string;
  /** canonical skill slug, used to look up a custom/inline icon first. */
  id?: string;
  label: string;
  className?: string;
}

/**
 * Custom icons for technologies that Simple Icons doesn't cover — brands
 * removed from the CDN for trademark reasons (OpenAI, Groq, Power BI) and
 * conceptual entries with no brand logo (RAG, multi-agents). Keyed by the
 * canonical skill slug. Use `currentColor` so they inherit the badge's text
 * color (and its hover transition).
 */
const customIcons: Record<string, (cls: string) => ReactNode> = {
  openai: (cls) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9a6.0651 6.0651 0 0 0-10.0989 4.1818 5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997z" />
    </svg>
  ),
  groq: (cls) => <Cpu className={cls} aria-hidden />,
  powerbi: (cls) => <BarChart3 className={cls} aria-hidden />,
  rag: (cls) => <Database className={cls} aria-hidden />,
  "multi-agent": (cls) => <Bot className={cls} aria-hidden />,
};

/**
 * Renders a technology logo. Resolution order: custom/inline icon → Simple
 * Icons CDN → first-letter glyph (so a badge never shows a broken image).
 * Decorative — the accessible name lives on the surrounding control.
 */
export function SimpleIcon({ slug, id, label, className = "h-4 w-4" }: SimpleIconProps) {
  const [failed, setFailed] = useState(false);

  const custom = id ? customIcons[id] : undefined;
  if (custom) {
    return <span className="shrink-0 text-current">{custom(className)}</span>;
  }

  if (!slug || failed) {
    return (
      <span
        aria-hidden
        className={`grid shrink-0 place-items-center rounded-[3px] bg-accent-cyan/15 text-[9px] font-bold text-accent-cyan ${className}`}
      >
        {label.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/8B949E`}
      alt=""
      aria-hidden
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} shrink-0 transition-[filter] duration-200 group-hover/badge:brightness-150`}
    />
  );
}
