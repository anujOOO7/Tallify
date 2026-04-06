"use client";

import { useState } from "react";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";
const BG2 = "#f7f7f8";

const banks = ["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak", "Yes Bank", "Paytm", "& more"];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section
      style={{
        paddingTop: 96,
        paddingBottom: 0,
        minHeight: "100vh",
        background: "linear-gradient(160deg, #fff8f7 0%, #ffffff 50%, #fff5f3 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: 80, right: 0,
        width: 600, height: 600, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(232,96,74,0.07) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(232,96,74,0.05) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

          {/* Left column */}
          <div style={{ padding: "32px 0" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 999, padding: "6px 16px",
              border: `1px solid ${PRIMARY}`,
              background: PRIMARY_LIGHT,
              color: PRIMARY, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
              Now Accepting Early Access
            </div>

            {/* Heading */}
            <h1 className="hero-h1" style={{
              fontSize: 60, fontWeight: 800, lineHeight: 1.08,
              letterSpacing: "-0.03em", marginBottom: 24, color: INK,
            }}>
              Your money,{" "}
              <span className="hero-em" style={{ color: PRIMARY, fontStyle: "italic" }}>
                finally makes sense
              </span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: 17, color: INK3, lineHeight: 1.7, maxWidth: 460, marginBottom: 32 }}>
              Tallify connects to your Indian bank, automatically tracks every transaction,
              and turns raw numbers into insights you can actually act on, every single day.
            </p>

            {/* Email form */}
            <div id="waitlist" style={{ marginBottom: 16 }}>
              {submitted ? (
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "16px 20px", borderRadius: 16,
                  background: PRIMARY_LIGHT, color: PRIMARY, fontSize: 14, fontWeight: 500,
                }}>
                  <span style={{ fontSize: 20 }}>🎉</span>
                  You&apos;re on the list! We&apos;ll reach out soon.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!email.trim()) { setError(true); return; }
                    setError(false);
                    setSubmitted(true);
                  }}
                  style={{ maxWidth: 460 }}
                >
                  <div className="hero-form-row" style={{ display: "flex", gap: 12, marginBottom: error ? 8 : 0 }}>
                    {/* Input wrapper for icon positioning */}
                    <div style={{ flex: 1, position: "relative" }}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (error) setError(false); }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        placeholder="Enter your email address"
                        style={{
                          width: "100%", padding: "13px 44px 13px 20px", borderRadius: 999, fontSize: 14,
                          border: `1.5px solid ${error ? PRIMARY : focused ? PRIMARY : BORDER}`,
                          outline: "none", background: "white", color: INK,
                          transition: "border-color 0.18s",
                          boxSizing: "border-box",
                        }}
                      />
                      {/* Warning icon inside input */}
                      {error && (
                        <div style={{
                          position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                          width: 22, height: 22, borderRadius: "50%",
                          border: `2px solid ${PRIMARY}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: PRIMARY, fontSize: 13, fontWeight: 800, lineHeight: 1,
                          pointerEvents: "none",
                        }}>
                          !
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      style={{
                        padding: "13px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600,
                        background: PRIMARY, color: "white", border: "none", cursor: "pointer",
                        whiteSpace: "nowrap", transition: "opacity 0.18s", flexShrink: 0,
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.88")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                    >
                      Join Waitlist
                    </button>
                  </div>
                  {/* Error message */}
                  {error && (
                    <p style={{ fontSize: 13, color: PRIMARY, fontWeight: 500, paddingLeft: 4 }}>
                      Please enter your email address
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Social proof */}
            <p style={{ fontSize: 13, color: INK3, display: "flex", alignItems: "center", gap: 6, marginBottom: 48 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              8+ people already waiting
            </p>

            {/* Stats */}
            <div className="hero-stats" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[
                { value: "₹0", label: "To get started" },
                { value: "3 min", label: "Setup time" },
                { value: "AI-powered", label: "Smart categorisation" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontWeight: 800, fontSize: 26, color: INK }}>{s.value}</p>
                  <p style={{ fontSize: 13, color: INK3 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: phone mockup */}
          <div className="hero-phone-col" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: 600, position: "relative" }}>
            <PhoneMockup />
          </div>
        </div>

        {/* Works With strip */}
        <div style={{
          display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
          paddingTop: 20, paddingBottom: 20,
          borderTop: `1px solid ${BORDER}`,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: INK3, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Works with
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {banks.map((b) => (
              <span key={b} style={{ fontSize: 14, fontWeight: 600, color: b === "& more" ? INK3 : INK2 }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div style={{ position: "relative" }}>
      {/* Phone frame */}
      <div style={{
        position: "relative", width: 260, borderRadius: 44,
        background: "#111", padding: 10,
        boxShadow: "0 40px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06)",
      }}>
        {/* Dynamic island */}
        <div style={{
          position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
          width: 100, height: 24, background: "#000", borderRadius: 999, zIndex: 10,
        }} />

        {/* Screen */}
        <div style={{ borderRadius: 36, overflow: "hidden", background: "#f7f7f8", minHeight: 530 }}>
          {/* Status bar */}
          <div style={{ background: "white", padding: "36px 18px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: INK }}>9:41</span>
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <div style={{ width: 14, height: 7, borderRadius: 2, background: "#111", border: "1.5px solid #111" }}>
                <div style={{ width: 10, height: 3, background: "#22c55e", borderRadius: 1, margin: "1px" }} />
              </div>
            </div>
          </div>

          {/* App header */}
          <div style={{ background: "white", padding: "0 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 11 }}>PS</div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: INK }}>Priya Sharma</p>
                <p style={{ fontSize: 10, color: INK3 }}>Welcome back!</p>
              </div>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: BG2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔔</div>
          </div>

          {/* Balance card */}
          <div style={{ margin: "0 12px 10px", borderRadius: 18, background: PRIMARY, padding: "16px 18px" }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 10, marginBottom: 4 }}>This Month</p>
            <p style={{ color: "white", fontWeight: 800, fontSize: 24, marginBottom: 4 }}>₹48,696.00</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, marginBottom: 10 }}>Updated: Just now</p>
            <div style={{ display: "flex", gap: 6 }}>
              {["Today", "Week", "Month", "Year"].map((t, i) => (
                <span key={t} style={{
                  fontSize: 10, padding: "3px 8px", borderRadius: 999,
                  background: i === 2 ? "rgba(255,255,255,0.25)" : "transparent",
                  color: "rgba(255,255,255,0.8)",
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Spending overview */}
          <div style={{ padding: "0 12px 10px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: INK, marginBottom: 8 }}>Spending Overview</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              <div style={{ borderRadius: 12, padding: "10px 12px", background: BG2 }}>
                <p style={{ fontSize: 10, color: INK3 }}>Credit</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#22c55e" }}>₹2,41,389</p>
              </div>
              <div style={{ borderRadius: 12, padding: "10px 12px", background: BG2 }}>
                <p style={{ fontSize: 10, color: INK3 }}>Debit</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: PRIMARY }}>₹2,00,440</p>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: INK }}>Recent</p>
              <span style={{ fontSize: 10, color: PRIMARY }}>View All +</span>
            </div>
            {[
              { name: "IMPS/HDFC/SHARMA...", amount: "₹52,74,363", color: "#22c55e" },
              { name: "UPI/SBI/GROCERIES", amount: "-₹12,000", color: PRIMARY },
            ].map((tx) => (
              <div key={tx.name} style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", background: BG2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🏦</div>
                <p style={{ fontSize: 10, flex: 1, color: INK2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{tx.name}</p>
                <p style={{ fontSize: 10, fontWeight: 700, color: tx.color }}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating: net balance */}
      <div className="phone-float" style={{
        position: "absolute", left: -90, top: 80,
        borderRadius: 16, padding: "12px 16px", background: "white",
        border: `1px solid ${BORDER}`, boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
      }}>
        <p style={{ fontSize: 11, color: INK3, marginBottom: 2 }}>Net balance</p>
        <p style={{ fontSize: 16, fontWeight: 800, color: "#22c55e" }}>+₹1,27,760</p>
      </div>

      {/* Floating: AI sorted */}
      <div className="phone-float" style={{
        position: "absolute", right: -90, top: 120,
        borderRadius: 16, padding: "12px 16px", background: "white",
        border: `1px solid ${BORDER}`, boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
          <div style={{ width: 24, height: 24, borderRadius: 8, background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>✨</div>
          <p style={{ fontSize: 13, fontWeight: 700, color: INK }}>AI Sorted</p>
        </div>
        <p style={{ fontSize: 11, color: INK3 }}>Food &amp; Dining</p>
      </div>

      {/* Floating: auto-synced */}
      <div className="phone-float" style={{
        position: "absolute", left: -80, bottom: 80,
        borderRadius: 16, padding: "12px 16px", background: "white",
        border: `1px solid ${BORDER}`, boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: PRIMARY_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🔄</div>
          <p style={{ fontSize: 13, fontWeight: 700, color: INK }}>Auto-synced</p>
        </div>
        <p style={{ fontSize: 11, color: INK3 }}>Just now</p>
      </div>
    </div>
  );
}
