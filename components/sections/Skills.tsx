"use client";

import { skillGroups, type Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import { useFilterStore } from "@/lib/store";
import { SimpleIcon } from "@/components/ui/SimpleIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Slugs that actually appear in at least one project can drive the filter.
const filterableSlugs = new Set(projects.flatMap((p) => p.techSlugs));

export function Skills() {
  const { activeTech, toggleTech } = useFilterStore();

  function onSelect(skill: Skill) {
    if (!filterableSlugs.has(skill.slug)) return;
    const willActivate = activeTech !== skill.slug;
    toggleTech(skill.slug);
    if (willActivate) {
      // let state settle, then scroll to the highlighted projects
      setTimeout(() => scrollToSection("projetos"), 80);
    }
  }

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        index="04 / skills"
        title="Stack & ferramentas"
        subtitle="Clique numa tecnologia para destacar os projetos que a utilizam."
      />

      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} index={gi}>
            <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-6">
              <h3 className="pt-1.5 font-mono text-sm font-medium text-accent-cyan">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const filterable = filterableSlugs.has(skill.slug);
                  const active = activeTech === skill.slug;
                  return (
                    <button
                      key={skill.slug}
                      onClick={() => onSelect(skill)}
                      disabled={!filterable}
                      data-cursor={filterable ? "hover" : undefined}
                      aria-pressed={active}
                      title={
                        filterable
                          ? `Destacar projetos com ${skill.name}`
                          : skill.name
                      }
                      className={cn(
                        "group/badge inline-flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition-all duration-200",
                        active
                          ? "border-accent-cyan bg-accent-cyan/15 text-accent-cyan shadow-glow-cyan"
                          : "border-border bg-bg-secondary text-text-muted",
                        filterable
                          ? "hover:border-accent-cyan/50 hover:bg-bg-surface hover:text-text-primary"
                          : "cursor-default opacity-80"
                      )}
                    >
                      <SimpleIcon
                        slug={skill.icon}
                        id={skill.slug}
                        label={skill.name}
                      />
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
