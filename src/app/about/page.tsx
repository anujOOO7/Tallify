"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";

const values = [
  { icon: "🤝", title: "Honest by Design", desc: "No hidden fees, no dark patterns. What you see is what you get." },
  { icon: "🔒", title: "Privacy First", desc: "Your data is yours. We never sell it, never share it, never misuse it." },
  { icon: "🇮🇳", title: "Built for India", desc: "Designed around Indian banks, UPI, SIPs, and how Indians actually manage money." },
  { icon: "✨", title: "Simplicity Wins", desc: "Finance is complex. Your app shouldn't be. We obsess over clarity." },
  { icon: "🤖", title: "AI-Powered", desc: "We use AI to do the hard work — categorising, analysing, and nudging — so you don't have to." },
  { icon: "👤", title: "User-Centric", desc: "Every decision we make starts with one question: does this help our user?" },
  { icon: "♿", title: "Accessible to All", desc: "From students to senior professionals — Tallify is built for every Indian." },
  { icon: "⚡", title: "Speed & Reliability", desc: "Your money moves fast. Your app should too." },
];

const stats = [
  { value: "₹0", label: "To get started" },
  { value: "3 min", label: "Setup time" },
  { value: "20+", label: "Banks supported" },
  { value: "100%", label: "Read-only access" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section style={{
        background: "linear-gradient(160deg, #fff8f7 0%, #ffffff 50%, #fff5f3 100%)",
        padding: "120px 0 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: PRIMARY_LIGHT, border: `1px solid rgba(240,114,79,0.2)`,
            borderRadius: 999, padding: "6px 16px", marginBottom: 28,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: PRIMARY, display: "inline-block" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>Our Story</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(40px, 7vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: INK,
            margin: "0 0 24px",
          }}>
            Built for India.<br />
            <span style={{ color: PRIMARY }}>By Indians.</span>
          </h1>

          <p style={{
            maxWidth: 540,
            margin: "0 auto",
            fontSize: 18,
            color: INK2,
            lineHeight: 1.7,
            fontFamily: "var(--font-dm-sans)",
          }}>
            We believe every Indian deserves a clear picture of their finances — not just the wealthy. Tallify was built to make that possible.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}>
            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: PRIMARY_LIGHT, border: `1px solid rgba(240,114,79,0.2)`,
                borderRadius: 999, padding: "6px 16px", marginBottom: 20,
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>Our Mission</span>
              </div>

              <h2 style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: INK,
                margin: "0 0 20px",
                lineHeight: 1.15,
              }}>
                Financial clarity for every Indian
              </h2>

              <p style={{ fontSize: 16, color: INK2, lineHeight: 1.75, fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                Tallify connects directly to your Indian bank accounts through the Account Aggregator framework — the RBI-backed, consent-driven system that lets you share your financial data securely.
              </p>
              <p style={{ fontSize: 16, color: INK2, lineHeight: 1.75, fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                Every UPI transaction, every SIP payment, every bank transfer — all tracked automatically and categorised using AI so you always know where your money is going.
              </p>
              <p style={{ fontSize: 16, color: INK2, lineHeight: 1.75, fontFamily: "var(--font-dm-sans)" }}>
                No more manual entries. No more spreadsheets. Just clear, real-time financial insight built for the way India actually banks.
              </p>
            </div>

            {/* Right — stat cards grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  background: "#f7f7f8",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 20,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}>
                  <span style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 48,
                    fontWeight: 800,
                    color: PRIMARY,
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: 13, color: INK3, fontFamily: "var(--font-dm-sans)" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ background: "#f7f7f8", padding: "80px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: PRIMARY_LIGHT, border: `1px solid rgba(240,114,79,0.2)`,
              borderRadius: 999, padding: "6px 16px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>Our Values</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: INK,
              margin: 0,
            }}>
              What we stand for
            </h2>
          </div>

          {/* 4-column grid of 8 cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: "#ffffff",
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                padding: 20,
              }}>
                <div style={{ fontSize: 28, marginBottom: 12, lineHeight: 1 }}>{v.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: INK,
                  margin: "0 0 8px",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: INK2,
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "var(--font-dm-sans)",
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: PRIMARY_LIGHT, border: `1px solid rgba(240,114,79,0.2)`,
              borderRadius: 999, padding: "6px 16px", marginBottom: 20,
            }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>The Team</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: INK,
              margin: 0,
            }}>
              Built by people who care
            </h2>
          </div>

          {/* Founder card */}
          <div style={{
            maxWidth: 480,
            margin: "0 auto",
            background: "#f7f7f8",
            border: `1px solid ${BORDER}`,
            borderRadius: 24,
            padding: 36,
            textAlign: "center",
          }}>
            {/* Avatar */}
            <div style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: PRIMARY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <span style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: 28,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}>
                AK
              </span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 20,
              fontWeight: 700,
              color: INK,
              margin: "0 0 4px",
            }}>
              Anuj Kumar
            </h3>
            <p style={{ fontSize: 14, color: INK3, margin: "0 0 8px", fontFamily: "var(--font-dm-sans)" }}>
              Founder &amp; CEO
            </p>
            <p style={{ fontSize: 13, color: INK3, margin: "0 0 20px", fontFamily: "var(--font-dm-sans)" }}>
              India 🇮🇳 · Founded 2025
            </p>

            <div style={{
              borderTop: `1px solid ${BORDER}`,
              paddingTop: 20,
            }}>
              <p style={{
                fontSize: 15,
                color: INK2,
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: 0,
                fontFamily: "var(--font-dm-sans)",
              }}>
                "I built Tallify because I was frustrated — I had money in three banks and no idea where it was all going. If that's you too, this is for you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{
        background: "linear-gradient(135deg, #12111f 0%, #1a1830 50%, #12111f 100%)",
        padding: "80px 0",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            margin: "0 0 16px",
          }}>
            Ready to take control of your money?
          </h2>
          <p style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.6)",
            margin: "0 0 36px",
            fontFamily: "var(--font-dm-sans)",
          }}>
            Join thousands of Indians already on the waitlist.
          </p>
          <a
            href="/#waitlist"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 700,
              color: "#ffffff",
              background: PRIMARY,
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans)",
              transition: "opacity 0.18s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Join the Waitlist →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
