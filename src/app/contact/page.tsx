"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";
const INK3 = "#9191a0";
const BORDER = "#e8e8ec";

const subjectOptions = [
  "General Inquiry",
  "Bug Report",
  "Feature Request",
  "Partnership",
  "Press",
];

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@tallify.in" },
  { icon: "💬", label: "Response time", value: "Within 24 hours" },
  { icon: "📍", label: "Based in", value: "India 🇮🇳" },
];

const socialLinks = [
  { label: "𝕏", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjectOptions[0],
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function validate() {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    border: `1px solid ${errors[field as keyof typeof errors] ? "#e53935" : focusedField === field ? PRIMARY : BORDER}`,
    borderRadius: 12,
    fontSize: 14,
    fontFamily: "var(--font-dm-sans)",
    color: INK,
    background: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.18s",
  });

  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section style={{
        background: "linear-gradient(160deg, #fff8f7 0%, #ffffff 50%, #fff5f3 100%)",
        padding: "120px 0 60px",
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
            <span style={{ fontSize: 13, fontWeight: 600, color: PRIMARY }}>Get in Touch</span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "clamp(36px, 6vw, 60px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: INK,
            margin: "0 0 20px",
          }}>
            We&apos;d love to{" "}
            <span style={{ color: PRIMARY }}>hear from you</span>
          </h1>

          <p style={{
            maxWidth: 520,
            margin: "0 auto",
            fontSize: 17,
            color: INK2,
            lineHeight: 1.7,
            fontFamily: "var(--font-dm-sans)",
          }}>
            Have a question, feedback, or just want to say hello? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── FORM + INFO ─── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: 48,
            alignItems: "start",
          }}>

            {/* ── Left: Form ── */}
            <div>
              {submitted ? (
                <div style={{
                  background: "#f0fdf4",
                  border: "1px solid #86efac",
                  borderRadius: 20,
                  padding: 48,
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <h3 style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: INK,
                    margin: "0 0 10px",
                  }}>
                    Thanks! We&apos;ll reply within 24 hours.
                  </h3>
                  <p style={{ fontSize: 15, color: INK2, margin: 0, fontFamily: "var(--font-dm-sans)" }}>
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: subjectOptions[0], message: "" }); }}
                    style={{
                      marginTop: 24,
                      padding: "10px 24px",
                      borderRadius: 999,
                      border: `1px solid ${BORDER}`,
                      background: "#ffffff",
                      fontSize: 14,
                      fontWeight: 600,
                      color: INK2,
                      cursor: "pointer",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("name")}
                    />
                    {errors.name && (
                      <p style={{ fontSize: 12, color: "#e53935", margin: "4px 0 0", fontFamily: "var(--font-dm-sans)" }}>{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("email")}
                    />
                    {errors.email && (
                      <p style={{ fontSize: 12, color: "#e53935", margin: "4px 0 0", fontFamily: "var(--font-dm-sans)" }}>{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle("subject"),
                        appearance: "none",
                        WebkitAppearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239191a0' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: 40,
                        cursor: "pointer",
                      }}
                    >
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle("message"),
                        resize: "vertical",
                        minHeight: 120,
                      }}
                    />
                    {errors.message && (
                      <p style={{ fontSize: 12, color: "#e53935", margin: "4px 0 0", fontFamily: "var(--font-dm-sans)" }}>{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "14px 24px",
                      borderRadius: 999,
                      border: "none",
                      background: PRIMARY,
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: "var(--font-dm-sans)",
                      cursor: "pointer",
                      transition: "opacity 0.18s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* ── Right: Info panel ── */}
            <div style={{
              background: "#f7f7f8",
              borderRadius: 20,
              padding: 32,
              border: `1px solid ${BORDER}`,
            }}>
              <h3 style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: 18,
                fontWeight: 700,
                color: INK,
                margin: "0 0 24px",
              }}>
                Other ways to reach us
              </h3>

              {/* Info items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28 }}>
                {contactInfo.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: PRIMARY,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: INK3, margin: "0 0 2px", fontFamily: "var(--font-dm-sans)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 14, color: INK, margin: 0, fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: BORDER, margin: "0 0 24px" }} />

              {/* Social links */}
              <p style={{ fontSize: 13, fontWeight: 600, color: INK3, margin: "0 0 12px", fontFamily: "var(--font-dm-sans)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Follow us
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 18px",
                      borderRadius: 999,
                      border: `1px solid ${BORDER}`,
                      background: "#ffffff",
                      fontSize: 13,
                      fontWeight: 600,
                      color: INK2,
                      textDecoration: "none",
                      fontFamily: "var(--font-dm-sans)",
                      transition: "border-color 0.18s, color 0.18s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = PRIMARY;
                      (e.currentTarget as HTMLElement).style.color = PRIMARY;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = BORDER;
                      (e.currentTarget as HTMLElement).style.color = INK2;
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
