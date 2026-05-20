import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/graphic-designing")({
  component: Page,
  head: () => ({ meta: [{ title: "Graphic Designing — Voxen" }, { name: "description", content: "Logos, branding, print, and social media visuals by Voxen." }] }),
});

const Thumb = ({ label, color }: { label: string; color: string }) => (
  <div style={{
    width: "70%", aspectRatio: "4 / 3", borderRadius: 10,
    background: `linear-gradient(135deg, ${color}33, ${color}11)`,
    border: `1px solid ${color}55`,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "'DM Serif Display', serif", fontStyle: "italic",
    fontSize: 38, color: color, letterSpacing: "-0.02em",
  }}>{label}</div>
);

const CATS = ["Logos", "Branding", "Print Design", "Social Media", "Banners"] as const;
const COLORS: Record<string, string> = {
  Logos: "#C084FC", Branding: "#E8C07A", "Print Design": "#7C3AED",
  "Social Media": "#06b6d4", Banners: "#ec4899",
};

const cards: PortfolioCard[] = [
  { id: "1", title: "Northwind Coffee", description: "Wordmark, monogram, and packaging system for a specialty roaster.", category: "Logos", tag: "Logo", tagColor: COLORS.Logos, thumbnail: <Thumb label="N" color={COLORS.Logos} /> },
  { id: "2", title: "Lumen Studio Identity", description: "Full brand system: marks, type, color, and editorial templates.", category: "Branding", tag: "Branding", tagColor: COLORS.Branding, thumbnail: <Thumb label="L" color={COLORS.Branding} /> },
  { id: "3", title: "Atelier Print Suite", description: "Annual report, posters, and stationery for an architecture studio.", category: "Print Design", tag: "Print", tagColor: COLORS["Print Design"], thumbnail: <Thumb label="A" color={COLORS["Print Design"]} /> },
  { id: "4", title: "Rivet IG Carousel Pack", description: "30-slide modular social system for a B2B SaaS launch month.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <Thumb label="R" color={COLORS["Social Media"]} /> },
  { id: "5", title: "Festival Hero Banners", description: "Multi-format programmatic display banners for a regional festival.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="F" color={COLORS.Banners} /> },
  { id: "6", title: "Halo Beauty Rebrand", description: "From logo to packaging — a full visual reset for a DTC brand.", category: "Branding", tag: "Branding", tagColor: COLORS.Branding, thumbnail: <Thumb label="H" color={COLORS.Branding} /> },
];

function Page() {
  return (
    <ServicePage
      title="Graphic Designing"
      oneLiner="Visual identities, marketing collateral, and social systems crafted with intent and polish."
      filters={["All", ...CATS]}
      cards={cards}
    />
  );
}
