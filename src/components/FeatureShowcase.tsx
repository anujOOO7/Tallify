"use client";

import Image from "next/image";
import type { ReactElement } from "react";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const CARD_BG = "#ffffff";

// SVG icons per card
const icons: Record<string, ReactElement> = {
  ai: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c63ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  bank: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10h18M3 14h18M5 6l7-3 7 3M4 10v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
    </svg>
  ),
  analytics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={PRIMARY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  allocation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l5.2 3" />
    </svg>
  ),
  notification: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  health: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

const cards = [
  {
    image: "/resources/ai-categorisation.png",
    iconKey: "ai",
    iconBg: "#ede9fe",
    aiPowered: true,
    title: "AI Transaction Categorisation",
    desc: "Our AI engine automatically reads your UPI and bank transaction descriptions and assigns the right category.",
    bullets: ["Smart merchant recognition", "India-specific categories", "High accuracy rates", "Auto-categorise every transaction"],
    bulletColor: PRIMARY,
  },
  {
    image: "/resources/bank-sync.png",
    iconKey: "bank",
    iconBg: "#e0f2fe",
    aiPowered: false,
    title: "Indian Bank Sync",
    desc: "Link all your accounts securely via India's RBI-regulated Account Aggregator framework.",
    bullets: ["SBI, HDFC, ICICI, Axis & more", "Powered by Account Aggregator", "Read-only — never moves money", "Auto-sync every 5 minutes"],
    bulletColor: PRIMARY,
  },
  {
    image: "/resources/analytics.png",
    iconKey: "analytics",
    iconBg: PRIMARY_LIGHT,
    aiPowered: false,
    title: "Analytics & Spending Insights",
    desc: "Interactive charts show exactly where your money goes — by category, merchant, and month.",
    bullets: ["Monthly & weekly breakdowns", "Income vs expense trends", "Forecast next month", "Category-wise deep dive"],
    bulletColor: PRIMARY,
  },
  {
    image: "/resources/allocations.png",
    iconKey: "allocation",
    iconBg: "#dcfce7",
    aiPowered: false,
    title: "Allocation Rules",
    desc: "Set it once — Tallify automatically splits your income into savings, SIPs, EMIs, and more the moment your salary lands.",
    bullets: ["Percentage or fixed amount rules", "SIP & savings auto-tracking", "Progress shown in real-time", "Salary-triggered allocations"],
    bulletColor: PRIMARY,
  },
  {
    image: "/resources/notifications.png",
    iconKey: "notification",
    iconBg: "#fef3c7",
    aiPowered: true,
    title: "Smart Notifications",
    desc: "Get nudged at the right moment — before you overspend, when subscriptions renew, and when your balance dips low.",
    bullets: ["Daily spending summaries", "Duplicate charge detection", "Subscription & EMI reminders", "Low balance & overspend alerts"],
    bulletColor: PRIMARY,
  },
  {
    image: "/resources/health-score.png",
    iconKey: "health",
    iconBg: "#fce7f3",
    aiPowered: true,
    title: "Financial Health Score",
    desc: "A single score from 0–100 that tells you exactly how healthy your finances are, updated every month by AI.",
    bullets: ["AI-calculated monthly score", "Tracks savings rate & stability", "Personalised tips to improve", "Benchmarked against your goals"],
    bulletColor: PRIMARY,
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" style={{ padding: "88px 0", background: "#f8f8fc" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999,
            padding: "6px 16px", border: "1px solid rgba(232,96,74,0.3)",
            background: PRIMARY_LIGHT, color: PRIMARY,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Everything you need
          </span>
        </div>

        <h2 className="section-h2" style={{
          fontSize: 48, fontWeight: 800, textAlign: "center" as const,
          letterSpacing: "-0.03em", marginBottom: 12, color: INK,
        }}>
          Built for how Indians actually manage money
        </h2>

        <p style={{
          textAlign: "center" as const, fontSize: 17, color: INK2,
          maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.6,
        }}>
          From tracking every transaction to automating your allocations - Tallify handles it all.
        </p>

        {/* 3-column grid */}
        <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="feature-card"
              style={{
                borderRadius: 22, background: CARD_BG,
                border: `1px solid ${BORDER}`,
                boxShadow: "0 2px 12px rgba(11,11,26,0.06)",
                overflow: "hidden",
                display: "flex", flexDirection: "column" as const,
                transition: "transform 0.22s, box-shadow 0.22s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 16px 48px rgba(11,11,26,0.11)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 2px 12px rgba(11,11,26,0.06)";
              }}
            >
              {/* Image — top 35% fixed height */}
              <div style={{
                height: 200,
                overflow: "hidden",
                flexShrink: 0,
                background: "#f0f0f6",
              }}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={420}
                  height={200}
                  className="feature-card-img"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>

              {/* Bottom content */}
              <div style={{ padding: "22px 22px 26px", flex: 1, display: "flex", flexDirection: "column" as const }}>

                {/* Icon row: icon + AI badge side by side */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  {/* Icon pill */}
                  <div style={{
                    width: 38, height: 38, borderRadius: 12,
                    background: card.iconBg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {icons[card.iconKey]}
                  </div>

                  {/* AI-POWERED badge — only when applicable */}
                  {card.aiPowered && (
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: 4,
                      borderRadius: 999, padding: "4px 10px",
                      background: "#f5f3ff", color: "#7c3aed",
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.06em",
                    }}>
                      ✦ AI-POWERED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 16, fontWeight: 800, color: INK, marginBottom: 8, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                  {card.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 13, color: INK2, lineHeight: 1.65, marginBottom: 16 }}>
                  {card.desc}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8, marginTop: "auto" }}>
                  {card.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5, color: INK2 }}>
                      {/* Coral filled circle checkmark */}
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <circle cx="8" cy="8" r="8" fill={PRIMARY} />
                        <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
