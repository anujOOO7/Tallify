"use client";

const PRIMARY   = "#f0724f";
const DARK_BG   = "#0d0c18";
const DARK_CARD = "rgba(255,255,255,0.05)";
const DARK_BORDER = "rgba(255,255,255,0.08)";
const TEXT_MAIN = "rgba(255,255,255,0.9)";
const TEXT_MUTED = "rgba(255,255,255,0.45)";
const TEXT_LINK  = "rgba(255,255,255,0.6)";

const links = {
  Product: ["Features", "Pricing", "Security", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "DPDP Compliance"],
};

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: "64px 0 32px", background: DARK_BG, borderTop: `1px solid ${DARK_BORDER}` }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 16 }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <rect width="34" height="34" rx="10" fill={PRIMARY}/>
                <ellipse cx="17" cy="13" rx="8" ry="3.2" fill="rgba(255,255,255,0.30)"/>
                <ellipse cx="17" cy="13" rx="8" ry="3.2" stroke="white" strokeWidth="1.6"/>
                <path d="M9 13v5c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2v-5" stroke="white" strokeWidth="1.6" fill="none"/>
                <path d="M9 18v3.5c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2V18" stroke="white" strokeWidth="1.6" fill="none"/>
              </svg>
              <span style={{ fontWeight: 800, fontSize: 20, color: TEXT_MAIN, letterSpacing: "-0.025em" }}>Tallify</span>
            </div>
            <p style={{ fontSize: 13, color: TEXT_LINK, lineHeight: 1.7, maxWidth: 240, marginBottom: 20 }}>
              Smart personal finance for Indians. Connect your banks, track every rupee,
              and build better financial habits.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["𝕏", "in", "ig"].map((icon) => (
                <a key={icon} href="#" style={{
                  width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  background: DARK_CARD, color: TEXT_LINK, border: `1px solid ${DARK_BORDER}`,
                  textDecoration: "none", fontSize: 13, fontWeight: 700, transition: "opacity 0.18s",
                }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 style={{ fontWeight: 700, fontSize: 13, color: TEXT_MAIN, marginBottom: 16 }}>{section}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <a key={item} href="#" style={{ fontSize: 13, color: TEXT_LINK, textDecoration: "none", transition: "color 0.18s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = PRIMARY)}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = TEXT_LINK)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          paddingTop: 24, borderTop: `1px solid ${DARK_BORDER}`,
          fontSize: 13, color: TEXT_MUTED,
        }}>
          <p>© {new Date().getFullYear()} Tallify Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Made with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
