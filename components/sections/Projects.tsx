"use client";

import { projects } from "@/data/projects";
import { skillBySlug } from "@/data/skills";
import { useFilterStore } from "@/lib/store";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tagVariant = (tag: string): "cyan" | "purple" | "green" => {
  if (["IA", "TCC"].includes(tag)) return "purple";
  if (["Automação", "n8n"].includes(tag)) return "green";
  return "cyan";
};

export function Projects() {
  const activeTech = useFilterStore((s) => s.activeTech);

  return (
    <section
      id="projetos"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        index="03 / projetos"
        title="Projetos selecionados"
        subtitle={
          activeTech
            ? `Filtrando por ${skillBySlug[activeTech] ?? activeTech} — destacando projetos relacionados.`
            : "Produtos em produção: SaaS, ERP e automações de IA. Clique numa tecnologia em Skills para destacar onde foi usada."
        }
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {projects.map((project, i) => {
          const dimmed = activeTech !== null && !project.techSlugs.includes(activeTech);
          const highlighted = activeTech !== null && project.techSlugs.includes(activeTech);
          return (
            <Reveal as="article" key={project.id} index={i % 2}>
              <div
                className={cn(
                  "h-full bg-bg-secondary p-6 transition-all duration-300 sm:p-7",
                  highlighted && "bg-bg-surface ring-1 ring-inset ring-accent-cyan/40",
                  dimmed ? "opacity-40" : "opacity-100"
                )}
              >
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <Badge key={t} variant={tagVariant(t)}>
                      {t}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold text-text-primary sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent-cyan">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
