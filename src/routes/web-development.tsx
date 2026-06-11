import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/web-development")({
  component: Page,
  head: () => ({ meta: [{ title: "Web Development — Voxen" }, { name: "description", content: "Next.js, headless CMS, edge deploys." }] }),
});

const Browser = ({ accent }: { accent: string }) => (
  <div style={{
    width: "78%", aspectRatio: "16 / 10", borderRadius: 8,
    border: "1px solid rgba(168,85,247,0.3)", background: "#000000",
    overflow: "hidden", display: "flex", flexDirection: "column",
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 6, padding: "8px 12px",
      borderBottom: "1px solid rgba(168,85,247,0.2)", background: "rgba(22,14,40,0.6)",
    }}>
      {["#ff5f57", "#febc2e", "#28c840"].map(c => (
        <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, opacity: 0.7 }} />
      ))}
    </div>
    <div style={{ flex: 1, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ height: 6, width: "60%", background: accent, borderRadius: 3, opacity: 0.8 }} />
      <div style={{ height: 4, width: "85%", background: "rgba(233,213,255,0.18)", borderRadius: 2 }} />
      <div style={{ height: 4, width: "70%", background: "rgba(233,213,255,0.14)", borderRadius: 2 }} />
      <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, flex: 1 }}>
        {[0,1,2].map(i => <div key={i} style={{ background: "rgba(168,85,247,0.10)", borderRadius: 4 }} />)}
      </div>
    </div>
  </div>
);

const Stack = ({ items }: { items: string[] }) => (
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
  { id: "1", title: "Helix Landing", description: "High-conversion launch site with custom 3D hero and edge-rendered CMS.", category: "Landing Pages", tag: "Landing", tagColor: "#C084FC", thumbnail: <Browser accent="#C084FC" />, footer: <Stack items={["Next.js", "Tailwind", "Sanity"]} /> },
  { id: "2", title: "AnalytixHQ", description: "Multi-tenant SaaS dashboard with realtime data and role-based auth.", category: "SaaS", tag: "SaaS", tagColor: "#7C3AED", thumbnail: <Browser accent="#7C3AED" />, footer: <Stack items={["Next.js", "tRPC", "Supabase"]} /> },
  { id: "3", title: "NexaShop", description: "Headless storefront with multi-region pricing and visual merchandising.", category: "E-commerce", tag: "E-commerce", tagColor: "#ec4899", thumbnail: <Browser accent="#ec4899" />, footer: <Stack items={["Next.js", "Shopify", "Vercel"]} /> },
  { id: "4", title: "Atelier Corporate", description: "Editorial corporate site with multi-locale CMS and ISR-cached pages.", category: "Corporate", tag: "Corporate", tagColor: "#E8C07A", thumbnail: <Browser accent="#E8C07A" />, footer: <Stack items={["Astro", "Contentful", "Cloudflare"]} /> },
  { id: "5", title: "Drift DTC Shop", description: "Conversion-optimized storefront with custom bundle builder.", category: "E-commerce", tag: "E-commerce", tagColor: "#ec4899", thumbnail: <Browser accent="#ec4899" />, footer: <Stack items={["Next.js", "Medusa", "Stripe"]} /> },
  { id: "6", title: "PulseHR Marketing", description: "Modular marketing site with experiments and pricing calculator.", category: "Landing Pages", tag: "Landing", tagColor: "#C084FC", thumbnail: <Browser accent="#06b6d4" />, footer: <Stack items={["Next.js", "Tailwind", "PostHog"]} /> },
];

function Page() {
  return (
    <ServicePage
      title="Web Development"
      oneLiner="Production-grade websites engineered for performance, scale, and craft."
      filters={["All", "Landing Pages", "SaaS", "E-commerce", "Corporate"]}
      cards={cards}
    />
  );
}
