"use client";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const cards = [
  {
    emoji: "🤖",
    tag: "AI-Powered",
    title: "AI Transaction Categorisation",
    bullets: [
      "Reads UPI & bank descriptions automatically",
      "Recognises Indian merchants & apps",
      "High accuracy, improves over time",
      "Categorises every transaction instantly",
    ],
    accent: PRIMARY,
    accentBg: PRIMARY_LIGHT,
  },
  {
    emoji: "🏦",
    tag: "Bank Sync",
    title: "Indian Bank Sync",
    bullets: [
      "SBI, HDFC, ICICI, Axis, Kotak & more",
      "RBI Account Aggregator — read-only",
      "Never moves your money",
      "Syncs every 5 minutes",
    ],
    accent: "#6c63ff",
    accentBg: "#f0eeff",
  },
  {
    emoji: "📊",
    tag: "Insights",
    title: "Analytics & Spending Insights",
    bullets: [
      "Monthly & weekly category breakdowns",
      "Savings rate & income tracking",
      "Forecast next month's spending",
      "Visual charts for every rupee",
    ],
    accent: "#0ea5e9",
    accentBg: "#f0f9ff",
  },
  {
    emoji: "⚙️",
    tag: "Automation",
    title: "Allocation Rules",
    bullets: [
      "Set % or fixed amounts per goal",
      "Auto-track SIP & savings targets",
      "\"₹10,000 to emergency fund\" rules",
      "Progress bars updated in real-time",
    ],
    accent: "#22c55e",
    accentBg: "#f0fdf4",
  },
  {
    emoji: "🔔",
    tag: "Alerts",
    title: "Smart Notifications",
    bullets: [
      "Daily spending summaries",
      "Duplicate & fraud detection",
      "Subscription & EMI reminders",
      "Low balance & overspend alerts",
    ],
    accent: "#f59e0b",
    accentBg: "#fffbeb",
  },
  {
    emoji: "❤️",
    tag: "Health Score",
    title: "Financial Health Score",
    bullets: [
      "Monthly AI score from 0–100",
      "Tracks savings rate & stability",
      "Personalised improvement tips",
      "Benchmarked against your goals",
    ],
    accent: "#ec4899",
    accentBg: "#fdf2f8",
  },
  {
    emoji: "📱",
    tag: "UPI",
    title: "UPI & Digital Payments",
    bullets: [
      "Track PhonePe, GPay, Paytm spends",
      "Merchant-level UPI breakdowns",
      "Split expenses across categories",
      "Net flow across all UPI apps",
    ],
    accent: "#8b5cf6",
    accentBg: "#f5f3ff",
  },
  {
    emoji: "🎯",
    tag: "Goals",
    title: "Budget & Goal Planning",
    bullets: [
      "Set monthly budgets per category",
      "Visual goal progress tracker",
      "\"Holiday fund\" or \"car down-payment\"",
      "Smart nudges when off-track",
    ],
    accent: "#14b8a6",
    accentBg: "#f0fdfa",
  },
];

// Duplicate for seamless loop
const allCards = [...cards, ...cards];

function FeatureCard({ card }: { card: typeof cards[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 280,
        borderRadius: 20,
        border: `1.5px solid ${BORDER}`,
        background: "white",
        padding: "24px",
        transition: "box-shadow 0.25s, transform 0.25s, border-color 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.10)";
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = card.accent;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
        el.style.borderColor = BORDER;
      }}
    >
      {/* Icon + Tag */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: card.accentBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22,
        }}>
          {card.emoji}
        </div>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.07em",
          textTransform: "uppercase" as const,
          color: card.accent,
          background: card.accentBg,
          borderRadius: 999,
          padding: "4px 10px",
        }}>
          {card.tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 15, fontWeight: 700, color: INK,
        marginBottom: 14, lineHeight: 1.35,
        letterSpacing: "-0.01em",
      }}>
        {card.title}
      </h3>

      {/* Bullets */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {card.bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: INK2, lineHeight: 1.5 }}>
            <span style={{
              flexShrink: 0, marginTop: 3,
              width: 14, height: 14, borderRadius: "50%",
              background: card.accentBg,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path d="M1 3.5L2.8 5.5L6 1.5" stroke={card.accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MarqueeFeatures() {
  return (
    <section style={{ padding: "96px 0", background: BG2, overflow: "hidden" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", marginBottom: 56 }}>
        {/* Pill badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            borderRadius: 999, padding: "6px 16px",
            border: `1px solid ${BORDER}`, background: "white", color: INK3,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Features
          </span>
        </div>

        <h2 style={{
          fontSize: 48, fontWeight: 800, textAlign: "center" as const,
          letterSpacing: "-0.03em", color: INK, maxWidth: 640,
          margin: "0 auto",
          lineHeight: 1.1,
        }}>
          Join other happy members using Egotally
        </h2>
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: 20,
            width: "max-content",
          }}
        >
          {allCards.map((card, i) => (
            <FeatureCard key={i} card={card} />
          ))}
        </div>
      </div>

      {/* Fade edges */}
      <div style={{
        position: "relative",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute", left: 0, top: -240,
          width: 120, height: 240,
          background: `linear-gradient(to right, ${BG2}, transparent)`,
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute", right: 0, top: -240,
          width: 120, height: 240,
          background: `linear-gradient(to left, ${BG2}, transparent)`,
          zIndex: 2,
        }} />
      </div>
    </section>
  );
}
