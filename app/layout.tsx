import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://pedrispengler.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pedro Spengler — Desenvolvedor Full-Stack & IA",
    template: "%s — Pedro Spengler",
  },
  description:
    "Desenvolvedor Full-Stack & IA com 5 anos de experiência. Fundador da Autonomia Tech, pesquisador de LLMs e competidor de maratona de programação. Construo produtos reais — do backend à IA, do conceito ao deploy.",
  keywords: [
    "Pedro Spengler",
    "Desenvolvedor Full-Stack",
    "Engenheiro de IA",
    "Python",
    "Next.js",
    "LLMs",
    "Autonomia Tech",
    "Dourados",
    "UFGD",
  ],
  authors: [{ name: "Pedro Joaquim Azevedo Spengler", url: SITE_URL }],
  creator: "Pedro Joaquim Azevedo Spengler",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Pedro Spengler",
    title: "Pedro Spengler — Desenvolvedor Full-Stack & IA",
    description:
      "Construo produtos reais. Do backend à IA, do conceito ao deploy. SaaS, ERPs e agentes de IA autônomos.",
    // Imagem (og:image) gerada por app/opengraph-image.tsx como PNG.
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Spengler — Desenvolvedor Full-Stack & IA",
    description:
      "Construo produtos reais. Do backend à IA, do conceito ao deploy.",
    // Imagem (twitter:image) gerada por app/twitter-image.tsx como PNG.
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080B10",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Joaquim Azevedo Spengler",
  alternateName: "Pedro Spengler",
  url: SITE_URL,
  jobTitle: "Desenvolvedor Full-Stack & IA",
  email: "mailto:pedroj.oficial@gmail.com",
  worksFor: { "@type": "Organization", name: "Autonomia Tech" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal da Grande Dourados (UFGD)",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dourados",
    addressRegion: "MS",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "LLMs",
    "Inteligência Artificial",
    "Automação",
  ],
  sameAs: [
    "https://github.com/PedriSpengler",
    "https://linkedin.com/in/pedro-spengler-23476b259",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-display antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#sobre"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-cyan focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg-primary"
        >
          Pular para o conteúdo
        </a>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
