"use client";

import dynamic from "next/dynamic";
import { Github, Linkedin, Mail, MessageCircle, Globe, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FloatingOrb = dynamic(() => import("@/components/three/FloatingOrb"), {
  ssr: false,
});

const channels = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 67 99239-2623",
    href: "https://wa.me/5567992392623",
    accent: true,
  },
  {
    Icon: Mail,
    label: "Email",
    value: "pedroj.oficial@gmail.com",
    href: "mailto:pedroj.oficial@gmail.com",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "PedriSpengler",
    href: "https://github.com/PedriSpengler",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "pedro-spengler",
    href: "https://linkedin.com/in/pedro-spengler-23476b259",
  },
  {
    Icon: Globe,
    label: "Site",
    value: "pedrispengler.com.br",
    href: "https://pedrispengler.com.br",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 md:py-32"
    >
      {/* ambient WebGL orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[440px] w-[440px] -translate-y-1/2 opacity-60 lg:block"
      >
        <FloatingOrb />
      </div>

      <div className="relative z-10 max-w-2xl">
        <SectionHeading
          index="06 / contato"
          title="Vamos construir algo?"
          subtitle="Estou disponível para novos projetos e parcerias. Escolha o canal que preferir — respondo rápido."
        />

        <div className="flex flex-col gap-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} index={i}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className={`group flex items-center gap-4 rounded-xl border bg-bg-secondary/70 p-4 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 ${
                  c.accent
                    ? "border-accent-green/40 hover:border-accent-green hover:shadow-[0_0_40px_rgba(0,255,148,0.12)]"
                    : "border-border hover:border-accent-cyan/50 hover:shadow-glow-cyan"
                }`}
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg ${
                    c.accent
                      ? "bg-accent-green/10 text-accent-green"
                      : "bg-accent-cyan/10 text-accent-cyan"
                  }`}
                >
                  <c.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs text-text-muted">
                    {c.label}
                  </span>
                  <span className="block truncate font-display text-base font-medium text-text-primary">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-text-primary" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
