import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { Cursor } from "@/components/Cursor";

export type PortfolioCard = {
  id: string;
  title: string;
  description: string;
  tag?: string;
  tagColor?: string;
  category?: string;
  thumbnail?: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
  to?: string;
};

type Props = {
  title: string;
  oneLiner: string;
  filters?: string[];
  cards: PortfolioCard[];
  featuredFirst?: boolean;
  showCategoryPopup?: boolean;
};

function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      padding: "20px 6vw", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(8,5,15,0.7)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(168,85,247,0.10)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}><span className="nav-logo-wrap"><Logo /></span></Link>
      <Link to="/" style={{
        color: "rgba(233,213,255,0.85)", textDecoration: "none", fontSize: 13,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "#C084FC" }}>←</span> Back to Home
      </Link>
      <style>{`.nav-logo-wrap svg, .nav-logo-wrap img { width: 130px; }`}</style>
    </header>
  );
}

export function ServicePage({ 
  title, 
  oneLiner, 
  filters, 
  cards, 
  featuredFirst,
  showCategoryPopup = false
}: Props) {
  const [active, setActive] = useState<string>(filters?.[0] ?? "All");
  const [popupOpen, setPopupOpen] = useState<boolean>(showCategoryPopup);

  const filtered = useMemo(() => {
    if (!filters || active === "All" || active === filters[0]) return cards;
    return cards.filter(c => c.category === active);
  }, [cards, filters, active]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const handleSelectCategory = (cat: string) => {
    setActive(cat);
    setPopupOpen(false);
  };

  const closePopup = () => setPopupOpen(false);

  return (
    <div style={{ minHeight: "100vh", background: "#000000", color: "#E9D5FF" }}>
      <Cursor />
      <Header />

      {popupOpen && filters && filters.length > 0 && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
        }}>
          <div style={{
            background: "#1a1f2e", border: "1px solid rgba(217,70,239,0.3)",
            borderRadius: 24, padding: 40, maxWidth: 600, width: "100%",
            textAlign: "center", boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
              fontSize: 32, color: "#fff", marginBottom: 8,
            }}>Choose a Category</h2>
            <p style={{ color: "rgba(233,213,255,0.7)", fontSize: 14, marginBottom: 30 }}>
              Select a category to filter the projects below.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {filters.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
                  style={{
                    padding: "10px 24px", borderRadius: 60,
                    border: active === cat ? "2px solid #d946ef" : "1px solid rgba(255,255,255,0.2)",
                    background: active === cat ? "rgba(217,70,239,0.2)" : "transparent",
                    color: active === cat ? "#fff" : "rgba(233,213,255,0.8)",
                    fontSize: 14, cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(217,70,239,0.15)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    if (active !== cat) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(233,213,255,0.8)";
                    }
                  }}
                >{cat}</button>
              ))}
            </div>
            <button
              onClick={closePopup}
              style={{
                marginTop: 24, background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(233,213,255,0.6)", padding: "8px 20px", borderRadius: 60,
                cursor: "pointer", fontSize: 13, transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "rgba(233,213,255,0.6)";
              }}
            >Skip — see all projects</button>
          </div>
        </div>
      )}

      {filters && filters.length > 0 && !popupOpen && (
        <button
          onClick={() => setPopupOpen(true)}
          style={{
            position: "fixed", bottom: 30, right: 30, zIndex: 99,
            background: "linear-gradient(135deg, #d946ef, #a855f7)",
            border: "none", color: "#fff", padding: "12px 24px", borderRadius: 60,
            fontWeight: 600, fontSize: 14, boxShadow: "0 8px 20px rgba(217,70,239,0.5)",
            cursor: "pointer", transition: "transform 0.2s",
            fontFamily: "'Inter', sans-serif",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >🔄 Change Category</button>
      )}

      <section style={{ padding: "80px 6vw 40px", maxWidth: 1500, margin: "0 auto" }}>
        <nav style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.5)" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 10px", color: "#C084FC" }}>/</span>
          <span style={{ color: "#C084FC" }}>Services</span>
          <span style={{ margin: "0 10px", color: "#C084FC" }}>/</span>
          <span style={{ color: "#fff" }}>{title}</span>
        </nav>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 1.05, fontWeight: 400,
          margin: "28px 0 22px", letterSpacing: "-0.02em",
        }}>
          {title.split(" ").slice(0, -1).join(" ")} <span className="grad-text">{title.split(" ").slice(-1)}</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(233,213,255,0.7)", maxWidth: 680, fontWeight: 300 }}>
          {oneLiner}
        </p>
        {filters && filters.length > 0 && active !== "All" && (
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 12, color: "rgba(233,213,255,0.5)" }}>Showing:</span>
            <span style={{
              padding: "4px 14px", borderRadius: 999, background: "rgba(217,70,239,0.15)",
              color: "#d946ef", fontSize: 12, fontWeight: 500,
              border: "1px solid rgba(217,70,239,0.25)",
            }}>{active}</span>
          </div>
        )}
      </section>

      {filters && filters.length > 0 && (
        <section style={{ padding: "0 6vw", maxWidth: 1500, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
            {filters.map(f => (
              <button
                key={f}
                className="svc-filter filter-btn"
                data-active={active === f ? "true" : "false"}
                onClick={() => setActive(f)}
                style={{
                  padding: "10px 18px", borderRadius: 999, cursor: "pointer",
                  fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                  border: `1px solid ${active === f ? "#d946ef" : "rgba(255,255,255,0.2)"}`,
                  background: active === f ? "rgba(255,255,255,0.1)" : "transparent",
                  color: active === f ? "#f0f0f0" : "rgba(233,213,255,0.7)",
                  transition: "all 0.25s ease",
                }}
              >{f}</button>
            ))}
          </div>
        </section>
      )}

      <section style={{ padding: "40px 6vw 140px", maxWidth: 1500, margin: "0 auto" }}>
        <div className="svc-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 22,
          background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.02), transparent 55%)",
        }}>
          {filtered.map((c, i) => {
            const cardStyle: React.CSSProperties = {
              gridColumn: featuredFirst && i === 0 ? "span 2" : undefined,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14,
              background: "linear-gradient(135deg, rgba(22,14,40,0.85), rgba(14,8,24,0.85))",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
              textDecoration: "none",
              color: "inherit",
            };
            const inner = (
              <>
                <div style={{
                  position: "relative",
                  aspectRatio: featuredFirst && i === 0 ? "21 / 9" : "4 / 3",
                  background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), transparent 60%), #0a0a0a",
                  borderBottom: "1px solid rgba(168,85,247,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {c.thumbnail}
                  </div>
                  {c.meta && (
                    <div style={{
                      position: "absolute", right: 12, bottom: 12,
                      padding: "4px 10px", borderRadius: 6,
                      background: "rgba(8,5,15,0.75)", border: "1px solid rgba(168,85,247,0.2)",
                      fontSize: 11, color: "#E9D5FF", letterSpacing: 0.5,
                    }}>{c.meta}</div>
                  )}
                </div>
                <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {c.tag && (
                    <span style={{
                      alignSelf: "flex-start", fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                      padding: "4px 10px", borderRadius: 999,
                      background: (c.tagColor ?? "#7C3AED") + "22",
                      color: c.tagColor ?? "#C084FC",
                      border: "1px solid " + (c.tagColor ?? "#7C3AED") + "55",
                    }}>{c.tag}</span>
                  )}
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                    fontSize: 22, margin: 0, lineHeight: 1.2, color: "#f0f0f0", fontWeight: 400,
                  }}>{c.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(233,213,255,0.62)", margin: 0 }}>
                    {c.description}
                  </p>
                  {c.footer && (
                    <div className="svc-footer" style={{
                      marginTop: "auto", paddingTop: 14,
                      borderTop: "1px solid rgba(168,85,247,0.12)",
                      fontSize: 12, color: "rgba(233,213,255,0.7)",
                    }}>{c.footer}</div>
                  )}
                  {c.to && (
                    <div className="svc-footer" style={{
                      marginTop: c.footer ? 10 : "auto", paddingTop: c.footer ? 0 : 14,
                      fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 500,
                    }}>
                      <span className="svc-view-link">
                        View Case Study <span className="svc-view-link__arrow">→</span>
                      </span>
                    </div>
                  )}
                </div>
              </>
            );
            return c.to ? (
              <Link key={c.id} to={c.to as any} className="svc-card interactive" style={cardStyle}>{inner}</Link>
            ) : (
              <article key={c.id} className="svc-card interactive" style={cardStyle}>{inner}</article>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "60px 6vw 100px", maxWidth: 1500, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#C084FC", textTransform: "uppercase" }}>Ready to start</div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(28px, 4vw, 44px)", margin: "16px 0 26px", fontWeight: 400,
        }}>
          Let's give your business <span className="grad-text">a voice.</span>
        </h2>
        <Link to="/" className="btn-violet" style={{ textDecoration: "none", display: "inline-block" }}>
          Start a Project →
        </Link>
      </section>

      <style>{`
        .svc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 15px rgba(255,255,255,0.05), 0 10px 25px -5px rgba(100,150,255,0.15);
          border-color: rgba(255,255,255,0.12) !important;
        }
        .svc-filter[data-active="false"]:hover {
          border-color: rgba(255,255,255,0.5) !important;
        }
        .svc-view-link {
          color: rgba(233,213,255,0.82);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.25s ease;
        }
        .svc-view-link__arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .svc-card:hover .svc-view-link,
        .svc-footer:hover .svc-view-link {
          color: #e879f9;
        }
        .svc-card:hover .svc-view-link__arrow,
        .svc-footer:hover .svc-view-link__arrow {
          transform: translateX(4px);
        }
        .svc-card .svc-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-grid > * { grid-column: auto !important; }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}