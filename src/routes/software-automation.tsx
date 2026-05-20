import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/software-automation")({
  component: Page,
  head: () => ({ meta: [{ title: "Software Automation — Voxen" }, { name: "description", content: "AI workflows, integrations, internal tools." }] }),
});

const Time = ({ value, label }: { value: string; label: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{
      fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
      fontSize: 52, color: "#E8C07A", letterSpacing: "-0.02em", lineHeight: 1,
    }}>{value}</div>
    <div style={{ marginTop: 8, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.5)" }}>{label}</div>
  </div>
);

const Tools = ({ items }: { items: string[] }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
    {items.map(t => (
      <span key={t} style={{
        fontSize: 10.5, padding: "3px 8px", borderRadius: 4,
        background: "rgba(124,58,237,0.18)", color: "#E9D5FF",
        border: "1px solid rgba(168,85,247,0.25)",
      }}>{t}</span>
    ))}
  </div>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "PulseHR Lead Router", description: "Auto-routes inbound leads to AEs by region and ICP score.", category: "CRM Automation", tag: "CRM", tagColor: "#C084FC", thumbnail: <Time value="40 hrs/wk" label="Time Saved" />, footer: <Tools items={["Zapier", "HubSpot", "Slack"]} /> },
  { id: "2", title: "NexaShop Order Pipeline", description: "Nightly ETL from 4 sources into a unified order warehouse.", category: "Data Pipelines", tag: "Data", tagColor: "#7C3AED", thumbnail: <Time value="22 hrs/wk" label="Time Saved" />, footer: <Tools items={["Python", "Airflow", "BigQuery"]} /> },
  { id: "3", title: "Atlas Listings Sync", description: "Two-way sync of property data across CMS, MLS, and CRM.", category: "API Integrations", tag: "API", tagColor: "#06b6d4", thumbnail: <Time value="35 hrs/wk" label="Time Saved" />, footer: <Tools items={["Make", "Node.js", "Webhooks"]} /> },
  { id: "4", title: "Helix Compliance Tool", description: "Internal dashboard generating audit-ready reports on demand.", category: "Internal Tools", tag: "Internal", tagColor: "#E8C07A", thumbnail: <Time value="60 hrs/mo" label="Time Saved" />, footer: <Tools items={["Retool", "Postgres", "Python"]} /> },
  { id: "5", title: "Drift Reorder Bot", description: "Predictive reorder triggers based on stock and velocity signals.", category: "CRM Automation", tag: "CRM", tagColor: "#C084FC", thumbnail: <Time value="18 hrs/wk" label="Time Saved" />, footer: <Tools items={["n8n", "Shopify", "Klaviyo"]} /> },
  { id: "6", title: "Lumen Reporting Engine", description: "Auto-generates weekly client reports with charts and commentary.", category: "Internal Tools", tag: "Internal", tagColor: "#E8C07A", thumbnail: <Time value="12 hrs/wk" label="Time Saved" />, footer: <Tools items={["Python", "OpenAI", "Notion"]} /> },
];

function Page() {
  return (
    <ServicePage
      title="Software Automation"
      oneLiner="Automating busywork with custom workflows, integrations, and internal tools."
      filters={["All", "CRM Automation", "Data Pipelines", "API Integrations", "Internal Tools"]}
      cards={cards}
    />
  );
}
