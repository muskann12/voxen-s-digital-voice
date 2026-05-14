import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { Cursor } from "@/components/Cursor";
import { HeroScene } from "@/components/HeroScene";

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

const SECTIONS = ["hero", "story", "work", "voices", "awards", "connect"];

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
      position: "fixed", inset: 0, zIndex: 10000, background: "#08050F",
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
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  const links = [
    { id: "work", label: "Work" },
    { id: "story", label: "Our Story" },
    { id: "services", label: "Services" },
    { id: "awards", label: "Insights" },
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
      <div className="hide-md" style={{ display: "flex", gap: 36, fontSize: 13, color: "rgba(233,213,255,0.85)" }}>
        {links.map(l => (
          <button key={l.id} onClick={() => go(l.id)} style={{
            background: "none", border: "none", color: active === l.id ? "#fff" : "inherit",
            fontSize: 13, padding: 0, transition: "color 0.2s",
          }}>{l.label}</button>
        ))}
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
          padding: 40, gap: 28, fontSize: 22,
        }}>
          {links.map(l => <button key={l.id} onClick={() => go(l.id)} style={{ background: "none", border: "none", color: "#fff", textAlign: "left", fontSize: 22 }}>{l.label}</button>)}
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
      background: "#160E28", borderTop: "1px solid rgba(168,85,247,0.12)",
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
  { name: "NexaShop", cat: "E-Commerce", stack: "Next.js + Shopify", result: "+140% Revenue", desc: "A high-conversion storefront engineered for scale across regions." },
  { name: "AnalytixHQ", cat: "SaaS Dashboard", stack: "UI/UX Redesign", result: "+67% Retention", desc: "Reimagined data surfaces that turn complexity into clarity." },
  { name: "PulseHR", cat: "Landing Page", stack: "CRO + Copywriting", result: "+89% Sign-ups", desc: "Sharp narrative, sharp design, sharp pipeline." },
  { name: "ClearPay", cat: "Fintech Platform", stack: "UX Design", result: "-38% Drop-off", desc: "Trust-first checkout flows for cross-border payments." },
  { name: "EstatePro", cat: "Real Estate Portal", stack: "Web Dev", result: "+3x Enquiries", desc: "Immersive listings with cinematic 3D walkthroughs." },
];

const AWARDS = {
  Awwwards: [
    { project: "NexaShop", note: "Site of the Day · Nominee", year: "2024" },
    { project: "AnalytixHQ", note: "Mobile Excellence · Nominee", year: "2024" },
    { project: "EstatePro", note: "Developer Award · Honorable", year: "2025" },
  ],
  Clutch: [
    { project: "Voxen", note: "Top B2B Agency Pakistan", year: "2024" },
    { project: "Voxen", note: "Top UX Studio MENA", year: "2024" },
    { project: "PulseHR", note: "Top Conversion Project", year: "2024" },
    { project: "ClearPay", note: "Top Fintech UX", year: "2025" },
    { project: "Voxen", note: "Global Top 100 Agency", year: "2025" },
  ],
  Google: [
    { project: "Voxen", note: "Premier Partner", year: "2024" },
    { project: "Voxen", note: "Web Performance Cert.", year: "2024" },
    { project: "EstatePro", note: "Core Web Vitals A+", year: "2025" },
    { project: "NexaShop", note: "Mobile Excellence", year: "2025" },
  ],
};

const QUOTES = [
  { q: "Voxen gave our business a presence we never had. The results were immediate.", n: "Ahmed R.", t: "CEO, NexaShop" },
  { q: "They understood our brand better than we did. World-class execution.", n: "Sarah K.", t: "Marketing Director, PulseHR" },
  { q: "From first call to launch in 3 weeks. Exceptional quality and communication.", n: "Usman T.", t: "Founder, ClearPay" },
];

function Index() {
  const [active, setActive] = useState("hero");
  const [openCat, setOpenCat] = useState<string | null>("Awwwards");
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

      {/* STORY */}
      <section id="story" style={{ padding: "140px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">01 — Our Story</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, marginTop: 32 }} className="story-grid">
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
          fontSize: "clamp(34px, 4.5vw, 56px)", margin: "20px 0 50px", fontWeight: 400, letterSpacing: "-0.015em",
        }}>What we do, <span className="grad-text">end to end.</span></h2>
        <div className="reveal-stagger">
          {[
            { t: "3D Websites & WebGL", d: "Three.js, custom shaders, performance-first." },
            { t: "UI/UX Design", d: "Product surfaces, design systems, prototypes." },
            { t: "Web Development", d: "Next.js, headless CMS, edge deploys." },
            { t: "Brand Identity", d: "Naming, marks, tone, guidelines." },
            { t: "SEO & Growth", d: "Technical SEO, content engines, analytics." },
            { t: "SaaS Automation", d: "AI workflows, integrations, internal tools." },
          ].map(s => (
            <div key={s.t} className="svc-row interactive">
              <div>
                <div style={{ fontSize: 22, fontWeight: 500 }}>{s.t}</div>
                <div style={{ fontSize: 13, color: "rgba(233,213,255,0.55)", marginTop: 6 }}>{s.d}</div>
              </div>
              <div style={{ color: "#C084FC", fontSize: 18 }}>↗</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "120px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">02 — Selected Work</div>
        <h2 className="reveal" style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(36px, 5vw, 64px)", margin: "20px 0 50px", fontWeight: 400, letterSpacing: "-0.015em",
        }}>Projects <span className="grad-text">that perform.</span></h2>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} >
          {PROJECTS.slice(0, 3).map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
        <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 20 }}>
          {PROJECTS.slice(3).map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
        <style>{`
          @media (max-width: 900px) {
            #work > div[style*="repeat(3"], #work > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* VOICES */}
      <section id="voices" style={{ padding: "120px 6vw", background: "#0E0818" }}>
        <div style={{ maxWidth: 1500, margin: "0 auto" }}>
          <div className="sec-label reveal">03 — Voices</div>
          <h2 className="reveal" style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 64px)", margin: "20px 0 60px", fontWeight: 400, letterSpacing: "-0.015em",
          }}>What our <span className="grad-text">clients say.</span></h2>
          <div className="reveal-stagger" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {QUOTES.map(q => (
              <div key={q.n} className="interactive" style={{
                background: "#160E28", border: "1px solid rgba(168,85,247,0.1)",
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

      {/* AWARDS */}
      <section id="awards" style={{ padding: "120px 6vw", maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label reveal">04 — Recognition</div>
        <h2 className="reveal" style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(34px, 4.5vw, 56px)", margin: "20px 0 50px", fontWeight: 400, letterSpacing: "-0.015em", maxWidth: 900,
        }}>Recognition for work that <span className="grad-text">pushes what's possible.</span></h2>
        <div className="reveal">
          {Object.entries(AWARDS).map(([cat, rows]) => {
            const open = openCat === cat;
            return (
              <div key={cat} style={{ borderTop: "1px solid rgba(168,85,247,0.18)" }}>
                <button onClick={() => setOpenCat(open ? null : cat)} className="interactive" style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "28px 8px", background: "none", border: "none", color: "#fff",
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 28,
                }}>
                  <span>{cat} <span style={{ fontSize: 14, fontFamily: "Inter", fontStyle: "normal", color: "#C084FC", marginLeft: 12 }}>/ {rows.length}</span></span>
                  <span style={{ fontSize: 24, transition: "transform 0.4s", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div style={{
                  maxHeight: open ? rows.length * 80 + 40 : 0, overflow: "hidden",
                  transition: "max-height 0.5s ease",
                }}>
                  <div style={{ paddingBottom: 12 }}>
                    {rows.map((r, i) => (
                      <div key={i} className="award-row interactive">
                        <span style={{ fontWeight: 500 }}>{r.project}</span>
                        <span style={{ color: "rgba(233,213,255,0.6)" }}>{r.note}</span>
                        <span style={{ color: "#C084FC", fontSize: 13 }}>{r.year}</span>
                        <span style={{ color: "#C084FC" }}>↗</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(168,85,247,0.18)" }} />
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" style={{ padding: "140px 6vw", background: "#0E0818" }}>
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
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }} className="reveal" style={{
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
          <Logo size={36} />
        </div>
        <div style={{ textAlign: "center", fontSize: 11, color: "rgba(233,213,255,0.4)", letterSpacing: 1 }}>
          © {new Date().getFullYear()} VOXEN — All rights reserved · Pakistan · UAE · UK · USA
        </div>
        <style>{`@media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </footer>
    </>
  );
}

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  return (
    <div className="proj-card interactive">
      <div className="arrow" style={{ fontSize: 20 }}>↗</div>
      <div>
        <div className="proj-tag"><span className="dot" />{p.cat}</div>
        <div style={{ marginTop: 18, fontSize: 26, fontWeight: 600, fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}>{p.name}</div>
        <div style={{ marginTop: 12, fontSize: 14, color: "rgba(233,213,255,0.6)", lineHeight: 1.55, maxWidth: 360 }}>{p.desc}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(168,85,247,0.1)" }}>
        <span style={{ fontSize: 11, letterSpacing: 1.5, color: "rgba(233,213,255,0.5)", textTransform: "uppercase" }}>{p.stack}</span>
        <span style={{ fontSize: 12, color: "#C084FC", fontWeight: 500 }}>{p.result}</span>
      </div>
    </div>
  );
}
