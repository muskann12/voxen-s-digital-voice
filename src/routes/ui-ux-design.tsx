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

  // NEW MOBILE APPS
  { id: "mn1", title: "Burger House – Premium Burger App", description: "Mobile app for premium burger brand — seamless ordering, real-time tracking, and personalized offers.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("burger-house-app.png")} alt="Burger House – Premium Burger App" />, footer: <ViewLink /> },
  { id: "mn2", title: "Vitalix Fitness – Coaching Platform", description: "Fitness app with personalized workout plans, nutrition guidance, and progress tracking.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("vitalix-fitness.png")} alt="Vitalix Fitness – Coaching Platform" />, footer: <ViewLink /> },
  { id: "mn3", title: "Fizzio Soda Shop – Brand & Menu", description: "Soda shop app with drink customization, combo offers, and loyalty rewards.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("fizzio-soda-shop.png")} alt="Fizzio Soda Shop – Brand & Menu" />, footer: <ViewLink /> },
  { id: "mn4", title: "DriveX – Car Rental App", description: "Car rental platform with easy booking, wide vehicle selection, and 24/7 support.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("drivex-car-rental.png")} alt="DriveX – Car Rental App" />, footer: <ViewLink /> },
  { id: "mn5", title: "Travel Explorer – Tour & Packages", description: "Travel booking app with curated destinations, packages, and visa assistance.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("travel-explorer.png")} alt="Travel Explorer – Tour & Packages" />, footer: <ViewLink /> },
  { id: "mn6", title: "Playmate Toys – Toy Store App", description: "Toy store app with safe, educational toys for all ages — easy browsing and quick delivery.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("playmate-toys.png")} alt="Playmate Toys – Toy Store App" />, footer: <ViewLink /> },
  { id: "mn7", title: "Brew & Co. – Coffee Shop App", description: "Coffee ordering app with menu customization, loyalty rewards, and express pickup.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("brew-coffee-website.png")} alt="Brew & Co. – Coffee Shop App" />, footer: <ViewLink /> },
  { id: "mn9", title: "Burger House – Food Delivery Website", description: "Food delivery website with online ordering, real-time tracking, and exclusive offers.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("burger-house-website.png")} alt="Burger House – Food Delivery Website" />, footer: <ViewLink /> },
  { id: "mn10", title: "VOLT Energy Drink – Brand E-commerce", description: "Energy drink brand platform with product showcase, nutrition info, and subscription.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("volt-energy-drink.png")} alt="VOLT Energy Drink – Brand E-commerce" />, footer: <ViewLink /> },
  { id: "mn11", title: "Elevara – Smart Appliances Store", description: "Premium home appliances e-commerce platform with smart technology and energy efficiency.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("elevara-appliances.png")} alt="Elevara – Smart Appliances Store" />, footer: <ViewLink /> },
  { id: "mn12", title: "Mens Salon – Grooming Services", description: "Men's grooming salon app with service booking, stylist profiles, and appointment management.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("mens-salon-website.png")} alt="Mens Salon – Grooming Services" />, footer: <ViewLink /> },
  { id: "mn13", title: "Gardening Services – Landscape Design", description: "Professional gardening and landscaping services platform with project gallery and booking.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("gardening-website.png")} alt="Gardening Services – Landscape Design" />, footer: <ViewLink /> },
  { id: "mn14", title: "Dubai Insurance – Insurance Platform", description: "Insurance app prototype with health, life, motor, and travel coverage plans – quote to claim.", category: "Mobile Apps", tag: "Mobile", tagColor: "#C084FC", thumbnail: <ImgThumb src={imageUrl("dubai-insurance.png")} alt="Dubai Insurance – Insurance Platform" />, footer: <ViewLink /> },

  // NEW DASHBOARDS
  { id: "dn1", title: "Autonex – AI Automation Agency", description: "AI automation dashboard with workflow management, lead tracking, and analytics.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("autonex-ai-agency.png")} alt="Autonex – AI Automation Agency" />, footer: <ViewLink /> },
  { id: "dn2", title: "TubeBoost – YouTube Growth Platform", description: "YouTube channel analytics dashboard with views, subscribers, and growth insights.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("tubeboost-youtube.png")} alt="TubeBoost – YouTube Growth Platform" />, footer: <ViewLink /> },
  { id: "dn3", title: "Maven Marketing – Digital Agency", description: "Marketing agency dashboard with campaign management, analytics, and client reporting.", category: "Dashboards", tag: "Dashboard", tagColor: "#7C3AED", thumbnail: <ImgThumb src={imageUrl("maven-marketing-agency.png")} alt="Maven Marketing – Digital Agency" />, footer: <ViewLink /> },

  // NEW DESIGN SYSTEMS
  { id: "dsn2", title: "Lumiere – Fine Jewelry Brand", description: "Luxury jewelry brand design system with elegant typography, color palette, and product showcase.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("lumiere-jewelry.png")} alt="Lumiere – Fine Jewelry Brand" />, footer: <ViewLink /> },
  { id: "dsn3", title: "Crafted Pizza – Artisan Brand", description: "Artisan pizza brand design system with warm colors, handcrafted typography, and rustic elements.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("crafted-pizza-brand.png")} alt="Crafted Pizza – Artisan Brand" />, footer: <ViewLink /> },
  { id: "dsn5", title: "Modern Restaurant – Fine Dining Brand", description: "Fine dining restaurant brand system with elegant typography, sophisticated color palette, and menu design.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("modern-restaurant.png")} alt="Modern Restaurant – Fine Dining Brand" />, footer: <ViewLink /> },
  { id: "dsn6", title: "VisaPath – Global Visa Solutions", description: "Professional visa services platform design system with clean typography and trusted brand elements.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("visapath-visa-services.png")} alt="VisaPath – Global Visa Solutions" />, footer: <ViewLink /> },
  { id: "dsn7", title: "AuraSound – Wireless Earbuds Brand", description: "Complete brand identity for premium audio products — sleek packaging, product photography, and modern visual language.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("aurasound-branding.png")} alt="AuraSound – Wireless Earbuds Brand" />, footer: <ViewLink /> },
  { id: "dsn8", title: "Bamboo Cutting Board – Eco-Friendly Brand", description: "Sustainable kitchen product branding — natural, eco-friendly design with clean product photography and lifestyle imagery.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("bamboo-cutting-board.png")} alt="Bamboo Cutting Board – Eco-Friendly Brand" />, footer: <ViewLink /> },
  { id: "dsn9", title: "Botanica Naturals – Vitamin C Serum Brand", description: "Complete brand identity for a skincare product — logo, packaging, social media, and product listing design.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("botanica-branding.png")} alt="Botanica Naturals – Vitamin C Serum Brand" />, footer: <ViewLink /> },
  { id: "dsn10", title: "EverNaturals – Vitamin C Serum Brand", description: "Natural skincare brand with product packaging, visual identity, and clean, minimalist design with clinical aesthetic.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("evernaturals-branding.png")} alt="EverNaturals – Vitamin C Serum Brand" />, footer: <ViewLink /> },
  { id: "dsn11", title: "HydroPeak – Premium Water Bottle Brand", description: "Premium hydration brand identity — sleek product design, lifestyle photography, and modern visual language.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("hydropeak-branding.png")} alt="HydroPeak – Premium Water Bottle Brand" />, footer: <ViewLink /> },
  { id: "dsn12", title: "NaturElle Organics – Face Wash Brand", description: "Natural skincare brand identity with product packaging, clean labels, and organic visual aesthetic.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("naturelle-branding.png")} alt="NaturElle Organics – Face Wash Brand" />, footer: <ViewLink /> },
  { id: "dsn13", title: "Velora Homme – Premium Perfume Brand", description: "Luxury fragrance brand identity for men — product packaging, typography, and premium visual language.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("velora-branding.png")} alt="Velora Homme – Premium Perfume Brand" />, footer: <ViewLink /> },
  { id: "dsn14", title: "HomeEase – Smart Appliances Brand", description: "Complete brand identity for home appliances — logo, typography, color palette, packaging, social media, and website design. Making every home a better home.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("homeease-branding.png")} alt="HomeEase – Smart Appliances Brand" />, footer: <ViewLink /> },
  { id: "dsn15", title: "PawHub – Pet Store Brand", description: "Pet store brand identity with logo, packaging, social media, and website design — happy pets, happy hearts.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("pawhub-branding.png")} alt="PawHub – Pet Store Brand" />, footer: <ViewLink /> },
  { id: "dsn16", title: "Luxora – Skincare Brand", description: "Premium skincare brand with natural ingredients — logo, packaging, typography, and clean visual identity. Glow naturally, shine confidently.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("luxora-branding.png")} alt="Luxora – Skincare Brand" />, footer: <ViewLink /> },
  { id: "dsn17", title: "JoyLand – Toy Shop Brand", description: "Colorful toy store brand identity — logo, packaging, social media, and playful visual language. Play, learn, grow.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("joyland-branding.png")} alt="JoyLand – Toy Shop Brand" />, footer: <ViewLink /> },
  { id: "dsn18", title: "Brew&Bean – Coffee Brand", description: "Coffee shop brand identity — warm, inviting visual language with packaging, menu, and cafe aesthetics. Good coffee, good mood.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("brewbean-branding.png")} alt="Brew&Bean – Coffee Brand" />, footer: <ViewLink /> },
  { id: "dsn19", title: "Nexora – Performance Shoe Brand", description: "Athletic footwear brand identity — modern, bold design with product photography and lifestyle imagery. Move ahead. Stay ahead.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("nexora-branding.png")} alt="Nexora – Performance Shoe Brand" />, footer: <ViewLink /> },
  { id: "dsn20", title: "Burgero – Crafted Burger Brand", description: "Restaurant brand identity — bold, fresh visual language with menu, packaging, and social media designs. Crafted to perfection.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("burgero-branding.png")} alt="Burgero – Crafted Burger Brand" />, footer: <ViewLink /> },
  { id: "dsn21", title: "Raaya – Kitchen & Dining Brand", description: "Home kitchen brand identity — warm, inviting design with packaging, product shots, and visual storytelling. Flavors that feel like home.", category: "Design Systems", tag: "System", tagColor: "#E8C07A", thumbnail: <ImgThumb src={imageUrl("raaya-branding.png")} alt="Raaya – Kitchen & Dining Brand" />, footer: <ViewLink /> },

  // NEW PROTOTYPES
  { id: "pn1", title: "Bilal Mansoor – Interior Design Card", description: "Professional interior design business card prototype with contact details and company branding.", category: "Prototypes", tag: "Prototype", tagColor: "#ec4899", thumbnail: <ImgThumb src={imageUrl("bilal-interior-card.png")} alt="Bilal Mansoor – Interior Design Card" />, footer: <ViewLink /> },
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
