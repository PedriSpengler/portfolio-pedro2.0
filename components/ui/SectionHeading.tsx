import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Mono kicker, e.g. "01 / sobre". */
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", className)}>
      <div className="flex items-center gap-3 font-mono text-sm text-accent-cyan">
        <span className="text-text-muted">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent-cyan to-transparent" />
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
