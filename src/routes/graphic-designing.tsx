import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/graphic-designing")({
  component: Page,
  head: () => ({ meta: [{ title: "Graphic Designing — Voxen" }, { name: "description", content: "Logos, branding, print, and social media visuals by Voxen." }] }),
});

const BASE_URL = "https://raw.githubusercontent.com/muskann12/portfloio-images/main/";
const CATS = ["Logos", "Branding", "Print Design", "Social Media", "Banners"] as const;
const COLORS: Record<string, string> = {
  Logos: "#C084FC",
  Branding: "#E8C07A",
  "Print Design": "#7C3AED",
  "Social Media": "#06b6d4",
  Banners: "#ec4899",
};

const ImgThumb = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} loading="lazy" style={{
    width: "80%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 10,
    border: "1px solid rgba(168,85,247,0.35)",
  }} />
);

const imageUrl = (filename: string) => `${BASE_URL}${filename}`;

const cards: PortfolioCard[] = [
  { id: "b1", title: "New Collection Drop – Fashion Season", description: "Seasonal banner set for men's, women's, and accessories collection. Up to 60% off.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 1.png")} alt="New Collection Drop – Fashion Season" /> },
  { id: "b2", title: "Smarter Workflow – AI Automation Suite", description: "Tech banner series for business automation, real estate, and travel packages.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 2.png")} alt="Smarter Workflow – AI Automation Suite" /> },
  { id: "b3", title: "Smart Solar – Clean Energy Campaign", description: "Minimalist solar energy banner focused on cutting bills without cutting comfort.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 3.png")} alt="Smart Solar – Clean Energy Campaign" /> },
  { id: "b4", title: "Refresh Your Space – Modern Furniture", description: "Modern furniture collection with premium quality and fast delivery.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 4.png")} alt="Refresh Your Space – Modern Furniture" /> },
  { id: "b5", title: "Step Up – Premium Sneakers", description: "Sneaker banner highlighting comfort, style, and durability.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("baner 5.png")} alt="Step Up – Premium Sneakers" /> },
  { id: "b6", title: "New Drop – Lightweight Performance", description: "High-performance footwear with max cushion and lightweight feel.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 6.png")} alt="New Drop – Lightweight Performance" /> },
  { id: "b7", title: "Back to School – Smart Supplies", description: "School and college essentials for bright futures.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 7.png")} alt="Back to School – Smart Supplies" /> },
  { id: "b8", title: "Game On – Elite Gaming Gear", description: "Precision gaming gear designed to dominate.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 8.png")} alt="Game On – Elite Gaming Gear" /> },
  { id: "b9", title: "Jheelstreet Real Estate – Prime Locations", description: "Luxury homes and smart investments with trusted service.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 9.png")} alt="Jheelstreet Real Estate – Prime Locations" /> },

  { id: "s1", title: "Study Smarter – IELTS Bootcamp", description: "Intensive IELTS prep with proven score increase techniques.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10001.webp")} alt="Study Smarter – IELTS Bootcamp" /> },
  { id: "s2", title: "Gravity Gym – 3 Month Transformation", description: "Fitness motivation and strength training carousel posts.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10005.webp")} alt="Gravity Gym – 3 Month Transformation" /> },
  { id: "s3", title: "CodeBase – Start Coding Today", description: "Software development masterclass and coding bootcamp.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10003.webp")} alt="CodeBase – Start Coding Today" /> },
  { id: "s4", title: "Proball Arena – Two Sports One Arena", description: "Indoor cricket and padel arena with court booking.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10008.webp")} alt="Proball Arena – Two Sports One Arena" /> },
  { id: "s5", title: "Proball – Padel Match Culture", description: "Night matches and squad culture for padel players.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10009.webp")} alt="Proball – Padel Match Culture" /> },
  { id: "s6", title: "Proball – Padel Tips & Drills", description: "Quick tips and bold padel graphics for social media.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10010.webp")} alt="Proball – Padel Tips & Drills" /> },
  { id: "s7", title: "AngelGo Trips – Private Bus Charter", description: "Malaysia and Singapore tour packages with private transport.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10012.webp")} alt="AngelGo Trips – Private Bus Charter" /> },
  { id: "s8", title: "Tandoori Kitchen – Authentic Indian Flavors", description: "Tandoori chicken, korma, and tikka masala social creatives.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10013.webp")} alt="Tandoori Kitchen – Authentic Indian Flavors" /> },
  { id: "s9", title: "Babes Hot Chicken – Late Night Cravings", description: "Bold hot chicken posts with family meal deals and happy hour.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10014.webp")} alt="Babes Hot Chicken – Late Night Cravings" /> },
  { id: "s10", title: "Babes Hot Chicken – Weekend Special", description: "Hot chicken tenders, fries, and exclusive offers.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10015.webp")} alt="Babes Hot Chicken – Weekend Special" /> },
  { id: "s11", title: "11.11 Sale – Shopping Festival", description: "Limited time 40% off sale promo for November.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10016.webp")} alt="11.11 Sale – Shopping Festival" /> },
  { id: "s12", title: "Fresh Roasted Coffee – Cafe Specials", description: "Caramel latte special and free pastry offers.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10019.webp")} alt="Fresh Roasted Coffee – Cafe Specials" /> },
  { id: "s13", title: "Pet Grooming Services", description: "Professional grooming tips and pet care advice.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10020.webp")} alt="Pet Grooming Services" /> },
  { id: "s14", title: "Luxury Living – Real Estate Highlights", description: "Dream kitchen, waterfront masterpiece, sold alerts.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10021.webp")} alt="Luxury Living – Real Estate Highlights" /> },
  { id: "s15", title: "Gravity Gym – Price Table (placeholder)", description: "Gym membership plans and recharge packages.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10002.webp")} alt="Gravity Gym – Price Table (placeholder)" /> },

  { id: "p1", title: "Bilal Mansoor – Interior Design Business Card", description: "Professional business card with contact details and UAN.", category: "Print Design", tag: "Print", tagColor: COLORS["Print Design"], thumbnail: <ImgThumb src={imageUrl("uiux (16).png")} alt="Bilal Mansoor – Interior Design Business Card" /> },
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
