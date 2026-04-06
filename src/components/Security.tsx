"use client";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const points = [
  { emoji: "🔐", title: "Strong Encryption", desc: "All data encrypted at rest and in transit using bank-grade AES-256 encryption standards." },
  { emoji: "👁️", title: "Read-Only Access", desc: "We connect via India's Account Aggregator framework in read-only mode. Tallify can never move funds." },
  { emoji: "🏦", title: "AA Framework", desc: "Bank connections powered by RBI's Account Aggregator framework — India's regulated open banking standard." },
  { emoji: "🛡️", title: "DPDP Compliant", desc: "We comply with India's Digital Personal Data Protection Act. Your data is never sold or shared." },
];

export default function Security() {
  return (
    <section id="about" style={{
      padding: "96px 0",
      background: "linear-gradient(135deg, #12111f 0%, #1a1830 50%, #12111f 100%)",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999,
                padding: "6px 16px",
                border: "1px solid rgba(232,96,74,0.4)",
                background: "rgba(232,96,74,0.12)",
                color: PRIMARY,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
                Bank-grade security
              </span>
            </div>

            <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16, color: "white" }}>
              Your data is safe.{" "}
              <span style={{ color: PRIMARY }}>Always.</span>
            </h2>

            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
              We treat your financial data with the highest level of care.
              Security is not an afterthought — it is built into every layer of Tallify.
            </p>

            <a
              href="#waitlist"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "12px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600,
                background: PRIMARY, color: "white", textDecoration: "none",
                transition: "opacity 0.18s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Get started free
            </a>
          </div>

          {/* Right: 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {points.map((p) => (
              <div key={p.title} style={{
                borderRadius: 20, padding: 20,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{p.emoji}</div>
                <h3 style={{ fontWeight: 700, fontSize: 14, color: "white", marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
