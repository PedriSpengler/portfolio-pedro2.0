export type RoleType = "Fundador" | "Júnior" | "Estágio";

export interface Experience {
  company: string;
  role: string;
  type: RoleType;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
}

/** Reverse-chronological order (most recent first). */
export const experiences: Experience[] = [
  {
    company: "Autonomia Tech",
    role: "Desenvolvedor Full-Stack & IA",
    type: "Fundador",
    period: "Jan 2026 — Presente",
    current: true,
    bullets: [
      "Sistemas web, SaaS e ERPs sob medida (Lys Paris, Pesqueiro Charrua).",
      "Desenvolvimento com React, TypeScript, Node.js, Supabase, n8n e agentes de IA.",
      "Gestão de negócio: prospecção B2B, Meta Ads e presença no Instagram.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Supabase", "n8n", "IA"],
  },
  {
    company: "Cubo Chat",
    role: "Dev IA & Integrações",
    type: "Júnior",
    period: "Nov 2025 — Jan 2026",
    bullets: [
      "Agentes autônomos e APIs para CRM / Omnichannel.",
      "Infra com PostgreSQL, Supabase, Redis e pipelines de CI/CD.",
      "Desenvolvimento de serviços em Python.",
    ],
    stack: ["Python", "PostgreSQL", "Supabase", "Redis", "CI/CD"],
  },
  {
    company: "Cubo Chat",
    role: "Dev IA & Integrações",
    type: "Estágio",
    period: "Abr 2025 — Nov 2025",
    bullets: [
      "Construção de fluxos de automação no n8n e chatbots.",
      "APIs RESTful e integrações de mensageria.",
      "Trabalho em time com metodologia Scrum.",
    ],
    stack: ["n8n", "RESTful", "Chatbots", "Scrum"],
  },
];
