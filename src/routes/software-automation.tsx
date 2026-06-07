import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";
import { CASE_STUDIES } from "@/lib/caseStudies";

export const Route = createFileRoute("/software-automation")({
  component: Page,
  head: () => ({ meta: [
    { title: "Software Automation — Voxen" },
    { name: "description", content: "AI inventory, ecommerce automation, voice AI and custom internal tools — real case studies from Voxen." },
    { property: "og:title", content: "Software Automation — Voxen" },
    { property: "og:description", content: "Real-world software automation case studies: AI inventory, ecommerce sync, voice calling." },
  ]}),
});

const CaseThumb = ({ cs }: { cs: typeof CASE_STUDIES[number] }) => (
  <div style={{
    width: "78%", aspectRatio: "16 / 9", borderRadius: 12,
    background: `linear-gradient(135deg, ${cs.color}28, ${cs.color}08)`,
    border: `1px solid ${cs.color}55`,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8,
    padding: 18,
  }}>
    <div style={{
      fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
      fontSize: 56, color: cs.color, letterSpacing: "-0.02em", lineHeight: 1,
    }}>{cs.initial}</div>
    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.65)", textAlign: "center" }}>
      {cs.industry}
    </div>
  </div>
);

const Tools = ({ items }: { items: string[] }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
    {items.slice(0, 4).map(t => (
      <span key={t} style={{
        fontSize: 10.5, padding: "3px 8px", borderRadius: 4,
        background: "rgba(124,58,237,0.18)", color: "#E9D5FF",
        border: "1px solid rgba(168,85,247,0.25)",
      }}>{t}</span>
    ))}
  </div>
);

const studies = CASE_STUDIES.filter(c => c.services.includes("software-automation"));

const cards: PortfolioCard[] = studies.map(cs => ({
  id: cs.slug,
  title: cs.shortTitle,
  description: cs.summary,
  category: cs.industry,
  tag: cs.outcome,
  tagColor: cs.color,
  thumbnail: <CaseThumb cs={cs} />,
  footer: <Tools items={cs.technologies} />,
  to: `/case-studies/${cs.slug}`,
}));

function Page() {
  return (
    <ServicePage
      title="Software Automation"
      oneLiner="Real case studies — AI inventory, ecommerce sync, voice automation and internal tools."
      cards={cards}
      featuredFirst
    />
  );
}
