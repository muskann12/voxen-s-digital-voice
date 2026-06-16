import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode, type FormEvent } from "react";

import { Logo } from "@/components/Logo";
import { Cursor } from "@/components/Cursor";
import type { CaseStudy, WorkflowStep } from "@/lib/caseStudies";

function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      padding: "20px 6vw", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "rgba(8,5,15,0.7)", backdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(168,85,247,0.10)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}> <span className="nav-logo-wrap">
          <Logo />
        </span></Link>
      <Link to="/" style={{
        color: "rgba(233,213,255,0.85)", textDecoration: "none", fontSize: 13,
        display: "inline-flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ color: "#C084FC" }}>←</span> Back to Home
      </Link> <style>{`
        .nav-logo-wrap svg, .nav-logo-wrap img { width: 100px; }
      `}</style>
    </header>
  );
}

function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div style={{
      fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
      color: "#C084FC", marginBottom: 18, fontWeight: 500,
    }}>{n} — {children}</div>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
      fontSize: "clamp(28px, 3.6vw, 46px)", lineHeight: 1.1, fontWeight: 400,
      margin: "0 0 28px", letterSpacing: "-0.015em", color: "#fff",
    }}>{children}</h2>
  );
}

function Card({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      border: "1px solid rgba(168,85,247,0.18)",
      borderRadius: 14,
      background: "linear-gradient(135deg, rgba(22,14,40,0.85), rgba(14,8,24,0.85))",
      padding: 28,
      ...style,
    }}>{children}</div>
  );
}

function Flow({ steps, color }: { steps: WorkflowStep[]; color: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            width: "100%", maxWidth: 520,
            padding: "14px 20px",
            border: `1px solid ${color}55`,
            background: `linear-gradient(135deg, ${color}18, ${color}06)`,
            borderRadius: 10, textAlign: "center",
            color: "#fff", fontSize: 14, letterSpacing: 0.3,
          }}>{s.label}</div>
          {i < steps.length - 1 && (
            <div style={{ color: color, fontSize: 16, opacity: 0.6, padding: "2px 0" }}>↓</div>
          )}
        </div>
      ))}
    </div>
  );
}

function DemoForm({ color }: { color: string }) {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    console.log("[Demo Request]", payload);
    setSubmitted(true);
  };
  const input: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    background: "rgba(22,14,40,0.6)", border: "1px solid rgba(168,85,247,0.22)",
    color: "#fff", fontSize: 14, outline: "none",
  };
  const label: React.CSSProperties = {
    fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
    color: "rgba(233,213,255,0.65)", marginBottom: 8, display: "block",
  };
  return (
    <section style={{ padding: "60px 6vw", maxWidth: 900, margin: "0 auto" }}>
      <div style={{
        border: `1px solid ${color}44`,
        borderRadius: 18,
        background: "linear-gradient(135deg, rgba(22,14,40,0.9), rgba(14,8,24,0.9))",
        padding: 40,
      }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color, textTransform: "uppercase", marginBottom: 10 }}>
          Talk to us
        </div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(28px, 3.6vw, 44px)", margin: "0 0 24px", color: "#fff", fontWeight: 400,
        }}>
          Request a Demo
        </h2>
        {submitted ? (
          <p style={{ fontSize: 16, color: "#86efac" }}>
            Thanks — we've received your request and will be in touch shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "grid", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="cs-2col">
              <div><label style={label}>Name</label><input required name="name" style={input} /></div>
              <div><label style={label}>Email</label><input required type="email" name="email" style={input} /></div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="cs-2col">
              <div><label style={label}>Company</label><input required name="company" style={input} /></div>
              <div><label style={label}>Phone (optional)</label><input name="phone" style={input} /></div>
            </div>
            <div>
              <label style={label}>Message</label>
              <textarea required name="message" rows={4} style={{ ...input, resize: "vertical" }} />
            </div>
            <button type="submit" className="btn-violet" style={{ justifySelf: "start" }}>
              Get a Quote →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}



export function CaseStudyPage({ cs }: { cs: CaseStudy }) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, [cs.slug]);

  return (
    <div style={{ minHeight: "100vh", background: "#000000", color: "#E9D5FF" }}>
      <Cursor />
      <Header />

      {/* HERO */}
      <section style={{ padding: "80px 6vw 60px", maxWidth: 1400, margin: "0 auto" }}>
        <nav style={{ fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.5)" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 10px", color: "#C084FC" }}>/</span>
          <span style={{ color: "#C084FC" }}>Case Studies</span>
          <span style={{ margin: "0 10px", color: "#C084FC" }}>/</span>
          <span style={{ color: "#fff" }}>{cs.shortTitle}</span>
        </nav>

        <div style={{ marginTop: 28, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: cs.color }}>
          {cs.hero.eyebrow}
        </div>

        <h1 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(36px, 6vw, 76px)", lineHeight: 1.05, fontWeight: 400,
          margin: "20px 0 22px", letterSpacing: "-0.02em", color: "#fff", maxWidth: 1100,
        }}>{cs.hero.headline}</h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(233,213,255,0.75)", maxWidth: 820, fontWeight: 300 }}>
          {cs.hero.sub}
        </p>

        <div style={{
          marginTop: 44, display: "grid", gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}>
          {[
            { l: "Industry", v: cs.industry },
            { l: "Outcome", v: cs.outcome },
            { l: "Stack", v: cs.technologies.slice(0, 3).join(" · ") },
            { l: "Engagement", v: "End-to-end" },
          ].map(m => (
            <Card key={m.l} style={{ padding: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "rgba(233,213,255,0.5)", textTransform: "uppercase" }}>{m.l}</div>
              <div style={{ marginTop: 8, fontSize: 16, color: "#fff", lineHeight: 1.35 }}>{m.v}</div>
            </Card>
          ))}
        </div>
      </section>

      {cs.videoUrl && (
        <section style={{ padding: "20px 6vw 40px", maxWidth: 1400, margin: "0 auto" }}>
          <div style={{
            border: `1px solid ${cs.color}33`,
            borderRadius: 18,
            overflow: "hidden",
            background: "#000",
            boxShadow: `0 30px 80px -30px ${cs.color}55`,
          }}>
            <video
              src={cs.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </section>
      )}



      {/* CLIENT OVERVIEW */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel n="01">Client Overview</SectionLabel>
        <H2>The client.</H2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(233,213,255,0.72)", maxWidth: 880 }}>
          {cs.clientOverview}
        </p>
      </section>

      {/* CHALLENGES + GOALS */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <div className="cs-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <Card>
            <SectionLabel n="02">Business Challenges</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {cs.challenges.map(c => (
                <li key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, color: "rgba(233,213,255,0.8)" }}>
                  <span style={{ color: "#ec4899", marginTop: 2 }}>✕</span>{c}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <SectionLabel n="03">Project Goals</SectionLabel>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {cs.goals.map(g => (
                <li key={g} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 14.5, color: "rgba(233,213,255,0.85)" }}>
                  <span style={{ color: cs.color, marginTop: 2 }}>✓</span>{g}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel n="04">Solution Overview</SectionLabel>
        <H2>How we built it.</H2>
        <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(233,213,255,0.72)", maxWidth: 920 }}>
          {cs.solution}
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel n="05">System Architecture</SectionLabel>
        <H2>End-to-end flow.</H2>
        <Card style={{ padding: "40px 28px" }}>
          <Flow steps={cs.architecture} color={cs.color} />
        </Card>
        {cs.secondaryFlow && (
          <Card style={{ padding: "40px 28px", marginTop: 24 }}>
            <div style={{ fontSize: 13, letterSpacing: 2, color: "#C084FC", textTransform: "uppercase", marginBottom: 22, textAlign: "center" }}>
              {cs.secondaryFlow.title}
            </div>
            <Flow steps={cs.secondaryFlow.steps} color={cs.color} />
          </Card>
        )}
      </section>

      {/* MODULES (optional) */}
      {cs.modules && cs.modules.length > 0 && (
        <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
          <SectionLabel n="06">Technical Implementation</SectionLabel>
          <H2>Inside the platform.</H2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="cs-2col">
            {cs.modules.map(m => (
              <Card key={m.heading}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 22, color: "#fff", marginBottom: 10 }}>
                  {m.heading}
                </div>
                {m.body && <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "rgba(233,213,255,0.7)", margin: 0 }}>{m.body}</p>}
                {m.bullets && (
                  <ul style={{ marginTop: 14, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {m.bullets.map(b => (
                      <li key={b} style={{ fontSize: 13, color: "rgba(233,213,255,0.75)", display: "flex", gap: 10 }}>
                        <span style={{ color: cs.color }}>◆</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel n={cs.modules ? "07" : "06"}>Core Features</SectionLabel>
        <H2>What it does.</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
          {cs.features.map(f => (
            <div key={f} style={{
              padding: "16px 18px",
              border: "1px solid rgba(168,85,247,0.18)",
              borderRadius: 10,
              background: "rgba(22,14,40,0.6)",
              fontSize: 14, color: "#E9D5FF",
              display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <span style={{ color: cs.color, fontSize: 12, marginTop: 3 }}>●</span>
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section style={{ padding: "60px 6vw", maxWidth: 1400, margin: "0 auto" }}>
        <SectionLabel n={cs.modules ? "08" : "07"}>Technology Stack</SectionLabel>
        <H2>Under the hood.</H2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {cs.stack.map(g => (
            <Card key={g.group}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#C084FC", marginBottom: 14 }}>{g.group}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {g.items.map(i => (
                  <div key={i} style={{ fontSize: 14, color: "#fff" }}>{i}</div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "80px 6vw", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <SectionLabel n={cs.modules ? "09" : "08"}>Business Impact</SectionLabel>
          <H2>Measurable results.</H2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {cs.results.map(r => (
              <Card key={r.label} style={{ textAlign: "center", padding: "36px 24px" }}>
                <div style={{
                  fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
                  fontSize: 52, color: cs.color, letterSpacing: "-0.02em", lineHeight: 1,
                }}>{r.value}</div>
                <div style={{ marginTop: 12, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.6)" }}>{r.label}</div>
              </Card>
            ))}
          </div>

          {cs.scalability && (
            <div style={{ marginTop: 60, maxWidth: 880 }}>
              <SectionLabel n={cs.modules ? "10" : "09"}>Scalability</SectionLabel>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(233,213,255,0.72)" }}>{cs.scalability}</p>
            </div>
          )}

          {cs.roadmap && cs.roadmap.length > 0 && (
            <div style={{ marginTop: 60 }}>
              <SectionLabel n={cs.modules ? "11" : "10"}>Future Roadmap</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
                {cs.roadmap.map((r, i) => (
                  <Card key={r} style={{ padding: 20 }}>
                    <div style={{ fontSize: 12, color: cs.color, letterSpacing: 2 }}>0{i + 1}</div>
                    <div style={{ marginTop: 8, fontSize: 15, color: "#fff" }}>{r}</div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {cs.showDemoForm && <DemoForm color={cs.color} />}

      {/* CTA */}

      <section style={{ padding: "100px 6vw", maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#C084FC", textTransform: "uppercase" }}>Ready to start</div>
        <h2 style={{
          fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
          fontSize: "clamp(28px, 4vw, 48px)", margin: "16px 0 26px", fontWeight: 400,
        }}>
          Got a project like this? <span className="grad-text">Let's talk.</span>
        </h2>
        <Link to="/" className="btn-violet" style={{ textDecoration: "none", display: "inline-block" }}>
          Start a Project →
        </Link>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cs-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
