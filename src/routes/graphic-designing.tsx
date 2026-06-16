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
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: 10,
    border: "1px solid rgba(168,85,247,0.35)",
  }} />
);

const imageUrl = (filename: string) => `${BASE_URL}${filename}`;

const cards: PortfolioCard[] = [
  // BANNERS
  { id: "b1", title: "New Collection Drop – Fashion Season", description: "Seasonal banner set for men's, women's, and accessories collection. Up to 60% off.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 1.png")} alt="New Collection Drop – Fashion Season" /> },
  { id: "b2", title: "Smarter Workflow – AI Automation Suite", description: "Tech banner series for business automation, real estate, and travel packages.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 2.png")} alt="Smarter Workflow – AI Automation Suite" /> },
  { id: "b3", title: "Smart Solar – Clean Energy Campaign", description: "Minimalist solar energy banner focused on cutting bills without cutting comfort.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 3.png")} alt="Smart Solar – Clean Energy Campaign" /> },
  { id: "b4", title: "Refresh Your Space – Modern Furniture", description: "Modern furniture collection with premium quality and fast delivery.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 4.png")} alt="Refresh Your Space – Modern Furniture" /> },
  { id: "b5", title: "Step Up – Premium Sneakers", description: "Sneaker banner highlighting comfort, style, and durability.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("baner 5.png")} alt="Step Up – Premium Sneakers" /> },
  { id: "b6", title: "New Drop – Lightweight Performance", description: "High-performance footwear with max cushion and lightweight feel.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 6.png")} alt="New Drop – Lightweight Performance" /> },
  { id: "b7", title: "Back to School – Smart Supplies", description: "School and college essentials for bright futures.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 7.png")} alt="Back to School – Smart Supplies" /> },
  { id: "b8", title: "Game On – Elite Gaming Gear", description: "Precision gaming gear designed to dominate.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 8.png")} alt="Game On – Elite Gaming Gear" /> },
  { id: "b9", title: "Jheelstreet Real Estate – Prime Locations", description: "Luxury homes and smart investments with trusted service.", category: "Banners", tag: "Banner", tagColor: COLORS.Banners, thumbnail: <ImgThumb src={imageUrl("banner 9.png")} alt="Jheelstreet Real Estate – Prime Locations" /> },

  // EXISTING SOCIAL MEDIA
  { id: "s1", title: "Study Smarter – IELTS Bootcamp", description: "Intensive IELTS prep with proven score increase techniques.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10001.webp")} alt="Study Smarter – IELTS Bootcamp" /> },
  { id: "s2", title: "Gravity Gym – 3 Month Transformation", description: "Fitness motivation and strength training carousel posts.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10005.webp")} alt="Gravity Gym – 3 Month Transformation" /> },
  { id: "s3", title: "CodeBase – Start Coding Today", description: "Software development masterclass and coding bootcamp.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10003.webp")} alt="CodeBase – Start Coding Today" /> },
  { id: "s4", title: "Proball Arena – Two Sports One Arena", description: "Indoor cricket and padel arena with court booking.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10008.webp")} alt="Proball Arena – Two Sports One Arena" /> },
  { id: "s5", title: "Proball – Padel Match Culture", description: "Night matches and squad culture for padel players.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10009.webp")} alt="Proball – Padel Match Culture" /> },
  { id: "s6", title: "Proball – Padel Tips & Drills", description: "Quick tips and bold padel graphics for social media.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10010.webp")} alt="Proball – Padel Tips & Drills" /> },
  { id: "s7", title: "AngelGo Trips – Private Bus Charter", description: "Malaysia and Singapore tour packages with private transport.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10012.webp")} alt="AngelGo Trips – Private Bus Charter" /> },
  { id: "s10", title: "Babes Hot Chicken – Weekend Special", description: "Hot chicken tenders, fries, and exclusive offers.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10015.webp")} alt="Babes Hot Chicken – Weekend Special" /> },
  { id: "s11", title: "11.11 Sale – Shopping Festival", description: "Limited time 40% off sale promo for November.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10016.webp")} alt="11.11 Sale – Shopping Festival" /> },
  { id: "s12", title: "Fresh Roasted Coffee – Cafe Specials", description: "Caramel latte special and free pastry offers.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10019.webp")} alt="Fresh Roasted Coffee – Cafe Specials" /> },
  { id: "s13", title: "Pet Grooming Services", description: "Professional grooming tips and pet care advice.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10020.webp")} alt="Pet Grooming Services" /> },
  { id: "s14", title: "Luxury Living – Real Estate Highlights", description: "Dream kitchen, waterfront masterpiece, sold alerts.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10021.webp")} alt="Luxury Living – Real Estate Highlights" /> },
  { id: "s15", title: "Gravity Gym – Price Table (placeholder)", description: "Gym membership plans and recharge packages.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("10002.webp")} alt="Gravity Gym – Price Table (placeholder)" /> },

  // NEW SOCIAL MEDIA
  { id: "n1", title: "NoorElan – Premium Shalwar Kameez", description: "Elegant men's wear with fine fabrics, expert stitching, and modern designs.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("noorelan.png")} alt="NoorElan – Premium Shalwar Kameez" /> },
  { id: "n2", title: "Brew Haven – Coffee Shop", description: "Cozy coffee shop with quality beans, perfect blends, and a warm ambiance.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("brew-haven.png")} alt="Brew Haven – Coffee Shop" /> },
  { id: "n3", title: "Frosty Scoops – Ice Cream Parlour", description: "Mouthwatering ice cream flavors that melt hearts – perfect for every mood.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("frosty-scoops.png")} alt="Frosty Scoops – Ice Cream Parlour" /> },
  { id: "n4", title: "Soda Blast – Cool Drinks", description: "Refreshing sodas with bursting flavors – the perfect chill for hot days.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("soda-blast.png")} alt="Soda Blast – Cool Drinks" /> },
  { id: "n5", title: "Pizza Hut – Authentic Italian Pizza", description: "Hot, fresh pizza made with love – premium ingredients and oven-baked goodness.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("pizza-hut.png")} alt="Pizza Hut – Authentic Italian Pizza" /> },
  { id: "n6", title: "HomeCraft – Beautiful Furniture", description: "Transform your space with elegant furniture – style, comfort, and quality.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("homecraft.png")} alt="HomeCraft – Beautiful Furniture" /> },
  { id: "n7", title: "GearUp – Tech Accessories", description: "Premium mobile cases, chargers, and earphones – gear up your devices.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("gearup.png")} alt="GearUp – Tech Accessories" /> },
  { id: "n8", title: "Timeless Diamonds – Fine Jewelry", description: "Exquisite diamond jewelry for every occasion – elegance that lasts forever.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("timeless-diamonds.png")} alt="Timeless Diamonds – Fine Jewelry" /> },
  { id: "n9", title: "Street Bites – Indian Street Food", description: "Authentic street food flavors – fresh, spicy, and absolutely delicious.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("street-bites.png")} alt="Street Bites – Indian Street Food" /> },
  { id: "n10", title: "Learnova – Online Academy", description: "Master new skills with premium courses – programming, design, AI, and more.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("learnova.png")} alt="Learnova – Online Academy" /> },
  { id: "n11", title: "We Fix – Appliance Repair", description: "Expert repair services for AC, fridge, washing machine, and TV – fast & reliable.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("we-fix.png")} alt="We Fix – Appliance Repair" /> },
  { id: "n12", title: "Print Your Vision – Branding & Packaging", description: "Quality printing and packaging solutions that make your brand stand out.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("print-vision.png")} alt="Print Your Vision – Branding & Packaging" /> },
  { id: "n13", title: "Fresh Juice Bar – Real Fruit, Real Fresh", description: "Healthy fruit juices and detox blends – good juice, good mood.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("fresh-juice.png")} alt="Fresh Juice Bar – Real Fruit, Real Fresh" /> },
  { id: "n14", title: "Scoops – Ice Cream Happiness", description: "Flavors that make you smile – sundaes, scoops, and sweetness.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("scoops.png")} alt="Scoops – Ice Cream Happiness" /> },
  { id: "n15", title: "Fitness Journey – Discipline Beats Motivation", description: "Transform your body with personalized training, nutrition, and coaching.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("fitness-journey.png")} alt="Fitness Journey – Discipline Beats Motivation" /> },
  { id: "n16", title: "GreenBasket – Fresh Grocery Store", description: "Organic, fresh, and healthy – all your daily needs delivered to your door.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("greenbasket.png")} alt="GreenBasket – Fresh Grocery Store" /> },
  { id: "n17", title: "PakWheels – Premium Motors", description: "Pakistan's most trusted car showroom – drive your pride with luxury & confidence.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("pakwheels.png")} alt="PakWheels – Premium Motors" /> },
  { id: "n18", title: "DriveX – Luxury Car Showroom", description: "Experience luxury and performance – book a test drive today.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("drivex.png")} alt="DriveX – Luxury Car Showroom" /> },
  { id: "n19", title: "Technova – Laptop Store", description: "Top brands, best prices, expert support – find your perfect laptop.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("technova.png")} alt="Technova – Laptop Store" /> },
  { id: "n20", title: "Glow & Grace – Women's Salon", description: "Celebrate your beauty with hair, skin, makeup, and bridal services.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("glow-grace.png")} alt="Glow & Grace – Women's Salon" /> },
  { id: "n21", title: "Sharp Cuts – Men's Salon", description: "Precision haircuts, beard trims, and grooming – look sharp, feel better.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("sharp-cuts.png")} alt="Sharp Cuts – Men's Salon" /> },
  { id: "n22", title: "Urban Cuts – Men's Grooming", description: "Modern haircuts, beard styling, and hair spa – good hair, good feel.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("urban-cuts.png")} alt="Urban Cuts – Men's Grooming" /> },
  { id: "n23", title: "Gaming Zone – Elite Gaming Arena", description: "High-end PCs, consoles, and immersive setups – level up your game.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("gaming-zone.png")} alt="Gaming Zone – Elite Gaming Arena" /> },
  { id: "n24", title: "Flavoria – Fine Dining Restaurant", description: "Deliciously crafted dishes with fresh ingredients – taste, savor, repeat.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("flavoria.png")} alt="Flavoria – Fine Dining Restaurant" /> },
  { id: "n25", title: "Aurora Coffee Co. – Premium Coffee", description: "Small-batch roasted coffee – made with intention, brewed for you.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("aurora-coffee.png")} alt="Aurora Coffee Co. – Premium Coffee" /> },
  { id: "n26", title: "Brew Haus – Fresh Coffee", description: "Sourced ethically, roasted perfectly, brewed for you – fuel your day.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("brew-haus.png")} alt="Brew Haus – Fresh Coffee" /> },
  { id: "n27", title: "Pizzaro – Real Pizza, Real Love", description: "Fresh ingredients, oven-baked, delivered hot – pizza that hits different.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("pizzaro.png")} alt="Pizzaro – Real Pizza, Real Love" /> },
  { id: "n28", title: "GreenHome – Smart Appliances", description: "Smart, energy-efficient appliances for a better, smarter home.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("greenhome.png")} alt="GreenHome – Smart Appliances" /> },
  { id: "n29", title: "Eventique – Event Management", description: "From corporate events to weddings – we create moments that matter.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("eventique.png")} alt="Eventique – Event Management" /> },
  { id: "n30", title: "Visa Experts – Hassle-Free Visa Solutions", description: "Expert guidance for tourist, study, work, and business visas worldwide.", category: "Social Media", tag: "Social", tagColor: COLORS["Social Media"], thumbnail: <ImgThumb src={imageUrl("visa-experts.png")} alt="Visa Experts – Hassle-Free Visa Solutions" /> },
];

function Page() {
  return (
    <ServicePage
      title="Graphic Designing"
      oneLiner="Visual identities, marketing collateral, and social systems crafted with intent and polish."
      filters={["All", ...CATS]}
      cards={cards}
      showCategoryPopup={true}
    />
  );
}