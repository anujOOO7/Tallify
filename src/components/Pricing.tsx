"use client";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Perfect for getting started with manual tracking.",
    popular: false,
    features: ["Unlimited transactions", "Manual entry", "Transaction stats", "Unlimited allocation rules", "Smart notifications", "Basic spending charts"],
  },
  {
    name: "Starter",
    price: "₹699",
    period: "per month",
    desc: "Great for individuals who want auto-sync & AI.",
    popular: false,
    features: ["Everything in Free", "1 bank connection", "Auto transaction sync", "AI categorisation", "Subscription detection", "Basic Analytics", "Priority support"],
  },
  {
    name: "Premium",
    price: "₹999",
    period: "per month",
    desc: "Best for those with multiple bank accounts.",
    popular: true,
    features: ["Everything in Starter", "3 bank connections", "Advanced analytics", "Merchant Intelligence", "Financial health score", "Premium support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "96px 0", background: BG2 }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 999,
            padding: "6px 16px", border: "1px solid rgba(232,96,74,0.3)", background: PRIMARY_LIGHT, color: PRIMARY,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Simple, transparent pricing
          </span>
        </div>

        <h2 className="pricing-h2" style={{ fontSize: 48, fontWeight: 800, textAlign: "center", letterSpacing: "-0.03em", marginBottom: 16, color: INK }}>
          Start free. Upgrade when you're ready.
        </h2>
        <p style={{ textAlign: "center", fontSize: 17, color: INK2, maxWidth: 440, margin: "0 auto 56px" }}>
          No hidden fees. No lock-in. Cancel anytime.
        </p>

        {/* Cards */}
        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, maxWidth: 1080, margin: "0 auto" }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                position: "relative", borderRadius: 32, padding: "36px 32px 32px",
                display: "flex", flexDirection: "column",
                background: plan.popular ? PRIMARY : "white",
                border: plan.popular ? "none" : `1.5px solid ${BORDER}`,
                boxShadow: plan.popular ? "0 24px 64px rgba(232,96,74,0.28)" : "0 2px 16px rgba(11,11,26,0.05)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = plan.popular
                  ? "0 32px 80px rgba(232,96,74,0.35)"
                  : "0 16px 48px rgba(11,11,26,0.10)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = plan.popular
                  ? "0 24px 64px rgba(232,96,74,0.28)"
                  : "0 2px 16px rgba(11,11,26,0.05)";
              }}
            >
              {plan.popular && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{
                    background: "white", color: PRIMARY,
                    fontSize: 11, fontWeight: 700, padding: "5px 16px",
                    borderRadius: 999, boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                    whiteSpace: "nowrap",
                  }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div style={{ marginBottom: 24 }}>
                <p style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: plan.popular ? "rgba(255,255,255,0.9)" : INK }}>
                  {plan.name}
                </p>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 10 }}>
                  <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em", color: plan.popular ? "white" : INK }}>{plan.price}</span>
                  <span style={{ fontSize: 13, marginBottom: 8, color: plan.popular ? "rgba(255,255,255,0.6)" : INK3 }}>/ {plan.period}</span>
                </div>
                <p style={{ fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.7)" : INK2, lineHeight: 1.5 }}>{plan.desc}</p>
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: plan.popular ? "rgba(255,255,255,0.18)" : BORDER,
                margin: "0 8px 28px",
                borderRadius: 999,
              }} />

              {/* Features list — grows to fill space */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: plan.popular ? "rgba(255,255,255,0.2)" : PRIMARY_LIGHT,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke={plan.popular ? "white" : PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.85)" : INK2, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA — pinned to bottom */}
              <a
                href="#waitlist"
                style={{
                  display: "block", textAlign: "center", padding: "14px 20px",
                  borderRadius: 999, fontSize: 14, fontWeight: 700,
                  background: plan.popular ? "white" : PRIMARY,
                  color: plan.popular ? PRIMARY : "white",
                  textDecoration: "none", marginTop: 32,
                  transition: "opacity 0.18s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                Join Waitlist
              </a>

            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: INK3, marginTop: 32 }}>
          All plans include a 7-day free trial. Annual billing saves 20%.
        </p>
      </div>
    </section>
  );
}
