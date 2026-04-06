"use client";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const testimonials = [
  {
    initials: "RV",
    bg: "#6c63ff",
    name: "Rahul V.",
    role: "Software Engineer, Bangalore",
    stars: 5,
    quote: "I've tried every budgeting app. Tallify is the first that actually works with Indian banks. The auto-sync alone saves me hours every month.",
  },
  {
    initials: "PS",
    bg: "#f0724f",
    name: "Priya S.",
    role: "Business Owner, Mumbai",
    stars: 5,
    quote: "The allocation rules are a game changer. I set up my SIP rule once and it's calculated automatically every time salary hits. Incredible.",
  },
  {
    initials: "AK",
    bg: "#22c55e",
    name: "Arjun K.",
    role: "Freelancer, Pune",
    stars: 5,
    quote: "Finally I can see my savings rate. The health score keeps me accountable — I went from 12% to 34% savings in just three months.",
  },
  {
    initials: "NM",
    bg: "#f59e0b",
    name: "Neha M.",
    role: "Teacher, Delhi",
    stars: 5,
    quote: "The AI sorted all my transactions automatically. Seeing exactly where my money goes completely changed how I spend.",
  },
  {
    initials: "SK",
    bg: "#3b82f6",
    name: "Siddharth K.",
    role: "Doctor, Chennai",
    stars: 5,
    quote: "Simple and clean. Subscription detection caught a service I forgot about — saving me ₹3,500 every single month.",
  },
  {
    initials: "DR",
    bg: "#ec4899",
    name: "Divya R.",
    role: "HR Manager, Hyderabad",
    stars: 5,
    quote: "Setup took under 5 minutes. HDFC and Paytm both connected instantly. The AI showed spending habits I genuinely didn't know I had.",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "96px 0", background: BG2 }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            borderRadius: 999, padding: "6px 16px",
            border: "1px solid rgba(232,96,74,0.3)", background: PRIMARY_LIGHT, color: PRIMARY,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Early users
          </span>
        </div>

        <h2 className="section-h2" style={{
          fontSize: 48, fontWeight: 800, textAlign: "center",
          letterSpacing: "-0.03em", marginBottom: 56, color: INK,
        }}>
          Real people,{" "}
          <span style={{ color: PRIMARY }}>real results</span>
        </h2>

        {/* Grid */}
        <div className="testi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "white", borderRadius: 20, padding: 24,
                border: `1px solid ${BORDER}`,
                transition: "all 0.2s",
                display: "flex", flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = PRIMARY;
                el.style.boxShadow = "0 8px 32px rgba(240,114,79,0.1)";
                el.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = BORDER;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>
                ))}
              </div>

              {/* Quote — grows to fill space */}
              <p style={{
                fontSize: 14, color: INK2, lineHeight: 1.7,
                marginBottom: 20, fontStyle: "normal", flex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: BORDER, marginBottom: 16, borderRadius: 999 }} />

              {/* User — always pinned at bottom */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: t.bg, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: 11, fontWeight: 700,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: INK }}>{t.name}</p>
                  <p style={{ fontSize: 12, color: INK3 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
