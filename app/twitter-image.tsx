import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Pedro Spengler — Desenvolvedor Full-Stack & IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#080B10",
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(0,212,255,0.18), transparent 45%), radial-gradient(circle at 85% 90%, rgba(124,58,237,0.22), transparent 45%), linear-gradient(to right, rgba(33,38,45,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,38,45,0.5) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 100% 100%, 48px 48px, 48px 48px",
          position: "relative",
        }}
      >
        {/* PJS badge */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 80,
            width: 80,
            height: 80,
            borderRadius: 18,
            backgroundColor: "#0E1117",
            border: "2px solid rgba(0,212,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "#00D4FF",
            letterSpacing: -1,
          }}
        >
          PJS
        </div>

        {/* Top block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 28, color: "#00D4FF" }}>
            &gt; desenvolvedor full-stack &amp; ia_
          </div>
          <div
            style={{
              fontSize: 118,
              fontWeight: 700,
              color: "#F0F6FC",
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            PEDRO SPENGLER
          </div>
          <div style={{ fontSize: 34, color: "#8B949E" }}>
            Construo produtos reais. Do backend à IA, do conceito ao deploy.
          </div>
        </div>

        {/* Bottom block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 24,
            color: "#8B949E",
          }}
        >
          <div>Fundador · Autonomia Tech</div>
          <div>Dourados, MS · Brasil</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
