/**
 * Project catalogue. `techSlugs` reference canonical skill slugs in skills.ts
 * so the Skills section can highlight which projects use a given technology.
 */
export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  stack: string[];
  techSlugs: string[];
  /** Gradient pair used for the generated preview mockup. */
  gradient: [string, string];
  links: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: "eulovevoce",
    name: "Eulovevoce",
    tagline: "SaaS Sazonal de Declarações Românticas",
    description:
      "Plataforma para criar páginas de declaração com pagamento via webhook, geração de texto por IA, embeds de Spotify/YouTube e QR code de compartilhamento.",
    tags: ["SaaS", "IA", "Full-Stack"],
    stack: ["Next.js 14", "TypeScript", "Supabase", "Kiwify", "Resend", "i18n"],
    techSlugs: ["nextjs", "typescript", "supabase", "openai"],
    gradient: ["#7C3AED", "#00D4FF"],
    links: {
      live: "https://eulovevoce.com.br",
      github: "https://github.com/PedriSpengler",
    },
  },
  {
    id: "lys-paris-erp",
    name: "Lys Paris ERP",
    tagline: "Sistema de Gestão e PDV para varejo de moda",
    description:
      "ERP completo com PDV: pagamentos divididos, cashback, cupons e controle multivariante (cor/tamanho). Arquitetura tipada de ponta a ponta.",
    tags: ["ERP", "Full-Stack"],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "shadcn/ui",
      "TanStack Query",
      "Zod",
      "Supabase",
    ],
    techSlugs: ["react", "typescript", "vite", "tailwind", "supabase"],
    gradient: ["#00D4FF", "#00FF94"],
    links: {
      github: "https://github.com/PedriSpengler",
    },
  },
  {
    id: "poupas-financas",
    name: "Poupas Finanças",
    tagline: "Assistente Financeiro com IA no WhatsApp (TCC)",
    description:
      "Pipeline RAG completo para um assistente financeiro conversacional no WhatsApp, com integração via EvolutionAPI e orquestração de automações no n8n.",
    tags: ["IA", "Automação", "TCC"],
    stack: ["Python", "n8n", "EvolutionAPI", "RAG", "Supabase"],
    techSlugs: ["python", "n8n", "evolution-api", "rag", "supabase"],
    gradient: ["#00FF94", "#00D4FF"],
    links: {
      github: "https://github.com/PedriSpengler",
    },
  },
  {
    id: "imobiliaria-automation",
    name: "Imobiliária Automation",
    tagline: "Pipeline de Web Scraping Inteligente",
    description:
      "Scraping com paginação dinâmica, formatação estruturada por IA (JSON) e atendimento ágil via WhatsApp — tudo orquestrado em n8n.",
    tags: ["Automação", "n8n", "IA"],
    stack: ["n8n", "Python", "Supabase", "OpenAI", "WhatsApp"],
    techSlugs: ["n8n", "python", "supabase", "openai", "evolution-api"],
    gradient: ["#7C3AED", "#00FF94"],
    links: {
      github: "https://github.com/PedriSpengler",
    },
  },
];
