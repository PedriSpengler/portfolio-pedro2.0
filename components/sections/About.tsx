import { Terminal, type TerminalLine } from "@/components/ui/Terminal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const terminalLines: TerminalLine[] = [
  { text: "pedro --info", prompt: true, tone: "default" },
  { text: "", tone: "muted" },
  { text: "  Localização:  Dourados, MS 🇧🇷", tone: "muted" },
  { text: "  Formação:     Eng. Computação — UFGD (2022–2026)", tone: "muted" },
  { text: "  Empresa:      Autonomia Tech (Fundador)", tone: "muted" },
  { text: "  Pesquisa:     LLMs aplicados à educação", tone: "muted" },
  { text: "  Idiomas:      PT 🟢  EN 🟢  ES 🟢", tone: "muted" },
  { text: "  Status:       [●] Disponível para novos projetos", tone: "green" },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading index="01 / sobre" title="Sobre mim" />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-text-muted sm:text-xl">
            Comecei programando por curiosidade e terminei fundando uma agência.
            Hoje desenvolvo sistemas que vão de{" "}
            <span className="text-text-primary">ERPs completos</span> a{" "}
            <span className="text-accent-cyan">agentes de IA autônomos</span>{" "}
            integrados ao WhatsApp.
          </p>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Gosto de problemas que cruzam fronteiras: backend robusto, frontend
            caprichado e uma camada de IA que resolve algo de verdade. Mentalidade
            de fundador, disciplina de competidor de maratona.
          </p>
        </Reveal>

        <Reveal index={1}>
          <Terminal title="pedro@autonomia: ~" lines={terminalLines} />
        </Reveal>
      </div>
    </section>
  );
}
