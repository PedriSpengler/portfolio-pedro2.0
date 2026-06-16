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
      "Fundei e liderei a entrega de sistemas web, SaaS e ERPs sob medida para clientes como Lys Paris e Pesqueiro Charrua, gerando R$ 400,00 em receita recorrente.",
      "Desenvolvi aplicações full-stack com React, TypeScript, Node.js e Supabase, integrando agentes de IA e automações em n8n que reduziram o trabalho manual dos clientes em 70%%.",
      "Conduzi toda a operação comercial — prospecção B2B, campanhas de Meta Ads e presença no Instagram — conquistando mais de 15 novos clientes.",
      "Implementei fluxos de multiagentes de IA para automação de processos, resultando em uma redução de 50% no tempo gasto em tarefas repetitivas pelos clientes.",
      "Desenvolvi integrações personalizadas com APIs de terceiros, aumentando a eficiência operacional dos clientes em 40%.",
      "Gerenciei projetos utilizando metodologias ágeis, garantindo entregas pontuais e alinhadas às necessidades dos clientes.",
      "Implementei SDR, RAG e outras técnicas de IA para otimizar processos de vendas e atendimento ao cliente, aumentando a taxa de conversão em 25%.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Supabase", "n8n", "IA", "RAG", "SDR", "Meta Ads", "Instagram", "B2B"],
  },
  {
    company: "Cubo Chat",
    role: "Dev IA & Integrações",
    type: "Júnior",
    period: "Nov 2025 — Jan 2026",
    bullets: [
      "Desenvolvi agentes autônomos e APIs de integração para plataformas de CRM/Omnichannel, atendendo mais de 20 clientes em produção.",
      "Projetei a infraestrutura de dados com PostgreSQL, Supabase e Redis, reduzindo o tempo de resposta das consultas em 20%.",
      "Implementei serviços em Python e pipelines de CI/CD que aceleraram o ciclo de deploy em 12%.",
      "Implementei fluxos de monitoramento e alertas para garantir a estabilidade dos sistemas, resultando em 99,9% de uptime durante o período de estágio.",
      "Implementei testes automatizados e práticas de code review, melhorando a qualidade do código e reduzindo bugs em produção em 30%.",
      "Automatizei procesoss de clínicas, imobiliárias, transportadoras, consórcios, mercados, escritórios de advocacia, entre outros, utilizando agentes de IA e integrações personalizadas",
      "Utilizei metodologias ágeis para colaborar com equipes multifuncionais, entregando soluções de alta qualidade dentro dos prazos estabelecidos.",
      "Desenvolvi fluxos de follow-up, disparo, alimentação de dados e automações personalizadas, aumentando a eficiência operacional dos clientes em 50%.",
    ],
    stack: ["Python", "PostgreSQL", "Supabase", "Redis", "CI/CD", "IA", "CRM", "Omnichannel", "Agentes Autônomos", "Testes Automatizados", "Code Review", "Metodologias Ágeis"],
  },
  {
    company: "Cubo Chat",
    role: "Dev IA & Integrações",
    type: "Estágio",
    period: "Abr 2025 — Nov 2025",
    bullets: [
      "Construí fluxos de automação no n8n e chatbots que processaram mais de 980 atendimentos automatizados.",
      "Desenvolvi APIs RESTful e integrações de mensageria, conectando 4 canais a uma única plataforma.",
      "Atuei em time ágil com metodologia Scrum, entregando mais de 40 features ao longo do estágio.",
    ],
    stack: ["n8n", "RESTful", "Chatbots", "Scrum", "Agile"],
  },
];
