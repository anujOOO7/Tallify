"use client";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const features = [
  { emoji: "💰", title: "Track Every Rupee", desc: "See every debit and credit across all your accounts in one unified feed, automatically sorted and labelled." },
  { emoji: "🔄", title: "Smart Allocations", desc: "Set rules to automatically split your income — SIPs, rent, EMIs, savings — the moment your salary arrives." },
  { emoji: "🤖", title: "AI Categorisation", desc: "Transactions are grouped by merchant and pattern using models trained specifically on Indian spending habits." },
  { emoji: "📊", title: "Spending Insights", desc: "Interactive charts show income vs. spending trends, category breakdown, and month-by-month forecasts." },
  { emoji: "🔔", title: "Smart Notifications", desc: "Get alerts for unusual spending, approaching budget limits, and duplicate charges before they compound." },
  { emoji: "🔐", title: "Read-Only Access", desc: "Tallify can never move your money. We connect read-only via Account Aggregator — your funds are fully safe." },
  { emoji: "🚫", title: "Subscription Detection", desc: "We flag recurring OTT, app, and SaaS charges you may have forgotten and show the true yearly cost." },
  { emoji: "📈", title: "Monthly Health Score", desc: "A plain-English financial health score each month with personalised next steps to improve it." },
];

// Duplicate cards for seamless infinite loop
const allCards = [...features, ...features];

export default function Features() {
  return (
    <section style={{ padding: "96px 0", background: "white", overflow: "hidden" }}>

      {/* Header — constrained width */}
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", marginBottom: 56 }}>

        {/* Label */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              padding: "6px 16px",
              border: "1px solid rgba(232,96,74,0.3)",
              background: PRIMARY_LIGHT,
              color: PRIMARY,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Why Tallify?
          </span>
        </div>

        {/* Heading */}
        <h2
          className="section-h2"
          style={{
            fontSize: 48,
            fontWeight: 800,
            textAlign: "center" as const,
            letterSpacing: "-0.03em",
            marginBottom: 16,
            color: INK,
          }}
        >
          Join other happy members<br />using Tallify
        </h2>

        {/* Subtext */}
        <p
          style={{
            textAlign: "center" as const,
            fontSize: 17,
            color: INK3,
            maxWidth: 480,
            margin: "0 auto 0",
          }}
        >
          Everything you need to manage your money smarter
        </p>
      </div>

      {/* Marquee track — full viewport width */}
      <div style={{ position: "relative" }}>
        {/* Fade left */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to right, white, transparent)",
        }} />
        {/* Fade right */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(to left, white, transparent)",
        }} />

        <div
          className="marquee-track"
          style={{ display: "flex", gap: 20, width: "max-content", padding: "8px 0" }}
        >
          {allCards.map((f, idx) => (
            <div
              key={idx}
              style={{
                flexShrink: 0,
                width: 260,
                borderRadius: 20,
                padding: 24,
                cursor: "default",
                background: BG2,
                border: `1.5px solid ${BORDER}`,
                transition: "all 0.22s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = PRIMARY_LIGHT;
                el.style.borderColor = PRIMARY;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 36px rgba(232,96,74,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = BG2;
                el.style.borderColor = BORDER;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Emoji */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 18,
                  boxShadow: "0 8px 24px rgba(11,11,26,0.06)",
                }}
              >
                {f.emoji}
              </div>

              {/* Title */}
              <h3 style={{ fontWeight: 700, fontSize: 15, color: INK, marginBottom: 8 }}>
                {f.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 13, color: INK2, lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}