import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://github.com/PedriSpengler", label: "GitHub", Icon: Github },
  {
    href: "https://linkedin.com/in/pedro-spengler-23476b259",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:pedroj.oficial@gmail.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-text-primary">
            Pedro Spengler
          </p>
          <p className="mt-1 font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} — Construído com Next.js, Three.js &
            Tailwind
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-text-muted transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
