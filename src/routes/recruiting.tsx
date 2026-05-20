import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/recruiting")({
  component: Page,
  head: () => ({ meta: [{ title: "Recruiting — Voxen" }, { name: "description", content: "Talent sourcing, placements, hiring solutions." }] }),
});

const Role = ({ role, industry }: { role: string; industry: string }) => (
  <div style={{ textAlign: "center", padding: 18 }}>
    <div style={{ fontSize: 11, letterSpacing: 2, color: "#C084FC", textTransform: "uppercase" }}>{industry}</div>
    <div style={{
      marginTop: 12, fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
      fontSize: 24, color: "#fff", lineHeight: 1.2,
    }}>{role}</div>
  </div>
);

const Hired = () => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "4px 10px", borderRadius: 999,
    background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.45)",
    color: "#86efac", fontSize: 11, letterSpacing: 1, textTransform: "uppercase",
  }}>Hired ✓</span>
);

const Footer = ({ loc, result }: { loc: string; result: string }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
    <span style={{ color: "rgba(233,213,255,0.55)" }}>{loc}</span>
    <span style={{ color: "#E9D5FF" }}>{result}</span>
  </div>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "Senior Full-Stack Engineer", description: "Hired for a Series A fintech rebuilding their core ledger.", tag: "Fintech", tagColor: "#06b6d4", thumbnail: <Role role="Senior Full-Stack Engineer" industry="Fintech" />, footer: <Footer loc="Dubai · Remote" result="Placed in 12 days" />, meta: <Hired /> },
  { id: "2", title: "Head of Design", description: "Design leader hired to scope and lead a design org of 8.", tag: "SaaS", tagColor: "#7C3AED", thumbnail: <Role role="Head of Design" industry="B2B SaaS" />, footer: <Footer loc="London · Hybrid" result="Placed in 21 days" />, meta: <Hired /> },
  { id: "3", title: "Performance Marketer", description: "Growth hire owning paid + lifecycle across 3 regions.", tag: "DTC", tagColor: "#ec4899", thumbnail: <Role role="Performance Marketer" industry="DTC Brand" />, footer: <Footer loc="Karachi · On-site" result="Placed in 9 days" />, meta: <Hired /> },
  { id: "4", title: "Staff Backend Engineer", description: "Distributed systems hire for a real-time analytics platform.", tag: "Data", tagColor: "#C084FC", thumbnail: <Role role="Staff Backend Engineer" industry="Data Platform" />, footer: <Footer loc="USA · Remote" result="Placed in 18 days" />, meta: <Hired /> },
  { id: "5", title: "Senior Product Designer", description: "Product design hire embedded in a growth-stage team.", tag: "Healthtech", tagColor: "#E8C07A", thumbnail: <Role role="Senior Product Designer" industry="Healthtech" />, footer: <Footer loc="UK · Remote" result="Placed in 14 days" />, meta: <Hired /> },
  { id: "6", title: "DevOps Engineer", description: "Platform hire to lead infra migration to multi-region.", tag: "Infra", tagColor: "#7C3AED", thumbnail: <Role role="DevOps Engineer" industry="SaaS Infra" />, footer: <Footer loc="Lahore · Hybrid" result="Placed in 11 days" />, meta: <Hired /> },
];

function Page() {
  return (
    <ServicePage
      title="Recruiting"
      oneLiner="Sourcing, vetting, and placing operators across engineering, design, and growth."
      cards={cards}
    />
  );
}
