import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/ui-ux-design")({
  component: Page,
  head: () => ({ meta: [{ title: "UI/UX Design — Voxen" }, { name: "description", content: "Product surfaces, design systems, prototypes." }] }),
});

const Phone = ({ accent }: { accent: string }) => (
  <div style={{
    width: 110, aspectRatio: "9 / 18", borderRadius: 18,
    border: "2px solid rgba(168,85,247,0.35)", background: "#0E0818",
    padding: 8, display: "flex", flexDirection: "column", gap: 6,
  }}>
    <div style={{ height: 6, background: accent, borderRadius: 3, opacity: 0.8 }} />
    <div style={{ height: 4, background: "rgba(233,213,255,0.18)", borderRadius: 2, width: "70%" }} />
    <div style={{ flex: 1, background: "rgba(168,85,247,0.08)", borderRadius: 6, marginTop: 4 }} />
    <div style={{ height: 18, background: "rgba(124,58,237,0.25)", borderRadius: 4 }} />
  </div>
);

const Desktop = ({ accent }: { accent: string }) => (
  <div style={{
    width: "70%", aspectRatio: "16 / 10", borderRadius: 8,
    border: "2px solid rgba(168,85,247,0.35)", background: "#0E0818",
    padding: 10, display: "grid", gridTemplateColumns: "70px 1fr", gap: 8,
  }}>
    <div style={{ background: "rgba(124,58,237,0.18)", borderRadius: 4 }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ height: 6, background: accent, borderRadius: 3, width: "50%", opacity: 0.85 }} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        <div style={{ background: "rgba(168,85,247,0.12)", borderRadius: 4 }} />
        <div style={{ background: "rgba(168,85,247,0.10)", borderRadius: 4 }} />
      </div>
    </div>
  </div>
);

const ViewLink = () => (
  <span style={{ color: "#C084FC" }}>View Prototype →</span>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "Brew & Co. – Coffee Ordering App", description: "End-to-end mobile interface for a specialty coffee brand. Menu browsing, customization, loyalty integration, and fast checkout flows.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <Phone accent="#C084FC" />, footer: <ViewLink /> },
  { id: "2", title: "SmartGuard – Home Security Dashboard", description: "Real-time security monitoring dashboard with device controls, alert logs, and multi-property views. Designed for homeowners and renters.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <Desktop accent="#7C3AED" />, footer: <ViewLink /> },
  { id: "3", title: "Digitra – Digital Agency Component Library", description: "Modular UI system for a modern digital agency. Reusable components, service cards, case study grids, and consistent typography scale.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <Desktop accent="#E8C07A" />, footer: <ViewLink /> },
  { id: "4", title: "Lumiere – Fine Jewelry E‑commerce", description: "High-fidelity prototype for a luxury jewelry brand. Product discovery, collection navigation, and seamless checkout experience.", category: "Prototypes", tag: "Prototype", tagColor: "#ec4899", thumbnail: <Phone accent="#ec4899" />, footer: <ViewLink /> },
];

function Page() {
  return (
    <ServicePage
      title="UI/UX Design"
      oneLiner="Interfaces with intention — product surfaces, design systems, and high-fidelity prototypes."
      filters={["All", "Mobile Apps", "Dashboards", "Design Systems", "Prototypes"]}
      cards={cards}
    />
  );
}
