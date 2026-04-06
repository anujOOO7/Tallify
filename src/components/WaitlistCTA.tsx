"use client";

import { useState } from "react";

const PRIMARY = "#f0724f";

const avatars = [
  { initials: "PS", bg: "#6c63ff" },
  { initials: "AN", bg: "#f0724f" },
  { initials: "TA", bg: "#22c55e" },
];

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{
      background: "linear-gradient(135deg, #12111f 0%, #1a1830 50%, #12111f 100%)",
      padding: "96px 24px",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              borderRadius: 999, padding: "6px 14px", marginBottom: 28,
              background: "rgba(232,96,74,0.15)", border: "1px solid rgba(232,96,74,0.4)",
              color: PRIMARY, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: PRIMARY }} />
              Be first in line
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 52, fontWeight: 800, color: "white",
              letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20,
            }}>
              Join the waitlist today
            </h2>

            {/* Subtext */}
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 40, maxWidth: 420 }}>
              We&apos;re building the financial tool India deserves. Join early and be the
              first to know when Tallify launches.
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 32 }} />

            {/* Stats */}
            <div style={{ display: "flex", gap: 48 }}>
              {[
                { value: "Free", label: "To join" },
                { value: "AI-first", label: "Smart features" },
                { value: "No spam", label: "Ever" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontWeight: 800, fontSize: 20, color: "white", marginBottom: 2 }}>{s.value}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: card */}
          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: 36,
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 6 }}>
              Reserve your spot
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 28 }}>
              Get early access + exclusive perks when we launch.
            </p>

            {submitted ? (
              <div style={{
                padding: "20px 24px", borderRadius: 12,
                background: "rgba(232,96,74,0.15)", border: "1px solid rgba(232,96,74,0.3)",
                color: PRIMARY, fontSize: 15, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 22 }}>🎉</span>
                You&apos;re on the list! We&apos;ll be in touch soon.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: "100%", padding: "14px 18px", borderRadius: 10, fontSize: 14,
                    background: "rgba(255,255,255,0.06)",
                    border: `1.5px solid ${focused ? "rgba(232,96,74,0.6)" : "rgba(255,255,255,0.1)"}`,
                    outline: "none", color: "white", marginBottom: 14,
                    transition: "border-color 0.18s",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: "100%", padding: "15px 24px", borderRadius: 999,
                    fontSize: 15, fontWeight: 700, color: "white",
                    background: PRIMARY, border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    transition: "opacity 0.18s",
                    boxShadow: "0 8px 32px rgba(232,96,74,0.35)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <span>⚡</span> Join the Waitlist
                </button>
              </form>
            )}

            {/* Avatar stack + social proof */}
            {!submitted && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 18 }}>
                <div style={{ display: "flex" }}>
                  {avatars.map((a, i) => (
                    <div key={i} style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: a.bg, border: "2px solid #1a1830",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 9, fontWeight: 700, color: "white",
                      marginLeft: i === 0 ? 0 : -8, zIndex: avatars.length - i,
                      position: "relative",
                    }}>
                      {a.initials}
                    </div>
                  ))}
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)", border: "2px solid #1a1830",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)",
                    marginLeft: -8, position: "relative",
                  }}>
                    +
                  </div>
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
                  8+ people already waiting
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
