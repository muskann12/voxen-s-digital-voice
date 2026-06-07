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
};

function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      padding: "20px 6vw", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(8,5,15,0.7)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(168,85,247,0.10)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}><Logo /></Link>
      <Link to="/" style={{
        color: "rgba(233,213,255,0.85)", textDecoration: "none", fontSize: 13,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "#C084FC" }}>←</span> Back to Home
      </Link>
    </header>
  );
}

export function ServicePage({ title, oneLiner, filters, cards, featuredFirst }: Props) {
  const [active, setActive] = useState<string>(filters?.[0] ?? "All");

  const filtered = useMemo(() => {
    if (!filters || active === "All" || active === filters[0]) return cards;
    return cards.filter(c => c.category === active);
  }, [cards, filters, active]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#08050F", color: "#E9D5FF" }}>
      <Cursor />
      <Header />

      {/* Hero */}
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
      </section>

      {/* Filters */}
      {filters && filters.length > 0 && (
        <section style={{ padding: "0 6vw", maxWidth: 1500, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "10px 18px", borderRadius: 999, cursor: "pointer",
                  fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase",
                  border: "1px solid " + (active === f ? "rgba(168,85,247,0.55)" : "rgba(168,85,247,0.18)"),
                  background: active === f ? "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(192,132,252,0.12))" : "transparent",
                  color: active === f ? "#fff" : "rgba(233,213,255,0.7)",
                  transition: "all 0.25s ease",
                }}
              >{f}</button>
            ))}
          </div>
        </section>
      )}

      {/* Grid */}
      <section style={{ padding: "40px 6vw 140px", maxWidth: 1500, margin: "0 auto" }}>
        <div className="svc-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22,
        }}>
          {filtered.map((c, i) => {
            const cardStyle: React.CSSProperties = {
              gridColumn: featuredFirst && i === 0 ? "span 2" : undefined,
              border: "1px solid rgba(168,85,247,0.18)",
              borderRadius: 14,
              background: "linear-gradient(135deg, rgba(22,14,40,0.85), rgba(14,8,24,0.85))",
              overflow: "hidden",
              display: "flex", flexDirection: "column",
              transition: "all 0.35s ease",
              textDecoration: "none", color: "inherit",
            };
            const inner = (
              <>
                <div style={{
                  position: "relative",
                  aspectRatio: featuredFirst && i === 0 ? "21 / 9" : "16 / 9",
                  background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.18), transparent 60%), #0E0818",
                  borderBottom: "1px solid rgba(168,85,247,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {c.thumbnail}
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
                    fontSize: 22, margin: 0, lineHeight: 1.2, color: "#fff", fontWeight: 400,
                  }}>{c.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "rgba(233,213,255,0.62)", margin: 0 }}>
                    {c.description}
                  </p>
                  {c.footer && (
                    <div style={{
                      marginTop: "auto", paddingTop: 14,
                      borderTop: "1px solid rgba(168,85,247,0.12)",
                      fontSize: 12, color: "rgba(233,213,255,0.7)",
                    }}>{c.footer}</div>
                  )}
                  {c.to && (
                    <div style={{
                      marginTop: c.footer ? 10 : "auto", paddingTop: c.footer ? 0 : 14,
                      fontSize: 12, color: "#C084FC", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 500,
                    }}>View Case Study →</div>
                  )}
                </div>
              </>
            );
            return c.to ? (
              <Link key={c.id} to={c.to as string} className="interactive" style={cardStyle}>{inner}</Link>
            ) : (
              <article key={c.id} className="interactive" style={cardStyle}>{inner}</article>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
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
        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-grid > article { grid-column: auto !important; }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
