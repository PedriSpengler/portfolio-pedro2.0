import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "cyan" | "purple" | "green" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "bg-bg-surface text-text-muted border-border",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  purple: "bg-accent-purple/10 text-[#b794ff] border-accent-purple/30",
  green: "bg-accent-green/10 text-accent-green border-accent-green/30",
  outline: "bg-transparent text-text-muted border-border",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[11px] font-medium leading-none tracking-tight transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
