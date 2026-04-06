const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";

const steps = [
  {
    num: "01",
    title: "Create your free account",
    desc: "Sign up in under a minute. No credit card required. Your financial journey starts right here.",
  },
  {
    num: "02",
    title: "Connect your bank",
    desc: "Link your Indian bank securely via the RBI-regulated Account Aggregator framework. We can read transactions — never move a rupee.",
  },
  {
    num: "03",
    title: "Get your AI-powered insights",
    desc: "Your dashboard comes alive instantly. Our AI categorises every UPI and bank transaction so you always know where your money goes.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            borderRadius: 999, padding: "6px 16px",
            border: "1px solid rgba(232,96,74,0.3)", background: PRIMARY_LIGHT, color: PRIMARY,
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
            Simple setup
          </span>
        </div>

        <h2 className="section-h2" style={{
          fontSize: 48, fontWeight: 800, textAlign: "center" as const,
          letterSpacing: "-0.03em", marginBottom: 12, color: INK,
        }}>
          Get started in{" "}
          <span style={{ color: PRIMARY }}>3 easy steps</span>
        </h2>

        <p style={{
          textAlign: "center" as const, fontSize: 16, color: INK3,
          maxWidth: 500, margin: "0 auto 72px",
          lineHeight: 1.6,
        }}>
          No spreadsheets. No complicated onboarding. Connect once - Tallify handles the rest.
        </p>

        {/* Steps */}
        <div style={{
          maxWidth: 680,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column" as const,
          gap: 0,
          position: "relative" as const,
        }}>
          {/* Vertical connector line */}
          <div style={{
            position: "absolute" as const,
            left: 27,
            top: 56,
            bottom: 56,
            width: 2,
            background: "#f5d5cf",
            borderRadius: 999,
          }} />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 32,
                alignItems: "flex-start",
                padding: "32px 0",
                borderBottom: i < steps.length - 1 ? `1px solid ${BORDER}` : "none",
                position: "relative" as const,
              }}
            >
              {/* Number bubble */}
              <div style={{
                flexShrink: 0,
                width: 56,
                height: 56,
                borderRadius: 14,
                background: i === 0 ? PRIMARY : i === 1 ? "#1e1e3f" : `linear-gradient(135deg, ${PRIMARY} 0%, #8b5cf6 100%)`,
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}>
                <span style={{
                  fontSize: 14,
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "0.02em",
                }}>
                  {step.num}
                </span>
              </div>

              {/* Text */}
              <div style={{ paddingTop: 10 }}>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: INK,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: 15,
                  color: INK2,
                  lineHeight: 1.7,
                  maxWidth: 480,
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
