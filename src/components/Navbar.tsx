"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const PRIMARY = "#f0724f";
const PRIMARY_LIGHT = "#fdf1ef";
const INK = "#0b0b1a";
const INK2 = "#4a4a5a";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing",  href: "/#pricing" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.90)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 1px 0 #e8e8ec" : "none",
        transition: "all 0.25s",
      }}>
        <div style={{
          maxWidth: 1152, margin: "0 auto", padding: "0 24px",
          height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
            {/* Icon — stylised "T" tab shape */}
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="10" fill={PRIMARY}/>
              {/* coin-stack shape */}
              <ellipse cx="17" cy="13" rx="8" ry="3.2" fill="rgba(255,255,255,0.30)"/>
              <ellipse cx="17" cy="13" rx="8" ry="3.2" stroke="white" strokeWidth="1.6"/>
              <path d="M9 13v5c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2v-5" stroke="white" strokeWidth="1.6" fill="none"/>
              <path d="M9 18v3.5c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2V18" stroke="white" strokeWidth="1.6" fill="none"/>
            </svg>
            <span style={{ fontWeight: 800, fontSize: 20, color: INK, letterSpacing: "-0.03em" }}>Tallify</span>
          </a>

          {/* Desktop nav links */}
          <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                style={{
                  padding: "8px 14px", borderRadius: 8,
                  fontSize: 14, fontWeight: active === link.label ? 600 : 500,
                  color: active === link.label ? PRIMARY : INK2,
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (active !== link.label)
                    (e.currentTarget as HTMLElement).style.color = INK;
                }}
                onMouseLeave={(e) => {
                  if (active !== link.label)
                    (e.currentTarget as HTMLElement).style.color = INK2;
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              className="nav-cta-btn"
              href="#waitlist"
              style={{
                padding: "10px 22px", borderRadius: 999,
                fontSize: 14, fontWeight: 600,
                color: "white", background: PRIMARY,
                textDecoration: "none", transition: "opacity 0.18s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Join Waitlist
            </a>
            <button
              className="nav-mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none", border: "none", cursor: "pointer",
                color: INK2, padding: 6,
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999 }} onClick={() => setMenuOpen(false)}>
          <div style={{ position: "absolute", inset: 0, background: "rgba(11,11,26,0.4)", backdropFilter: "blur(4px)" }} />
          <div
            style={{
              position: "absolute", top: 0, right: 0, height: "100%", width: 280,
              background: "white", padding: 24, display: "flex", flexDirection: "column", gap: 6,
              boxShadow: "-8px 0 48px rgba(11,11,26,0.18)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#9191a0" }}>
                <X size={20} />
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => { setActive(link.label); setMenuOpen(false); }}
                style={{
                  padding: "12px 16px", borderRadius: 10, fontSize: 14,
                  fontWeight: active === link.label ? 600 : 500,
                  color: active === link.label ? PRIMARY : INK,
                  background: active === link.label ? PRIMARY_LIGHT : "transparent",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 16, textAlign: "center", padding: "12px 20px",
                borderRadius: 999, fontSize: 14, fontWeight: 600,
                color: "white", background: PRIMARY, textDecoration: "none",
              }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </>
  );
}
