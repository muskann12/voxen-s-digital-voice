import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/ui-ux-design")({
  component: Page,
  head: () => ({ meta: [{ title: "UI/UX Design — Voxen" }, { name: "description", content: "Product surfaces, design systems, prototypes." }] }),
});

const BASE_URL = "https://raw.githubusercontent.com/muskann12/portfloio-images/main/";
const imageUrl = (filename: string) => `${BASE_URL}${filename}`;

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
  <span className="svc-view-link">
    View Prototype <span className="svc-view-link__arrow">→</span>
  </span>
);

const cards: PortfolioCard[] = [
  { id: "m1", title: "Brew & Co. – Coffee Ordering App", description: "End-to-end mobile interface for a specialty coffee brand. Menu browsing, customization, fast checkout.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("uiux (10).png")} alt="Brew & Co. – Coffee Ordering App" />, footer: <ViewLink /> },
  { id: "m2", title: "Pizza House – Food Delivery App", description: "Hot, fresh pizza ordering experience with deals and favorites.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("uiux (11).png")} alt="Pizza House – Food Delivery App" />, footer: <ViewLink /> },
  { id: "m3", title: "Modern Restaurant – Reservation & Menu", description: "Dining app with fresh ingredients, reservations, and guest reviews.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("uiux (14).png")} alt="Modern Restaurant – Reservation & Menu" />, footer: <ViewLink /> },
  { id: "m4", title: "Crafted Pizza – Artisan Pizza Ordering", description: "Handcrafted pizza app with stone-baked options and loyalty offers.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("uiux (17).png")} alt="Crafted Pizza – Artisan Pizza Ordering" />, footer: <ViewLink /> },

  { id: "d1", title: "SmartGuard – Home Security Dashboard", description: "Real-time monitoring, device controls, and alert logs for homeowners.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("uiux (15).png")} alt="SmartGuard – Home Security Dashboard" />, footer: <ViewLink /> },
  { id: "d2", title: "HVAC Pro – Service Management Dashboard", description: "Heating and cooling solutions dashboard with service plans and technician tracking.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("uiux (1).png")} alt="HVAC Pro – Service Management Dashboard" />, footer: <ViewLink /> },
  { id: "d3", title: "ConstructCo – Construction Project Dashboard", description: "Project progress, team management, and safety metrics for construction firms.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("uiux (13).png")} alt="ConstructCo – Construction Project Dashboard" />, footer: <ViewLink /> },
  { id: "d4", title: "HealthFirst – Hospital Admin Dashboard", description: "Patient care metrics, department stats, and emergency services overview.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("uiux (12).png")} alt="HealthFirst – Hospital Admin Dashboard" />, footer: <ViewLink /> },

  { id: "ds1", title: "Digitra – Digital Agency Component Library", description: "Modular UI system with reusable components, service cards, and consistent typography.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("uiux (7).png")} alt="Digitra – Digital Agency Component Library" />, footer: <ViewLink /> },

  { id: "p1", title: "Lumiere – Fine Jewelry E‑commerce", description: "High-fidelity prototype for a luxury jewelry brand. Product discovery and seamless checkout.", category: "Prototypes", tag: "Prototype", tagColor: "#ec4899", thumbnail: <ImgThumb src={imageUrl("uiux (8).png")} alt="Lumiere – Fine Jewelry E‑commerce" />, footer: <ViewLink /> },
  { id: "p2", title: "Tea Rituals – Wellness Tea Brand", description: "E-commerce prototype for organic teas with AI tea matcher and wellness content.", category: "Prototypes", tag: "Prototype", tagColor: "#ec4899", thumbnail: <ImgThumb src={imageUrl("uiux (18).png")} alt="Tea Rituals – Wellness Tea Brand" />, footer: <ViewLink /> },
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
