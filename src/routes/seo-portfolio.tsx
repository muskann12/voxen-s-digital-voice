import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Logo } from "@/components/Logo";
import { Cursor } from "@/components/Cursor";

export const Route = createFileRoute("/seo-portfolio")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Case Studies — Real Results for Real Clients | Voxen" },
      { name: "description", content: "Real SEO case studies: Golden Roofing, Ovenu, Steel Buildings, EcoClean Dubai, NutriScan. Top rankings, organic growth, qualified leads." },
      { property: "og:title", content: "SEO Case Studies — Voxen" },
      { property: "og:description", content: "Top rankings, organic growth, and qualified leads across the UK, Dubai, and global markets." },
    ],
  }),
});

// ✅ Changed: raw.githubusercontent.com, not github.com/blob
const BASE = "https://raw.githubusercontent.com/muskann12/portfloio-images/main/";
const img = (filename: string) => BASE + filename;

type CaseStudy = {
  id: string;
  name: string;
  industry: string;
  metrics: string[];
  result: string;
  screenshots: { src: string; alt: string }[];
};

const CASES: CaseStudy[] = [
  {
    id: "golden-roofing",
    name: "Golden Roofing",
    industry: "Roofing · United Kingdom",
    metrics: ["177 keywords", "~2.5K monthly traffic", "Top 3 — 'roofers in london'"],
    result: "Secured top 3 rankings for high-value local keywords, growing organic traffic by over 10% and generating qualified leads for roofing services across London.",
    screenshots: [
      { src: img("golden-keywords.png"), alt: "Golden Roofing — keyword list" },
      { src: img("golden-home.png"), alt: "Golden Roofing — homepage" },
      { src: img("golden-keywords-2.png"), alt: "Golden Roofing — keyword view" },
    ],
  },
  {
    id: "ovenu",
    name: "Ovenu (UK)",
    industry: "Oven Cleaning · United Kingdom",
    metrics: ["4K+ keywords", "12.4K monthly traffic", "5/5 from 51,279 reviews"],
    result: "Optimised local landing pages for 11 UK regions, achieving #1 rankings for 'oven cleaning service' and driving franchise inquiries nationwide.",
    screenshots: [
      { src: img("ovenu-overview.png"), alt: "Ovenu — overview with 4K keywords" },
      { src: img("ovenu-home.png"), alt: "Ovenu — homepage" },
      { src: img("ovenu-keywords.png"), alt: "Ovenu — keyword research" },
    ],
  },
  {
    id: "steel-buildings",
    name: "Steel Buildings (UK)",
    industry: "Industrial · United Kingdom",
    metrics: ["3,956+ keywords", "13.4K monthly traffic", "#1 — 'steel building'"],
    result: "Ranked #1 for multiple commercial steel building keywords, increasing organic traffic by 6% and generating high-value B2B leads across the UK.",
    screenshots: [
      { src: img("steel-keywords.png"), alt: "Steel Buildings — keyword list" },
      { src: img("steel-overview.png"), alt: "Steel Buildings — overview" },
      { src: img("steel-home.png"), alt: "Steel Buildings — homepage" },
    ],
  },
  {
    id: "ecoclean-dubai",
    name: "EcoClean Garage Cleaning",
    industry: "Cleaning Services · Dubai",
    metrics: ["602 keywords", "961 monthly traffic", "#1 — 'kitchen deep cleaning dubai'"],
    result: "Captured #1 ranking for 'kitchen deep cleaning dubai', growing non-branded traffic by 28% and dominating hyperlocal cleaning searches in Dubai.",
    screenshots: [
      { src: img("eco-overview.png"), alt: "EcoClean — overview" },
    // Note: original 4.48.15 became nutri-keywords.png
      { src: img("eco-home.png"), alt: "EcoClean — homepage" },
      { src: img("eco-keywords-2.png"), alt: "EcoClean — keyword research" },
    ],
  },
  {
    id: "nutriscan",
    name: "NutriScan App",
    industry: "Nutrition · Global",
    metrics: ["1,144 keywords", "4K monthly traffic", "Ranks for global food terms"],
    result: "Acquired over 1,100 food-related keywords, driving organic traffic to the app's landing pages and positioning NutriScan as a top nutrition resource.",
    screenshots: [
      { src: img("nutri-overview.png"), alt: "NutriScan — overview" },
      { src: img("nutri-keywords.png"), alt: "NutriScan — keyword list" },
      { src: img("nutri-home.png"), alt: "NutriScan — homepage" },
    ],
  },
];

function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      padding: "20px 6vw", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(0,0,0,0.7)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(217,70,239,0.18)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}><span className="nav-logo-wrap">
          <Logo />
        </span></Link>
      <Link to="/" style={{
        color: "rgba(245,208,254,0.9)", textDecoration: "none", fontSize: 13,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "#d946ef" }}>←</span> Back to Home
      </Link><style>{`
        .nav-logo-wrap svg, .nav-logo-wrap img { width: 100px; }
      `}</style>
    </header>
  );
}

function Page() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#000000", color: "#e5e7eb" }}>
      <Cursor />
      <Header />

      <section style={{ padding: "80px 6vw 30px", maxWidth: 1500, margin: "0 auto" }}>
        <nav style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(245,208,254,0.5)" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 10px", color: "#d946ef" }}>/</span>
          <span style={{ color: "#ffffff" }}>SEO Portfolio</span>
        </nav>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.05, fontWeight: 400,
          margin: "28px 0 22px", letterSpacing: "-0.02em", color: "#ffffff",
        }}>
          SEO Case Studies — <span style={{ color: "#d946ef" }}>Real Results for Real Clients</span>
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(229,231,235,0.75)", maxWidth: 760, fontWeight: 300 }}>
          Top rankings, organic growth, and qualified leads — verified with live search console
          and ranking-tool screenshots from real client campaigns across the UK, Dubai, and global markets.
        </p>
      </section>

      <section style={{ padding: "20px 6vw 120px", maxWidth: 1500, margin: "0 auto" }}>
        <div className="seo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
          {CASES.map(cs => (
            <article key={cs.id} className="seo-card" style={{
              background: "#1a1f2e",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 18, overflow: "hidden",
              display: "flex", flexDirection: "column",
              transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
            }}>
              <div style={{ padding: "26px 28px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                  <h2 style={{
                    margin: 0, color: "#ffffff", fontSize: 26, fontWeight: 600, letterSpacing: "-0.01em",
                  }}>{cs.name}</h2>
                  <span style={{
                    fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
                    color: "#d946ef", padding: "5px 12px", borderRadius: 999,
                    background: "rgba(217,70,239,0.12)", border: "1px solid rgba(217,70,239,0.35)",
                  }}>{cs.industry}</span>
                </div>
                <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {cs.metrics.map(m => (
                    <span key={m} style={{
                      fontSize: 12.5, padding: "7px 12px", borderRadius: 8,
                      background: "rgba(217,70,239,0.08)", color: "#f5d0fe",
                      border: "1px solid rgba(217,70,239,0.25)", fontWeight: 500,
                    }}>{m}</span>
                  ))}
                </div>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: cs.screenshots.length >= 4 ? "repeat(2, 1fr)" : "1fr",
                gap: 8, padding: "0 16px",
              }}>
                {cs.screenshots.map((s, i) => (
                  <a key={i} href={s.src} target="_blank" rel="noopener noreferrer" style={{
                    display: "block", borderRadius: 10, overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)", background: "#0a0a0a",
                  }}>
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}
                    />
                  </a>
                ))}
              </div>

              <p style={{
                margin: 0, padding: "22px 28px 28px",
                fontSize: 14.5, lineHeight: 1.65, color: "rgba(229,231,235,0.82)",
              }}>{cs.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "40px 6vw 120px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#d946ef", textTransform: "uppercase" }}>Ready to rank</div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(28px, 4vw, 44px)", margin: "16px 0 26px", fontWeight: 400, color: "#ffffff",
        }}>
          Let's grow your <span style={{ color: "#d946ef" }}>organic traffic.</span>
        </h2>
        <Link to="/" className="btn-violet" style={{ textDecoration: "none", display: "inline-block" }}>
          Start a Project →
        </Link>
      </section>

      <style>{`
        .seo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(217,70,239,0.55) !important;
          box-shadow: 0 0 0 1px rgba(217,70,239,0.2), 0 22px 60px -22px rgba(217,70,239,0.6);
        }
        @media (max-width: 900px) {
          .seo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}