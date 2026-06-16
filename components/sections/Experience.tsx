import { ChevronRight } from "lucide-react";
import { experiences, type RoleType } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const typeVariant: Record<RoleType, "cyan" | "purple" | "green"> = {
  Fundador: "cyan",
  Júnior: "purple",
  Estágio: "green",
};

export function Experience() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        index="02 / experiência"
        title="Trajetória"
        subtitle="Do primeiro estágio à fundação de uma agência — três anos construindo IA e produto."
      />

      <div className="relative">
        {/* central gradient line */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent md:left-[9px]" />

        <ol className="space-y-12">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={`${exp.company}-${exp.period}`} index={i} className="relative pl-10 md:pl-14">
              {/* dot */}
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center md:h-5 md:w-5">
                {exp.current && (
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-cyan/60" />
                )}
                <span
                  className={`relative h-3 w-3 rounded-full border-2 ${
                    exp.current
                      ? "border-accent-cyan bg-accent-cyan shadow-glow-cyan"
                      : "border-accent-purple bg-bg-primary"
                  }`}
                />
              </span>

              <div className="rounded-xl border border-border bg-bg-secondary/60 p-5 transition-colors hover:border-accent-cyan/30 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-xs text-text-muted">
                    {exp.period}
                  </span>
                  <Badge variant={typeVariant[exp.type]}>{exp.type}</Badge>
                </div>

                <h3 className="mt-2 font-display text-xl font-semibold text-text-primary sm:text-2xl">
                  {exp.role}{" "}
                  <span className="text-text-muted">· {exp.company}</span>
                </h3>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-relaxed text-text-muted"
                    >
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
