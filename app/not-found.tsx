import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Rota não encontrada",
};

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-5">
      <div className="w-full max-w-lg">
        <div className="overflow-hidden rounded-xl border border-border bg-[#0a0d12] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-bg-surface/60 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-xs text-text-muted">
              pedro@portfolio: ~
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-text-primary">
              <span className="text-accent-green">$ </span>cd{" "}
              <span className="text-accent-cyan">/rota-solicitada</span>
            </p>
            <p className="mt-2 text-[#ff6b6b]">
              bash: cd: rota não encontrada (404)
            </p>
            <p className="mt-4 text-text-muted">
              # A página que você procura não existe ou foi movida.
            </p>
            <p className="mt-4 text-text-primary">
              <span className="text-accent-green">$ </span>
              <Link
                href="/"
                className="text-accent-cyan underline-offset-4 hover:underline"
              >
                cd ~/home
              </Link>
              <span className="animate-blink"> ▋</span>
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent-cyan px-6 py-3 font-mono text-sm font-semibold text-bg-primary shadow-glow-cyan transition-transform hover:scale-[1.03]"
        >
          ← Voltar ao início
        </Link>
      </div>
    </main>
  );
}
