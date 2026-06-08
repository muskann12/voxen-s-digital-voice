import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";
import proball from "@/assets/10008.webp.asset.json";
import babes from "@/assets/10010.webp.asset.json";
import gravity from "@/assets/10005.webp.asset.json";
import tandoori from "@/assets/10009.webp.asset.json";

export const Route = createFileRoute("/graphic-designing")({
  component: Page,
  head: () => ({ meta: [{ title: "Graphic Designing — Voxen" }, { name: "description", content: "Logos, branding, print, and social media visuals by Voxen." }] }),
});

const CATS = ["Logos", "Branding", "Print Design", "Social Media", "Banners"] as const;
const COLORS: Record<string, string> = {
  Logos: "#C084FC", Branding: "#E8C07A", "Print Design": "#7C3AED",
  "Social Media": "#06b6d4", Banners: "#ec4899",
};

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

const ImgThumb = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} loading="lazy" style={{
    width: "80%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 10,
    border: "1px solid rgba(168,85,247,0.35)",
  }} />
);

const cards: PortfolioCard[] = [
  // Banners
  { id: "b1", title: "New Collection Drop – Fashion Season", description: "Seasonal banner set for men's, women's, and accessories collection. Up to 60% off promotional creative.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="F" color={COLORS.Banners} /> },
  { id: "b2", title: "Smarter Workflow – AI Automation Suite", description: "Tech banner series for business automation, real estate, and travel packages. Clean corporate layout.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="AI" color={COLORS.Banners} /> },
  { id: "b3", title: "Smart Solar – Clean Energy Campaign", description: "Minimalist solar energy banner focused on cutting bills without cutting comfort.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="S" color={COLORS.Banners} /> },
  { id: "b4", title: "Back to School – Essentials Collection", description: "Bright, family-friendly banners for school supplies, college gear, and kids' learning products.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="B" color={COLORS.Banners} /> },
  { id: "b5", title: "Game On – Gaming Gear Series", description: "High-energy gaming peripherals banner with bold typography and action-driven copy.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="G" color={COLORS.Banners} /> },
  { id: "b6", title: "Jheelstreet Real Estate – Property Showcase", description: "Full real estate campaign with prime locations, investment highlights, and client trust metrics.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <Thumb label="J" color={COLORS.Banners} /> },

  // Social Media
  { id: "s1", title: "Proball Arena – Indoor Sports Campaign", description: "Social media graphics for padel and cricket arena. Court booking, night matches, and squad culture.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={proball.url} alt="Proball Arena social media" /> },
  { id: "s2", title: "Babes Hot Chicken – Late Night Cravings", description: "Bold, playful social posts for hot chicken brand. Family meal deals, happy hour, and weekend specials.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={babes.url} alt="Babes Hot Chicken social media" /> },
  { id: "s3", title: "Gravity Gym – 3 Months Transformation", description: "Fitness motivation carousel-style posts. Before/after messaging, Eid greeting, and strength training focus.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={gravity.url} alt="Gravity Gym social media" /> },
  { id: "s4", title: "Tandoori Kitchen – Authentic Flavors", description: "Warm-toned social creatives for Indian cuisine. Tandoori chicken, korma, and tikka masala highlights.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={tandoori.url} alt="Tandoori Kitchen social media" /> },

  // Print Design
  { id: "p1", title: "Bilal Mansoor – Interior Design Business Card", description: "Clean, professional business card layout with contact details, UAN, and company group branding.", category: "Print Design", tag: "Print", tagColor: COLORS["Print Design"], thumbnail: <Thumb label="BM" color={COLORS["Print Design"]} /> },
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
