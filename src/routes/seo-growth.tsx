import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/seo-growth")({
  component: Page,
  head: () => ({ meta: [{ title: "SEO & Growth — Voxen" }, { name: "description", content: "Technical SEO, content engines, analytics." }] }),
});

const Metric = ({ value, label }: { value: string; label: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{
      fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
      fontSize: 52, color: "#C084FC", letterSpacing: "-0.02em", lineHeight: 1,
    }}>{value}</div>
    <div style={{ marginTop: 8, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(233,213,255,0.5)" }}>{label}</div>
  </div>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "NexaShop", description: "Rebuilt taxonomy, programmatic landing pages, and Core Web Vitals overhaul over 6 months.", tag: "E-commerce", tagColor: "#C084FC", thumbnail: <Metric value="+340%" label="Organic Traffic" />, footer: "6 months · UAE" },
  { id: "2", title: "ClearPay", description: "B2B fintech content engine and link-building across regional finance publications.", tag: "Fintech", tagColor: "#06b6d4", thumbnail: <Metric value="+212%" label="Qualified Leads" />, footer: "9 months · UK" },
  { id: "3", title: "PulseHR", description: "Topical authority build-out targeting HR ops keywords with internal linking system.", tag: "SaaS", tagColor: "#7C3AED", thumbnail: <Metric value="#1" label="Target Keyword" />, footer: "4 months · USA" },
  { id: "4", title: "Atlas Real Estate", description: "Local SEO and schema rebuild for 120-property portfolio across 6 cities.", tag: "Real Estate", tagColor: "#E8C07A", thumbnail: <Metric value="+5x" label="Enquiries" />, footer: "5 months · Pakistan" },
  { id: "5", title: "Halo Beauty", description: "DTC content + influencer SEO program, hitting top-3 for category terms.", tag: "DTC", tagColor: "#ec4899", thumbnail: <Metric value="+180%" label="Revenue / Organic" />, footer: "7 months · USA" },
  { id: "6", title: "Lumen Studio", description: "Editorial SEO program for a design agency — case study and insights hubs.", tag: "Agency", tagColor: "#C084FC", thumbnail: <Metric value="+96%" label="MQLs" />, footer: "8 months · UK" },
];

function Page() {
  return (
    <ServicePage
      title="SEO & Growth"
      oneLiner="Compounding visibility through technical SEO, content systems, and measurement."
      cards={cards}
    />
  );
}
