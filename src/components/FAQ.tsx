"use client";

import { useState } from "react";

const PRIMARY      = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK          = "#0b0b1a";
const INK2         = "#4a4a5a";
const INK3         = "#9191a0";
const BORDER       = "#e2e4ea";
const BG           = "#f0f2f7";

const faqs = [
  {
    q: "Is Tallify free to use?",
    a: "The Free plan is permanently available at no cost, including unlimited manual transactions and basic spending charts. Paid tiers unlock bank auto-sync and AI-powered features.",
  },
  {
    q: "How does the AI categorisation work?",
    a: "Tallify reads merchant names and transaction descriptions, assigning appropriate categories while recognising Indian merchants and UPI references. It continuously improves through learning.",
  },
  {
    q: "How does bank sync work?",
    a: "We use India's RBI-regulated Account Aggregator framework with read-only access. Your transactions are visible but funds can never be transferred or accounts modified.",
  },
  {
    q: "Which banks are supported?",
    a: "Major Indian banks including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak, Yes Bank, Paytm Payments Bank, and more — all connected via the Account Aggregator framework.",
  },
  {
    q: "Is my financial data safe?",
    a: "All data is encrypted with AES-256 in transit and at rest. We never store your banking credentials, and you can delete your account and all associated data at any time.",
  },
  {
    q: "What is an allocation rule?",
    a: "You set automatic percentages or fixed amounts from your income — for example \"10% to SIP\" or \"₹20,000 to savings\" — and Tallify tracks progress automatically when money arrives.",
  },
  {
    q: "Can I use Tallify for a business account?",
    a: "Yes — business accounts are supported with AI-powered transaction categorisation and multi-account dashboards. Team plans are coming soon.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Cancellation is unrestricted with no penalties. After cancelling, your Free plan features remain fully accessible with no data loss.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "96px 0", background: BG }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80, alignItems: "flex-start" }}>

          {/* ── Left column ── */}
          <div className="faq-sticky" style={{ position: "sticky", top: 96 }}>
            {/* Badge */}
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              borderRadius: 999, padding: "5px 13px",
              border: `1px solid ${PRIMARY}`,
              background: PRIMARY_LIGHT,
              color: PRIMARY,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              marginBottom: 20,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: PRIMARY }} />
              FAQ
            </span>

            <h2 className="faq-h2" style={{
              fontSize: 42, fontWeight: 800, lineHeight: 1.15,
              letterSpacing: "-0.03em", color: INK, marginBottom: 16,
            }}>
              Frequently asked<br />questions
            </h2>

            <p style={{ fontSize: 15, color: INK3, lineHeight: 1.7 }}>
              Still have questions?{" "}
              <a href="#contact" style={{ color: PRIMARY, fontWeight: 600, textDecoration: "none" }}>
                Send us a message
              </a>{" "}
              — we reply within 24 hours.
            </p>
          </div>

          {/* ── Right column: accordion ── */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 16,
                      padding: "20px 0", background: "none", border: "none",
                      cursor: "pointer", textAlign: "left" as const,
                    }}
                  >
                    <span style={{
                      fontSize: 15, fontWeight: 700,
                      color: isOpen ? PRIMARY : INK,
                      transition: "color 0.18s",
                      lineHeight: 1.4,
                    }}>
                      {faq.q}
                    </span>

                    {/* Toggle: single + SVG that rotates 45° → × */}
                    <div style={{
                      flexShrink: 0,
                      width: 28, height: 28, borderRadius: "50%",
                      background: isOpen ? PRIMARY : "transparent",
                      border: `1.5px solid ${isOpen ? PRIMARY : "#c8cad2"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.25s, border-color 0.25s",
                    }}>
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="none"
                        style={{
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        }}
                      >
                        <path d="M5 1v8M1 5h8" stroke={isOpen ? "white" : "#9191a0"} strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div style={{ paddingBottom: 20 }}>
                      <p style={{ fontSize: 14, color: INK2, lineHeight: 1.75 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
