"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";

const links = [
  { id: "sobre", label: "sobre" },
  { id: "experiencia", label: "experiência" },
  { id: "projetos", label: "projetos" },
  { id: "skills", label: "skills" },
  { id: "conquistas", label: "conquistas" },
  { id: "contato", label: "contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  function go(id: string) {
    setOpen(false);
    scrollToSection(id);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-bg-primary/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          aria-label="Voltar ao topo"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-accent-cyan/40 bg-accent-cyan/10 font-mono text-sm text-accent-cyan transition-colors group-hover:bg-accent-cyan/20">
            P
          </span>
          <span className="hidden sm:inline">
            Pedro<span className="text-accent-cyan">.</span>
          </span>
        </button>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "relative rounded-md px-3 py-2 font-mono text-sm transition-colors",
                  active === l.id
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-xs text-text-muted lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            Disponível
          </span>

          <a
            href="/cv-pedro-spengler.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md border border-border bg-bg-secondary px-3 py-2 font-mono text-xs text-text-primary transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan sm:flex"
          >
            <Download className="h-3.5 w-3.5" />
            Currículo PDF
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-text-primary md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full rounded-md px-3 py-2.5 text-left font-mono text-sm text-text-muted transition-colors hover:bg-bg-surface hover:text-text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/cv-pedro-spengler.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-md bg-accent-cyan/10 px-3 py-2.5 font-mono text-sm text-accent-cyan"
                >
                  <Download className="h-4 w-4" /> Currículo PDF
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
