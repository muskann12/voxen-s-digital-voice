import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  Palette, Film, TrendingUp, Code2, LayoutGrid, Users, Bot, Zap, Sparkles,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";
import { FloatingBox3D } from "@/components/FloatingBox3D";
import { SERVICES } from "@/lib/services";
import { FEATURED_CASES } from "@/lib/caseStudies";

const SERVICE_ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  "graphic-designing": Palette,
  "video-editing": Film,
  "seo-growth": TrendingUp,
  "web-development": Code2,
  "ui-ux-design": LayoutGrid,
  "recruiting": Users,
  "ai-chatbot-development": Bot,
  "software-automation": Zap,
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Voxen — Give Your Business A Voice" },
      { name: "description", content: "Voxen is a B2B digital agency crafting world-class 3D websites, brand identities, and digital experiences across Pakistan, UAE, UK, and USA." },
      { property: "og:title", content: "Voxen — Give Your Business A Voice" },
      { property: "og:description", content: "World-class B2B digital experiences. 3D websites, UI/UX, brand identity." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display:ital@1&display=swap" },
    ],
  }),
});

const SECTIONS = ["hero", "pricing", "story", "services", "case-studies", "voices", "connect"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.15 },
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Preloader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1800);
    const t2 = setTimeout(() => setHide(true), 2400);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);
  if (hide) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 10000, background: "#0f172a",
      display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 24,
      opacity: gone ? 0 : 1, transition: "opacity 0.6s ease", pointerEvents: gone ? "none" : "auto",
    }}>
      <div style={{ display: "flex", alignItems: "end", gap: 6, height: 60 }}>
        {[60, 36, 36, 60].map((h, i) => (
          <div key={i} className="pre-bar" style={{
            width: 8, height: h, borderRadius: 2,
            background: "linear-gradient(180deg, #7C3AED, #C084FC)",
            animationDelay: `${i * 0.12}s`,
          }} />
        ))}
      </div>
      <div style={{ letterSpacing: 6, fontSize: 14, color: "#E9D5FF", fontWeight: 500 }}>VOXEN</div>
    </div>
  );
}

function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [svcOpenMobile, setSvcOpenMobile] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  const links = [
    { id: "work", label: "Work" },
    { id: "story", label: "Our Story" },
    { id: "pricing", label: "Pricing" },
  ];
  return (
    <nav className={scrolled ? "nav-scrolled" : ""} style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.35s ease",
    }}>
      <button onClick={() => go("hero")} style={{ background: "none", border: "none", padding: 0 }}>
        <Logo />
      </button>
      <div className="hide-md" style={{ display: "flex", gap: 36, fontSize: 13, color: "rgba(233,213,255,0.85)", alignItems: "center" }}>
        {links.map(l => (
          <button key={l.id} onClick={() => go(l.id)} style={{
            background: "none", border: "none", color: active === l.id ? "#fff" : "inherit",
            fontSize: 13, padding: 0, transition: "color 0.2s",
          }}>{l.label}</button>
        ))}
        <div
          onMouseEnter={() => setSvcOpen(true)}
          onMouseLeave={() => setSvcOpen(false)}
          style={{ position: "relative" }}
        >
          <button onClick={() => go("services")} style={{
            background: "none", border: "none", color: active === "services" ? "#fff" : "inherit",
            fontSize: 13, padding: 0, transition: "color 0.2s", display: "flex", alignItems: "center", gap: 4,
          }}>
            Services <span style={{ fontSize: 9, opacity: 0.7 }}>▾</span>
          </button>
          {svcOpen && (
            <div style={{
              position: "absolute", top: "100%", right: 0, paddingTop: 14, minWidth: 280,
            }}>
              <div style={{
                background: "rgba(22,14,40,0.97)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.18)", borderRadius: 14,
                padding: 10, display: "flex", flexDirection: "column",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}>
                {SERVICES.map(s => (
                  <Link key={s.slug} to={s.to} className="interactive" style={{
                    textDecoration: "none", color: "rgba(233,213,255,0.85)",
                    padding: "10px 14px", borderRadius: 8, fontSize: 13,
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,85,247,0.12)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(233,213,255,0.85)"; }}
                  >
                    <span>{s.title}</span>
                    <span style={{ color: "#C084FC", fontSize: 14 }}>↗</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <button onClick={() => go("connect")} className="hide-md" style={{
        background: "none", border: "none", color: "#C084FC", fontSize: 13, fontWeight: 500,
      }}>Connect →</button>
      <button onClick={() => setOpen(!open)} style={{
        display: "none", background: "none", border: "none", color: "#fff",
      }} className="mobile-toggle">☰</button>
      {open && (
        <div style={{
          position: "fixed", inset: "70px 0 0 0", background: "rgba(8,5,15,0.97)",
          backdropFilter: "blur(20px)", display: "flex", flexDirection: "column",
          padding: 40, gap: 28, fontSize: 22, overflowY: "auto",
        }}>
          {links.map(l => <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#fff", textAlign: "left", fontSize: 22 }}>{l.label}</button>)}
          <div>
            <button onClick={() => setSvcOpenMobile(!svcOpenMobile)} style={{ background: "none", border: "none", color: "#fff", textAlign: "left", fontSize: 22, display: "flex", alignItems: "center", gap: 8 }}>
              Services <span style={{ fontSize: 14, transform: svcOpenMobile ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
            </button>
            {svcOpenMobile && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16, paddingLeft: 14, borderLeft: "1px solid rgba(168,85,247,0.25)" }}>
                {SERVICES.map(s => (
                  <Link key={s.slug} to={s.to} onClick={() => setOpen(false)} style={{ color: "rgba(233,213,255,0.85)", textDecoration: "none", fontSize: 16 }}>
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => go("connect")} style={{ background: "none", border: "none", color: "#C084FC", textAlign: "left", fontSize: 22 }}>Connect →</button>
        </div>
      )}
      <style>{`@media (max-width: 900px) { .mobile-toggle { display: block !important; } }`}</style>
    </nav>
  );
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div style={{
      background: "#1e293b", borderTop: "1px solid rgba(168,85,247,0.12)",
      borderBottom: "1px solid rgba(168,85,247,0.12)", padding: "18px 0", overflow: "hidden",
    }}>
      <div className={`marquee-track ${reverse ? "rev" : ""}`}>
        {doubled.map((s, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 28, padding: "0 28px",
            fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
            color: "rgba(233,213,255,0.35)", whiteSpace: "nowrap", fontWeight: 500,
          }}>
            <span>{s}</span>
            <span style={{ color: "#C084FC", fontSize: 8 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SideDots({ active, onJump }: { active: string; onJump: (id: string) => void }) {
  return (
    <div className="dot-nav hide-md">
      {SECTIONS.map(s => (
        <button key={s} onClick={() => onJump(s)} className={active === s ? "active" : ""} title={s} />
      ))}
    </div>
  );
}

const PROJECTS = [
  { name: "NexaShop", cat: "E-Commerce", stack: "Next.js + Shopify", result: "+140% Revenue", desc: "A high-conversion storefront engineered for scale across regions.", color: "#a855f7" },
  { name: "AnalytixHQ", cat: "SaaS Dashboard", stack: "UI/UX Redesign", result: "+67% Retention", desc: "Reimagined data surfaces that turn complexity into clarity.", color: "#ec4899" },
  { name: "PulseHR", cat: "Landing Page", stack: "CRO + Copywriting", result: "+89% Sign-ups", desc: "Sharp narrative, sharp design, sharp pipeline.", color: "#8b5cf6" },
  { name: "ClearPay", cat: "Fintech Platform", stack: "UX Design", result: "-38% Drop-off", desc: "Trust-first checkout flows for cross-border payments.", color: "#06b6d4" },
  { name: "EstatePro", cat: "Real Estate Portal", stack: "Web Dev", result: "+3x Enquiries", desc: "Immersive listings with cinematic 3D walkthroughs.", color: "#f59e0b" },
];


const QUOTES = [
  { q: "Voxen gave our business a presence we never had. The results were immediate.", n: "Ahmed R.", t: "CEO, NexaShop" },
  { q: "They understood our brand better than we did. World-class execution.", n: "Sarah K.", t: "Marketing Director, PulseHR" },
  { q: "From first call to launch in 3 weeks. Exceptional quality and communication.", n: "Usman T.", t: "Founder, ClearPay" },
];

function Index() {
  const [active, setActive] = useState("hero");
  
  const [budget, setBudget] = useState("$5K–$15K");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  useReveal();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.45 },
    );
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Cursor />
      <Preloader />
      <Nav active={active} />
      <SideDots active={active} onJump={jump} />

      {/* HERO */}
      <section id="hero" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        <HeroScene />
        <div style={{
          position: "relative", zIndex: 2, padding: "140px 6vw 100px",
          minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
          maxWidth: 1500, margin: "0 auto",
        }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow reveal" style={{ marginBottom: 28 }}>3D Websites · Digital Experiences · B2B Agency</div>
            <h1 className="reveal" style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
              fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 1.02, fontWeight: 400,
              margin: 0, letterSpacing: "-0.02em",
            }}>
              Give your business<br />
              <span className="grad-text">a voice.</span>
            </h1>
            <p className="reveal" style={{
              marginTop: 32, fontSize: 17, lineHeight: 1.6, color: "rgba(233,213,255,0.7)",
              maxWidth: 520, fontWeight: 300,
            }}>
              We create world-class digital experiences for B2B businesses done being invisible.
              <br /><span style={{ color: "#C084FC", fontSize: 13, letterSpacing: 1.5 }}>PAKISTAN · UAE · UK · USA</span>
            </p>
            <div className="reveal" style={{ marginTop: 44, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => jump("work")} className="btn-violet">See Our Work</button>
              <button onClick={() => jump("story")} className="btn-ghost">Our Story →</button>
            </div>
          </div>
        </div>
        {/* scroll indicator */}
        <div style={{ position: "absolute", left: 40, bottom: 40, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div className="shimmer-line" />
          <span style={{ fontSize: 10, letterSpacing: 3, color: "rgba(233,213,255,0.5)" }}>SCROLL</span>
        </div>
        {/* stats */}
        <div className="hide-md" style={{
          position: "absolute", right: 40, bottom: 40, zIndex: 2,
          display: "flex", gap: 36, color: "rgba(233,213,255,0.7)",
        }}>
          {[
            { n: "48+", l: "Projects" },
            { n: "96%", l: "Satisfaction" },
            { n: "3x", l: "Conversion" },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 28, color: "#fff" }}>{s.n}</div>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <Marquee items={["NexaShop", "AnalytixHQ", "PulseHR", "ClearPay", "EstatePro", "Rebrand Studio", "Pakistan · UAE · UK · US"]} />
      <Marquee reverse items={["3D Websites", "UI/UX Design", "Web Development", "Brand Identity", "SEO", "Digital Marketing", "SaaS Automation", "Recruitment"]} />

      {/* AI AUTOMATION SUITE FEATURED */}
      <section id="automation-suite" style={{ padding: "100px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="reveal" style={{
          position: "relative",
          borderRadius: 24,
          padding: "clamp(28px, 4vw, 56px)",
          background: "linear-gradient(135deg, rgba(34,211,238,0.10), rgba(124,58,237,0.18) 60%, rgba(14,8,24,0.9))",
          border: "1px solid rgba(34,211,238,0.25)",
          boxShadow: "0 40px 120px -40px rgba(34,211,238,0.35), inset 0 0 80px rgba(124,58,237,0.08)",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: -2, pointerEvents: "none",
            background: "radial-gradient(60% 60% at 20% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(50% 50% at 100% 100%, rgba(192,132,252,0.18), transparent 60%)",
          }} />
          <div style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 40,
            alignItems: "center",
          }} className="auto-suite-grid">
            <div>
              <div className="sec-label" style={{ color: "#22D3EE" }}>New — Case Study</div>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                fontSize: "clamp(30px, 4.4vw, 56px)", margin: "16px 0 18px", fontWeight: 400,
                letterSpacing: "-0.015em", color: "#fff",
              }}>
                AI-Powered <span className="grad-text">Automation Suite</span>
              </h2>
              <p style={{
                fontSize: 17, lineHeight: 1.65, color: "rgba(233,213,255,0.78)", fontWeight: 300,
                maxWidth: 560, marginBottom: 28,
              }}>
                WhatsApp &amp; Telegram integration, AI task assignment, Stripe invoicing,
                real-time dashboard, and AI client memory. See how we automated an entire
                business operation.
              </p>
              <Link
                to="/case-studies/$slug"
                params={{ slug: "ai-automation-suite" }}
                className="btn-violet"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                View Full Case Study →
              </Link>
            </div>
            <div style={{
              borderRadius: 16, overflow: "hidden",
              border: "1px solid rgba(34,211,238,0.3)",
              background: "#000",
              boxShadow: "0 30px 80px -30px rgba(34,211,238,0.5)",
            }}>
              <video
                src="https://raw.githubusercontent.com/muskann12/portfloio-images/main/dashboard-preview.mp4"
                autoPlay muted loop playsInline
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .auto-suite-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>



      {/* PRICING / VALUE */}
      <section id="pricing" style={{ padding: "120px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">01 — Pricing</div>
        <h2 className="reveal" style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(34px, 5vw, 64px)", margin: "20px 0 24px", fontWeight: 400, letterSpacing: "-0.015em", maxWidth: 1000,
        }}>
          Agency-level work, <span className="grad-text">without the agency-level invoice.</span>
        </h2>
        <p className="reveal" style={{
          fontSize: 17, lineHeight: 1.6, color: "rgba(233,213,255,0.7)", maxWidth: 680, fontWeight: 300, marginBottom: 56,
        }}>
          We charge a fraction of what traditional agencies bill — same craft, same senior team,
          honest pricing built for founders and growing brands.
        </p>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { k: "Up to 60%", l: "Less than agency rates", d: "Lean team, zero overhead, all senior talent — savings passed straight to you." },
            { k: "Flat &", l: "Transparent quotes", d: "No surprise invoices, no scope-creep games. One clear price, locked from day one." },
            { k: "Built for", l: "Real budgets", d: "Startup, SMB or enterprise — we shape a scope that fits, not one that bleeds you." },
          ].map(c => (
            <div key={c.l} className="cap-card interactive" style={{ padding: 32 }}>
              <div style={{
                fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                fontSize: 34, color: "#fff", letterSpacing: "-0.01em",
              }}>{c.k}</div>
              <div style={{ fontSize: 14, color: "#C084FC", marginTop: 6, fontWeight: 500, letterSpacing: 0.5 }}>{c.l}</div>
              <div style={{ marginTop: 16, fontSize: 14, color: "rgba(233,213,255,0.65)", lineHeight: 1.6 }}>{c.d}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { #pricing > div[style*="repeat(3"] { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* STORY */}
      <section id="story" style={{ padding: "140px 6vw", maxWidth: 1500, margin: "0 auto", position: "relative" }}>
        <div className="sec-label reveal">02 — Our Story</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, marginTop: 32, position: "relative", zIndex: 1 }} className="story-grid">
          <div>
            <h2 className="reveal" style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
              fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 400,
              margin: 0, letterSpacing: "-0.015em",
            }}>
              Great work can't happen <span className="grad-text">without great partnership.</span>
            </h2>
            <p className="reveal" style={{
              marginTop: 28, fontSize: 16, lineHeight: 1.7, color: "rgba(233,213,255,0.65)", maxWidth: 540,
            }}>
              Voxen is a full-service B2B agency built in Pakistan and operating internationally.
              We partner with ambitious teams from first sketch to last shipped pixel — design, code,
              brand and growth, all under one roof. No silos, no hand-offs, just craft.
            </p>
            <div className="reveal" style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 28 }}>
              {["Voice", "Clarity", "Authority", "Results", "Trust"].map(p => (
                <div key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(233,213,255,0.85)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E8C07A", boxShadow: "0 0 8px #E8C07A" }} />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {[
              { n: "01", t: "Web Design & Dev", d: "Sites engineered to ship and scale." },
              { n: "02", t: "UI/UX Design", d: "Interfaces with intention and edge." },
              { n: "03", t: "Brand Identity", d: "Voice and visual systems with weight." },
              { n: "04", t: "Marketing & SEO", d: "Compounding visibility, qualified pipeline." },
            ].map(c => (
              <div key={c.n} className="cap-card interactive">
                <div style={{ fontSize: 11, letterSpacing: 2, color: "#C084FC" }}>{c.n}</div>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 14 }}>{c.t}</div>
                <div style={{ marginTop: 10, fontSize: 13, color: "rgba(233,213,255,0.6)", lineHeight: 1.55 }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 6vw 120px", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">— Services</div>
        <h2 className="reveal" style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(34px, 4.5vw, 56px)", margin: "20px 0 14px", fontWeight: 400, letterSpacing: "-0.015em",
          display: "inline-block", position: "relative",
        }}>
          What we do, <span className="grad-text">end to end.</span>
          <span style={{
            display: "block", marginTop: 14, width: 96, height: 3, borderRadius: 3,
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, transparent)",
          }} />
        </h2>
        <div className="reveal-stagger svc-card-grid" style={{
          marginTop: 50, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20,
        }}>
          {SERVICES.map(s => {
            const Icon = SERVICE_ICONS[s.slug] ?? Sparkles;
            return (
              <Link key={s.slug} to={s.to} className="svc-tile interactive" style={{
                textDecoration: "none", color: "inherit",
                background: "#1e293b",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: 24, position: "relative",
                display: "flex", flexDirection: "column", gap: 14, minHeight: 200,
                transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  color: "#60a5fa",
                }}>
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 600, color: "#f0f0f0", lineHeight: 1.25 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "#cbd5e1", lineHeight: 1.55 }}>
                  {s.tagline} <span style={{ color: "#60a5fa" }}>↗</span>
                </div>
              </Link>
            );
          })}
        </div>
        <style>{`
          .svc-tile:hover {
            transform: translateY(-6px) scale(1.01);
            border-color: rgba(59,130,246,0.55) !important;
            box-shadow: 0 0 0 1px rgba(59,130,246,0.25), 0 18px 50px -18px rgba(59,130,246,0.55);
            background: #233044 !important;
          }
          @media (max-width: 1100px) { .svc-card-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px)  { .svc-card-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section id="case-studies" style={{ padding: "120px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">04 — Featured Case Studies</div>
        <h2 className="reveal" style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(36px, 5vw, 64px)", margin: "20px 0 24px", fontWeight: 400, letterSpacing: "-0.015em",
        }}>Real systems, <span className="grad-text">real outcomes.</span></h2>
        <p className="reveal" style={{
          fontSize: 17, lineHeight: 1.6, color: "rgba(233,213,255,0.7)", maxWidth: 720, fontWeight: 300, marginBottom: 50,
        }}>
          AI inventory, ecommerce automation, voice AI — production-grade software shipped for real clients.
        </p>
        <div className="reveal-stagger cs-feat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {FEATURED_CASES.map(cs => (
            <Link key={cs.slug} to={`/case-studies/${cs.slug}` as any} className="interactive" style={{
              textDecoration: "none", color: "inherit",
              border: "1px solid rgba(168,85,247,0.18)", borderRadius: 16,
              background: "linear-gradient(135deg, rgba(22,14,40,0.85), rgba(14,8,24,0.85))",
              overflow: "hidden", display: "flex", flexDirection: "column",
              transition: "all 0.35s ease",
            }}>
              <div style={{
                position: "relative", aspectRatio: "16 / 10",
                background: `radial-gradient(circle at 30% 30%, ${cs.color}28, transparent 65%), #111827`,
                borderBottom: "1px solid rgba(168,85,247,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10,
              }}>
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 72, color: cs.color, letterSpacing: "-0.02em", lineHeight: 1,
                }}>{cs.initial}</div>
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 999,
                  background: cs.color + "22", color: cs.color, border: `1px solid ${cs.color}55`,
                }}>{cs.industry}</div>
              </div>
              <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 22, margin: 0, lineHeight: 1.25, color: "#fff", fontWeight: 400,
                }}>{cs.shortTitle}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(233,213,255,0.65)", margin: 0 }}>
                  {cs.summary}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {cs.technologies.slice(0, 4).map(t => (
                    <span key={t} style={{
                      fontSize: 10.5, padding: "3px 8px", borderRadius: 4,
                      background: "rgba(124,58,237,0.18)", color: "#E9D5FF",
                      border: "1px solid rgba(168,85,247,0.22)",
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{
                  marginTop: "auto", paddingTop: 16,
                  borderTop: "1px solid rgba(168,85,247,0.12)",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: 2, color: "rgba(233,213,255,0.5)", textTransform: "uppercase" }}>Outcome</div>
                    <div style={{ fontSize: 13, color: "#fff", marginTop: 2 }}>{cs.outcome}</div>
                  </div>
                  <span style={{ fontSize: 12, color: cs.color, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 500 }}>
                    View Case Study →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media (max-width: 1100px) { .cs-feat-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 750px) { .cs-feat-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>


      {/* VOICES */}
      <section id="voices" style={{ padding: "120px 6vw", background: "#111827" }}>
        <div style={{ maxWidth: 1500, margin: "0 auto" }}>
          <div className="sec-label reveal">05 — Voices</div>
          <h2 className="reveal" style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 64px)", margin: "20px 0 60px", fontWeight: 400, letterSpacing: "-0.015em",
          }}>What our <span className="grad-text">clients say.</span></h2>
          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {QUOTES.map(q => (
              <div key={q.n} className="interactive" style={{
                background: "#1e293b", border: "1px solid rgba(168,85,247,0.1)",
                borderRadius: 18, padding: 36, display: "flex", flexDirection: "column", gap: 28,
              }}>
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 22, lineHeight: 1.4, color: "#fff",
                }}>"{q.q}"</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: "auto" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7C3AED, #C084FC)",
                  }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{q.n}</div>
                    <div style={{ fontSize: 12, color: "rgba(233,213,255,0.55)" }}>{q.t}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 900px) { #voices > div > div[style*="repeat(3"] { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>


      {/* CONNECT */}

      <section id="connect" style={{ padding: "140px 6vw", background: "#111827" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <h2 className="reveal" style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.2, fontWeight: 400,
            margin: 0, letterSpacing: "-0.01em",
          }}>
            But we're here not to talk about ourselves — we're here to talk about <span className="grad-text">you, your company, your product, and your goals.</span>
          </h2>
          <p className="reveal" style={{ marginTop: 24, fontSize: 16, color: "rgba(233,213,255,0.65)" }}>
            With us it happens. We would love to hear from you.
          </p>

          {sent ? (
            <div className="reveal" style={{ marginTop: 60, fontSize: 22, color: "#fff", fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>
              ♥ Thank you. We'll be in touch within 24 hours.
            </div>
          ) : (
            <>
              <div className="reveal" style={{ marginTop: 60, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                {["$1K–$5K", "$5K–$15K", "$15K+"].map(b => (
                  <button key={b} onClick={() => setBudget(b)} className={`pill interactive ${budget === b ? "active" : ""}`}>{b}</button>
                ))}
              </div>
              <form onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                const subject = encodeURIComponent(`New project enquiry — ${budget}`);
                const body = encodeURIComponent(`Hi Voxen,\n\nI'd like to discuss a project.\nBudget: ${budget}\nEmail: ${email}\n\n— Sent from voxen.com`);
                window.location.href = `mailto:hello@voxen.com?subject=${subject}&body=${body}`;
                setSent(true);
              }} className="reveal" style={{
                marginTop: 40, display: "flex", gap: 16, alignItems: "center",
                maxWidth: 640, margin: "40px auto 0", flexWrap: "wrap", justifyContent: "center",
              }}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your@email.com" style={{
                  flex: 1, minWidth: 260, background: "transparent", border: "none",
                  borderBottom: "1px solid rgba(233,213,255,0.3)", padding: "14px 4px",
                  color: "#fff", fontSize: 16, outline: "none", fontFamily: "inherit",
                }} />
                <button type="submit" className="btn-violet">Send →</button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "80px 6vw 40px", borderTop: "1px solid rgba(168,85,247,0.12)" }}>
        <div style={{
          maxWidth: 1500, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40,
        }} className="footer-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(233,213,255,0.65)" }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Menu</div>
            {["Work", "Our Story", "Services", "Connect", "Privacy"].map(l => <a key={l} href="#" className="interactive">{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(233,213,255,0.65)" }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Social</div>
            {["LinkedIn", "Instagram", "Dribbble", "X / Twitter"].map(l => <a key={l} href="#" className="interactive">{l}</a>)}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(233,213,255,0.65)" }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Contact</div>
            <a href="mailto:hello@voxen.com" className="interactive" style={{ color: "#fff" }}>hello@voxen.com</a>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", color: "#C084FC", fontSize: 18, marginTop: 6 }}>
              Give Your Business A Voice.
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "60px 0 24px" }}>
          <Logo size={56} />
        </div>
        <div style={{ textAlign: "center", fontSize: 11, color: "rgba(233,213,255,0.4)", letterSpacing: 1 }}>
          © {new Date().getFullYear()} VOXEN — All rights reserved · Pakistan · UAE · UK · USA
        </div>
        <style>{`@media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </footer>
    </>
  );
}
