/**
 * Skills grouped by category. `slug` is the canonical identifier used to link
 * a skill badge to the projects that use it (Projects tech-filter feature).
 * `icon` maps to a Simple Icons slug (rendered via CDN in SkillBadge).
 */
export interface Skill {
  name: string;
  slug: string;
  icon?: string; // simple-icons slug
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Linguagens",
    items: [
      { name: "Python", slug: "python", icon: "python" },
      { name: "JavaScript", slug: "javascript", icon: "javascript" },
      { name: "TypeScript", slug: "typescript", icon: "typescript" },
    ],
  },
  {
    category: "Front-end",
    items: [
      { name: "React", slug: "react", icon: "react" },
      { name: "Next.js", slug: "nextjs", icon: "nextdotjs" },
      { name: "Vue", slug: "vue", icon: "vuedotjs" },
      { name: "React Native", slug: "react-native", icon: "react" },
      { name: "Tailwind", slug: "tailwind", icon: "tailwindcss" },
      { name: "SCSS", slug: "scss", icon: "sass" },
    ],
  },
  {
    category: "Back-end & APIs",
    items: [
      { name: "Django", slug: "django", icon: "django" },
      { name: "FastAPI", slug: "fastapi", icon: "fastapi" },
      { name: "Flask", slug: "flask", icon: "flask" },
      { name: "Node.js", slug: "nodejs", icon: "nodedotjs" },
      { name: "RESTful", slug: "rest", icon: "openapiinitiative" },
    ],
  },
  {
    category: "Bancos de Dados",
    items: [
      { name: "PostgreSQL", slug: "postgresql", icon: "postgresql" },
      { name: "Supabase", slug: "supabase", icon: "supabase" },
      { name: "Redis", slug: "redis", icon: "redis" },
      { name: "NoSQL", slug: "nosql", icon: "mongodb" },
    ],
  },
  {
    category: "IA & LLMs",
    items: [
      { name: "OpenAI", slug: "openai" },
      { name: "Claude", slug: "claude", icon: "anthropic" },
      { name: "Gemini", slug: "gemini", icon: "googlegemini" },
      { name: "LangChain", slug: "langchain", icon: "langchain" },
      { name: "RAG", slug: "rag" },
      { name: "Multi-Agentes", slug: "multi-agent" },
      { name: "Groq", slug: "groq" },
    ],
  },
  {
    category: "Automação",
    items: [
      { name: "n8n", slug: "n8n", icon: "n8n" },
      { name: "CI/CD", slug: "cicd", icon: "githubactions" },
      { name: "Evolution API", slug: "evolution-api", icon: "whatsapp" },
      { name: "Chatwoot", slug: "chatwoot", icon: "chatwoot" },
    ],
  },
  {
    category: "Dados",
    items: [
      { name: "Pandas", slug: "pandas", icon: "pandas" },
      { name: "NumPy", slug: "numpy", icon: "numpy" },
      { name: "Power BI", slug: "powerbi" },
      { name: "Scikit-Learn", slug: "sklearn", icon: "scikitlearn" },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", slug: "git", icon: "git" },
      { name: "Docker", slug: "docker", icon: "docker" },
      { name: "Figma", slug: "figma", icon: "figma" },
      { name: "Vite", slug: "vite", icon: "vite" },
      { name: "Jira", slug: "jira", icon: "jira" },
    ],
  },
];

/** Flat lookup: slug -> display name, used by the Projects filter. */
export const skillBySlug: Record<string, string> = Object.fromEntries(
  skillGroups.flatMap((g) => g.items.map((s) => [s.slug, s.name]))
);
