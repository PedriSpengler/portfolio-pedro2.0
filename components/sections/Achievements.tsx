import {
  Award,
  GraduationCap,
  FlaskConical,
  Rocket,
  Mic,
  ShieldCheck,
  Users,
  BrainCircuit,
  ScrollText,
} from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const achievements = [
  {
    Icon: ShieldCheck,
    title: "Registro de Software no INPI — 2026",
    desc: "Coautor do programa “Portfólio Comercial Pesqueiro Charruá”, registrado pela UFGD (proc. BR512026001532-4).",
    color: "text-[#b794ff]",
  },
  {
    Icon: Award,
    title: "Honra ao Mérito — ICPC South America 2024",
    desc: "Maratona SBC de Programação, nível sul-americano.",
    color: "text-accent-cyan",
  },
  {
    Icon: GraduationCap,
    title: "CS50 Python — Harvard (Dez 2025)",
    desc: "Sintaxe, POO, testes e regex.",
    color: "text-accent-green",
  },
  {
    Icon: FlaskConical,
    title: "Pesquisador — SBIE 2026",
    desc: "Trabalho submetido ao Simpósio Brasileiro de Informática na Educação.",
    color: "text-[#b794ff]",
  },
  {
    Icon: Users,
    title: "Extensão ONI — UFGD (2025)",
    desc: "Membro discente voluntário do Observatório de Negócios e Inovação (280h).",
    color: "text-accent-cyan",
  },
  {
    Icon: BrainCircuit,
    title: "PsiMatch — IA de pareamento (LABin 2025)",
    desc: "Coautor do sistema inteligente de pareamento empático entre pacientes e psicólogos; pôster publicado (ISBN) no Workshop de Empreendedorismo e Inovação da UFGD.",
    color: "text-[#b794ff]",
  },
  {
    Icon: Rocket,
    title: "2º lugar — Startup Weekend Dourados 2024",
    desc: "Inovação e desenvolvimento ágil de produto.",
    color: "text-accent-cyan",
  },
  {
    Icon: Mic,
    title: "Ministrante — Introdução ao n8n (SIC 2025)",
    desc: "Oficina de 8h em automação low-code na Semana Integrada da Computação.",
    color: "text-accent-green",
  },
];

const certificates = [
  {
    title: "Inglês C2 Proficiente — 74/100",
    meta: "EF SET · 2023",
  },
  {
    title: "Python (Basic)",
    meta: "HackerRank · 2025",
  },
  {
    title: "Evolution Camp (3ª temporada)",
    meta: "AOOP · NTT Data · 2026 · 15h",
  },
  {
    title: "Java com Spring Boot — aplicação back-end",
    meta: "Rocketseat · 2023 · 4h",
  },
  {
    title: "NLW Expert — React Native, Expo & Zustand",
    meta: "Rocketseat · 2024 · 5h",
  },
  {
    title: "Construindo um sistema com JavaScript e React",
    meta: "Semana Integrada da Computação · 2022 · 9h",
  },
  {
    title: "Fundamentos de Cloud Computing (AWS)",
    meta: "DIO · 2023 · 5h",
  },
  {
    title: "Introdução ao TensorFlow e Keras",
    meta: "Semana Integrada da Computação · 2023 · 6h",
  },
  {
    title: "Aplicação de IA no ambiente acadêmico",
    meta: "ENEPEX / SBPC-MS · 2025 · 4h",
  },
  {
    title: "Go-lang: introdução e usos da linguagem",
    meta: "Semana Integrada da Computação · 2023 · 4h",
  },
  {
    title: "Destrinchando Debian GNU/Linux e C",
    meta: "Semana Integrada da Computação · 2023 · 12h",
  },
  {
    title: "Trilha Conectar — fundamentos de programação",
    meta: "Rocketseat Discover · 2023",
  },
  {
    title: "Aprendendo a utilizar o software OkAPP",
    meta: "Semana Integrada da Computação · 2022 · 8h",
  },
  {
    title: "Maratona SBC de Programação — Fase Zero (Menção Honrosa)",
    meta: "UFGD · 2024",
  },
  {
    title: "Maratona de Programação dos Duendes",
    meta: "A.A.A. COMP · 2023 · 6h",
  },
  {
    title: "Iniciação Científica — artigo apresentado no X ENEPEX",
    meta: "UFGD · 2024",
  },
  {
    title: "Organização (infraestrutura) — Semana Integrada da Computação",
    meta: "UFGD · 2024 · 144h",
  },
  {
    title: "Jornada de uma Startup: negócio de base tecnológica",
    meta: "Semana Integrada da Computação · 2022 · 4h",
  },
  {
    title: "2º Encontro SBPC-MS / ENEPEX 2025",
    meta: "UEMS · UFGD · 40h",
  },
  {
    title: "Semana Integrada da Computação (SIC)",
    meta: "UEMS · UFGD · 2022 · 20h",
  },
  {
    title: "Artes para Mídias Sociais (Photoshop)",
    meta: "LojaPhotoshop · 2022",
  },
  {
    title: "Atleta universitário — Futsal e Beach Soccer (JUMS)",
    meta: "CBDU · 2022–2025",
  },
];

export function Achievements() {
  return (
    <section
      id="conquistas"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading
        index="05 / conquistas"
        title="Conquistas & reconhecimento"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} index={i % 3}>
            <GlowCard noSpotlight className="h-full p-6">
              <a.Icon className={`h-8 w-8 ${a.color}`} strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-text-primary">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {a.desc}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-16 mb-5 font-mono text-sm font-medium text-accent-cyan">
          Certificados &amp; cursos
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {certificates.map((c) => (
            <li
              key={c.title}
              className="flex items-start gap-3 rounded-lg border border-border bg-bg-secondary px-4 py-3"
            >
              <ScrollText
                className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan"
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <p className="text-sm font-medium leading-snug text-text-primary">
                  {c.title}
                </p>
                <p className="mt-0.5 font-mono text-xs text-text-muted">
                  {c.meta}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
