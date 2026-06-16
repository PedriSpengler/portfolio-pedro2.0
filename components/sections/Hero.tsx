"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
});

const NAME = "PEDRO SPENGLER";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};
const letter: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* magnetic particle field */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* radial halo + grid */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.10), transparent 60%)",
        }}
      />
      {/* fade to page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg-primary" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-mono text-sm text-accent-cyan sm:text-base"
        >
          {"> "}desenvolvedor full-stack &amp; ia
          <span className="animate-blink">_</span>
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          aria-label={NAME}
          className="flex flex-wrap items-center justify-center gap-x-[0.25em] font-display text-[clamp(2.25rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary"
        >
          {NAME.split(" ").map((word, wi) => (
            <span key={wi} className="inline-flex whitespace-nowrap">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={ci}
                  variants={letter}
                  className="inline-block"
                  style={{ willChange: "transform, opacity, filter" }}
                >
              {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-7 max-w-2xl text-lg text-text-muted sm:text-2xl"
        >
          Construo produtos reais. Do backend à IA, do conceito ao deploy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("projetos")}
            className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-accent-cyan px-7 py-3 font-mono text-sm font-semibold text-bg-primary shadow-glow-cyan transition-transform duration-200 hover:scale-[1.03]"
          >
            Ver Projetos
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-bg-secondary/60 px-7 py-3 font-mono text-sm font-semibold text-text-primary backdrop-blur transition-colors duration-200 hover:border-accent-cyan/50 hover:text-accent-cyan"
          >
            Entre em contato
          </button>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("sobre")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
