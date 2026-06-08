import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";
import uiux1 from "@/assets/uiux_1.png.asset.json";
import banner2 from "@/assets/banner_2.png.asset.json";
import banner4 from "@/assets/banner_4.png.asset.json";
import banner6 from "@/assets/banner_6.png.asset.json";

export const Route = createFileRoute("/ui-ux-design")({
  component: Page,
  head: () => ({ meta: [{ title: "UI/UX Design — Voxen" }, { name: "description", content: "Product surfaces, design systems, prototypes." }] }),
});

const ImgThumb = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    style={{
      width: "80%",
      aspectRatio: "4 / 3",
      objectFit: "cover",
      objectPosition: "top center",
      borderRadius: 8,
      border: "2px solid rgba(168,85,247,0.35)",
    }}
  />
);

const ViewLink = () => (
  <span style={{ color: "#C084FC" }}>View Prototype →</span>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "Brew & Co. – Coffee Ordering App", description: "End-to-end mobile interface for a specialty coffee brand. Menu browsing, customization, loyalty integration, and fast checkout flows.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={banner6.url} alt="Brew & Co. – Coffee Ordering App" />, footer: <ViewLink /> },
  { id: "2", title: "SmartGuard – Home Security Dashboard", description: "Real-time security monitoring dashboard with device controls, alert logs, and multi-property views. Designed for homeowners and renters.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={uiux1.url} alt="SmartGuard – Home Security Dashboard" />, footer: <ViewLink /> },
  { id: "3", title: "Digitra – Digital Agency Component Library", description: "Modular UI system for a modern digital agency. Reusable components, service cards, case study grids, and consistent typography scale.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={banner2.url} alt="Digitra – Digital Agency Component Library" />, footer: <ViewLink /> },
  { id: "4", title: "Lumiere – Fine Jewelry E‑commerce", description: "High-fidelity prototype for a luxury jewelry brand. Product discovery, collection navigation, and seamless checkout experience.", category: "Prototypes", tag: "Prototype", tagColor: "#ec4899", thumbnail: <ImgThumb src={banner4.url} alt="Lumiere – Fine Jewelry E‑commerce" />, footer: <ViewLink /> },
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
