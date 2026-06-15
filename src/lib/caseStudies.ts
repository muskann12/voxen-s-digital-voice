export type Metric = { value: string; label: string };
export type Section = { heading: string; body?: string; bullets?: string[] };
export type WorkflowStep = { label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  industry: string;
  summary: string;
  outcome: string;
  color: string;
  initial: string;
  technologies: string[];
  services: string[]; // service slugs it belongs to
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
  };
  clientOverview: string;
  challenges: string[];
  goals: string[];
  solution: string;
  architecture: WorkflowStep[];
  secondaryFlow?: { title: string; steps: WorkflowStep[] };
  features: string[];
  stack: { group: string; items: string[] }[];
  results: Metric[];
  scalability?: string;
  roadmap?: string[];
  modules?: Section[];
  videoUrl?: string;
  showDemoForm?: boolean;
};


export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ai-inventory-fashion",
    shortTitle: "AI Inventory for Fashion Retailer",
    title: "AI-Powered Inventory Management for a Fashion Retailer",
    industry: "Fashion Retail & Ecommerce",
    summary: "AI vision platform that recognises folded clothing, matches it to a Shopify catalog of 1,000+ SKUs, and auto-syncs stock across physical and online stores.",
    outcome: "90% reduction in manual inventory work",
    color: "#C084FC",
    initial: "AI",
    technologies: ["Agent AI SDK", "Shopify APIs", "Computer Vision", "Cloud Infra"],
    services: ["software-automation"],
    hero: {
      eyebrow: "Case Study · Fashion Retail",
      headline: "AI vision that sees folded garments and syncs Shopify in real time.",
      sub: "Replacing spreadsheet-driven stock updates with a single photo upload — across 1,000+ SKUs and two sales channels.",
    },
    clientOverview:
      "The client operates both a physical retail store and a Shopify ecommerce store carrying roughly one thousand clothing SKUs. Inventory sync between the two channels was entirely manual, and as the catalog grew, stock management became increasingly painful and error-prone.",
    challenges: [
      "Manual inventory updates across two channels",
      "Frequent offline-to-online stock mismatches",
      "Large, fast-moving catalog with constant variants",
      "Human error in counts and SKU mapping",
      "Hours of repetitive inventory operations",
      "No path to scale beyond current store size",
    ],
    goals: [
      "Eliminate spreadsheet-based inventory updates",
      "Recognise products from a single photo — even folded",
      "Auto-match incoming products to Shopify variants",
      "Keep online and offline stock perfectly in sync",
      "Build a foundation that scales to multi-store",
    ],
    solution:
      "We built an AI-powered inventory automation platform on the Agent AI SDK. Staff simply upload a photo with size and quantity; the AI recognises the garment (even when folded), finds its match in the live Shopify catalog, and updates inventory automatically. No spreadsheets, no SKU lookups, no manual entry.",
    architecture: [
      { label: "Staff Uploads Photo + Size + Qty" },
      { label: "AI Vision Recognition" },
      { label: "Folded-Garment Detection" },
      { label: "Catalog Matching Engine" },
      { label: "Variant Resolution" },
      { label: "Shopify Inventory API" },
      { label: "Stock Synced Across Channels" },
    ],
    features: [
      "AI clothing recognition",
      "Folded-garment recognition",
      "Product matching engine",
      "Automated stock synchronization",
      "Shopify integration",
      "Variant recognition (size/colour)",
      "Bulk inventory processing",
      "Large catalog support (1,000+ SKUs)",
    ],
    stack: [
      { group: "AI", items: ["Agent AI SDK", "AI Product Matching System"] },
      { group: "Commerce", items: ["Shopify Admin API", "Shopify Webhooks"] },
      { group: "Backend", items: ["Inventory Automation Engine", "Cloud Processing Infra"] },
    ],
    results: [
      { value: "−90%", label: "Manual inventory work" },
      { value: "1,000+", label: "SKUs synced" },
      { value: "Real-time", label: "Stock accuracy" },
      { value: "0", label: "Channel mismatches" },
    ],
    scalability:
      "Designed for multi-store rollout — additional Shopify stores, warehouses and physical locations can be onboarded without re-training the vision pipeline.",
    roadmap: [
      "Multi-warehouse support",
      "Auto-restock triggers from sell-through data",
      "Vendor-side image ingestion",
      "Mobile-first staff app",
    ],
  },

  {
    slug: "product-scraping-sync",
    shortTitle: "Automated Product Scraping & Inventory Sync",
    title: "Automated Product Scraping & Inventory Sync System",
    industry: "Ecommerce Automation",
    summary: "Continuous scraping pipeline that imports thousands of supplier products with images, prices, currency conversion and margin rules — synced in real time to Shopify & WooCommerce.",
    outcome: "90% drop in manual catalog work",
    color: "#E8C07A",
    initial: "PS",
    technologies: ["Python", "Web Scraping", "Shopify", "WooCommerce", "VPS"],
    services: ["software-automation"],
    hero: {
      eyebrow: "Case Study · Ecommerce Automation",
      headline: "Thousands of supplier products, synced automatically — every hour.",
      sub: "From manual copy-paste to a continuous pipeline that watches supplier sites, converts currency, applies margins and pushes to the storefront.",
    },
    clientOverview:
      "The client runs a growing ecommerce business sourcing from multiple suppliers. Their team manually copied products from supplier websites into their store, and continually re-checked prices and stock — a workload that scaled directly with the catalog.",
    challenges: [
      "Thousands of products to maintain",
      "Manual product uploads from supplier sites",
      "Frequent supplier stock mismatches",
      "PKR ↔ GBP currency conversion friction",
      "Delayed inventory updates causing cancellations",
      "Operations did not scale with the catalog",
    ],
    goals: [
      "Eliminate manual product entry",
      "Keep supplier and store inventory aligned",
      "Apply currency + margin rules automatically",
      "Run 24/7 on dedicated infrastructure",
    ],
    solution:
      "We built a fully automated scraping and inventory synchronization platform. It continuously monitors supplier websites, ingests products with images, applies pricing rules (PKR→GBP + margin) and pushes the result into the client's Shopify and WooCommerce stores in near real-time.",
    architecture: [
      { label: "Supplier Websites" },
      { label: "Scraping Engine" },
      { label: "Processing Layer" },
      { label: "Validation Layer" },
      { label: "Inventory Engine" },
      { label: "Client Store (Shopify / Woo)" },
    ],
    features: [
      "Automated product scraping",
      "Inventory synchronization",
      "Supplier monitoring",
      "Automated pricing updates",
      "PKR → GBP conversion",
      "Margin automation",
      "Product categorisation",
      "Continuous synchronisation",
      "VPS-based 24/7 automation",
    ],
    stack: [
      { group: "Core", items: ["Python", "Web Scraping Frameworks"] },
      { group: "Pipeline", items: ["Data Processing Pipelines", "Validation Layer"] },
      { group: "Commerce", items: ["Shopify APIs", "WooCommerce APIs"] },
      { group: "Infra", items: ["VPS Infrastructure"] },
    ],
    results: [
      { value: "−90%", label: "Manual workload" },
      { value: "Real-time", label: "Sync latency" },
      { value: "↓ cancellations", label: "From stockouts" },
      { value: "Faster", label: "Catalog expansion" },
    ],
    scalability:
      "Each supplier is modelled as a pluggable scraper module — adding a new source is a config-and-template exercise, not a rewrite.",
    roadmap: [
      "AI-based product de-duplication",
      "Auto-generated SEO descriptions",
      "Per-supplier health dashboards",
      "Multi-region currency packs",
    ],
  },

  {
    slug: "wholesale-shopify-sync",
    shortTitle: "Wholesale Clothing Inventory & Shopify Sync",
    title: "Wholesale Clothing Inventory & Shopify Sync System",
    industry: "Wholesale Fashion & Ecommerce",
    summary: "End-to-end Next.js platform unifying showroom and online operations — variants, barcodes, scanning, analytics and bi-directional Shopify sync.",
    outcome: "Checkout from 45s → under 5s",
    color: "#7C3AED",
    initial: "WS",
    technologies: ["Next.js", "MongoDB Atlas", "Shopify API", "bwip-js", "Vercel"],
    services: ["software-automation"],
    hero: {
      eyebrow: "Case Study · Wholesale Fashion",
      headline: "One platform for the showroom, the warehouse and the storefront.",
      sub: "Replacing spreadsheets with variant-aware inventory, barcode workflows and bi-directional Shopify sync — built on Next.js + MongoDB Atlas.",
    },
    clientOverview:
      "The client operates a wholesale clothing business across a physical showroom and a Shopify storefront. Before our work, every inventory decision lived in spreadsheets — sales, barcodes, stock and reporting were disconnected.",
    challenges: [
      "Spreadsheet-based inventory management",
      "No barcode workflow",
      "Slow showroom checkout",
      "Recurring inventory mismatches",
      "No centralized reporting",
      "No unified dashboard",
      "No real-time synchronisation",
    ],
    goals: [
      "Build a single source of truth for inventory",
      "Make showroom checkout instant",
      "Sync stock, sales and products with Shopify both ways",
      "Give the owner real-time business insight",
    ],
    solution:
      "A full-stack web application built with Next.js, MongoDB Atlas, the Shopify Admin API, a barcode system (bwip-js + BarcodeDetector API) and an analytics dashboard. Products are variant-first; every variant gets an auto-generated SKU and barcode; sales reduce stock everywhere in real time.",
    architecture: [
      { label: "Showroom (Scanner / Mobile Camera)" },
      { label: "Next.js App + API Routes" },
      { label: "MongoDB Atlas — Single Source of Truth" },
      { label: "Shopify Admin API (Two-Way)" },
      { label: "Online Storefront" },
    ],
    secondaryFlow: {
      title: "Sales & Sync Loop",
      steps: [
        { label: "Scan Barcode" },
        { label: "Variant Lookup" },
        { label: "Negotiated Price (optional)" },
        { label: "Stock −1 in DB" },
        { label: "Shopify Inventory −1" },
        { label: "Sale Recorded → Dashboard" },
      ],
    },
    features: [
      "Variant-level product management (size / price / stock)",
      "Auto-generated SKU (e.g. SP-4500-S)",
      "CODE-128 barcodes via bwip-js — printable",
      "USB-scanner desktop checkout",
      "Mobile camera scanning (BarcodeDetector API)",
      "Negotiated pricing flow",
      "Bi-directional Shopify sync (products, variants, stock)",
      "Order webhooks → automatic stock deduction",
      "Returns with inventory restoration (system + Shopify)",
      "Revenue, profit, units & inventory dashboard",
      "JWT auth + protected routes",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS"] },
      { group: "Backend", items: ["Node.js", "Next.js API Routes"] },
      { group: "Database", items: ["MongoDB Atlas"] },
      { group: "Integrations", items: ["Shopify Admin API", "Shopify Webhooks"] },
      { group: "Barcode", items: ["bwip-js", "BarcodeDetector API"] },
      { group: "Hosting", items: ["Vercel"] },
    ],
    results: [
      { value: "−90%", label: "Manual inventory work" },
      { value: "45s → <5s", label: "Checkout time" },
      { value: "0", label: "Inventory mismatches" },
      { value: "Real-time", label: "Stock visibility" },
    ],
    scalability:
      "Variant-first schema and stateless API routes mean new locations, users and Shopify stores can be onboarded without re-architecting.",
    roadmap: [
      "CSV bulk imports",
      "Role-based permissions",
      "Advanced analytics (cohorts, sell-through)",
      "One-click product publishing",
    ],
    modules: [
      {
        heading: "Product Management",
        body: "Variant-first model. Each variant stores size, cost price, selling price, stock — profit margin is computed automatically.",
        bullets: ["Sizes: S / M / L", "Auto profit margin", "Variant-aware stock"],
      },
      {
        heading: "Barcode System",
        body: "Every variant gets a unique SKU and a CODE-128 barcode generated via bwip-js, ready to print directly from the dashboard.",
        bullets: ["Auto SKU (e.g. SP-4500-S)", "CODE-128 generation", "Printable sheets"],
      },
      {
        heading: "Scanning — Desktop & Mobile",
        body: "USB scanner support on desktop, BarcodeDetector camera scanning on mobile — both open the same popup sales flow with negotiated pricing.",
        bullets: ["Instant variant lookup", "Negotiation mode", "Real-time stock −1"],
      },
      {
        heading: "Shopify Sync",
        body: "Products & variants push to Shopify as drafts; order webhooks pull sales back. Stock stays consistent in both directions.",
        bullets: ["System → Shopify: products, variants, inventory", "Shopify → System: orders, stock, sales"],
      },
      {
        heading: "Dashboard Analytics",
        body: "Revenue, profit, units sold and remaining inventory — plus daily revenue and profit trends.",
      },
    ],
  },

  {
    slug: "ai-appointment-recovery",
    shortTitle: "AI Appointment Recovery & Voice Calling",
    title: "AI-Powered Appointment Recovery & Voice Calling System",
    industry: "Healthcare Automation",
    summary: "Outbound AI voice platform that recovers missed medical & dental appointments — human-like conversations, automated retries, full call logging and safety controls.",
    outcome: "Scalable patient outreach, recovered revenue",
    color: "#06b6d4",
    initial: "VX",
    technologies: ["OpenAI GPT", "ElevenLabs", "Python", "GSM Calling"],
    services: ["ai-chatbot-development", "software-automation"],
    hero: {
      eyebrow: "Case Study · Healthcare Automation",
      headline: "AI that calls patients back — and recovers the appointment.",
      sub: "Outbound voice campaigns with GPT-driven conversation, ElevenLabs voices, full logging, retries and a clinic-grade safety layer.",
    },
    clientOverview:
      "Medical and dental clinics consistently lose revenue to no-shows, cancellations and empty slots. The client needed an outbound system that could call patients automatically, hold a natural conversation in Urdu or English, capture the outcome and stay strictly inside a clinical script.",
    challenges: [
      "Missed appointments and lost revenue",
      "High cost of manual phone outreach",
      "Limited front-desk capacity",
      "Poor patient engagement on email/SMS",
      "No automation across clinic locations",
    ],
    goals: [
      "Automate outbound appointment recovery calls",
      "Sound human, in both English and Urdu",
      "Stay strictly on-script — no medical advice",
      "Log every call, outcome and intent",
      "Give staff a live monitoring + override dashboard",
    ],
    solution:
      "A fully automated AI voice calling platform. Campaigns are loaded from Google Sheets or the dashboard; the system dials patients, transcribes their speech, runs the response through a script-controlled GPT layer, and replies with an ElevenLabs voice. Every call is logged with full analytics.",
    architecture: [
      { label: "Patient Database" },
      { label: "Campaign Manager" },
      { label: "Outbound Calling Engine (GSM)" },
      { label: "Speech-to-Text" },
      { label: "GPT Processing (Script-Controlled)" },
      { label: "Conversation Logic" },
      { label: "Voice Generation (ElevenLabs)" },
      { label: "Patient Interaction" },
      { label: "Call Logging" },
      { label: "Analytics Dashboard" },
    ],
    secondaryFlow: {
      title: "AI Calling Workflow",
      steps: [
        { label: "Call Connects" },
        { label: "Voice Capture" },
        { label: "Speech-to-Text" },
        { label: "Intent Detection" },
        { label: "AI Decision Engine" },
        { label: "Response Generation" },
        { label: "Text-to-Speech" },
        { label: "Patient Response" },
      ],
    },
    features: [
      "AI outbound calling",
      "Human-like conversations (EN / Urdu)",
      "Appointment recovery campaigns",
      "Automated retry logic",
      "Full call logging & recording",
      "Live monitoring dashboard",
      "Campaign management",
      "Google Sheets integration",
      "Multi-language support (Urdu + English)",
      "Real-time monitoring",
      "Script-controlled responses — no medical advice",
      "Staff override + emergency stop",
      "Compliance controls",
    ],
    stack: [
      { group: "AI", items: ["OpenAI GPT", "ElevenLabs"] },
      { group: "Core", items: ["Python", "Conversation Logic Engine"] },
      { group: "Telephony", items: ["GSM Calling Infrastructure"] },
      { group: "Ops", items: ["Google Sheets", "Analytics Dashboard"] },
    ],
    results: [
      { value: "↓ outreach load", label: "On front-desk staff" },
      { value: "↑ recovery", label: "Of missed appointments" },
      { value: "↑ utilisation", label: "Of clinic schedule" },
      { value: "↓ cost", label: "Per patient contact" },
    ],
    scalability:
      "Stateless calling workers, queue-based campaign engine and per-clinic configuration mean new clinics — and entire clinic groups — can be onboarded without changing the core system.",
    roadmap: [
      "WhatsApp integration",
      "SMS automation fallback",
      "Two-way calendar booking",
      "Multi-clinic / group dashboard",
      "Advanced cohort analytics",
    ],
  },
  {
    slug: "ai-automation-suite",
    shortTitle: "Enterprise AI Automation Suite",
    title: "Enterprise AI Automation Suite – WhatsApp, Telegram, AI Task Assignment & Smart Invoicing",
    industry: "AI Automation Development",
    summary: "Unified platform automating WhatsApp/Telegram communication, AI-driven task assignment, Stripe invoicing, and real-time business intelligence.",
    outcome: "70% reduction in manual task assignment time",
    color: "#22D3EE",
    initial: "AS",
    technologies: ["Node.js", "React", "Python", "Stripe", "WhatsApp API", "Telegram API", "PostgreSQL", "Redis"],
    services: ["software-automation", "ai-chatbot-development"],
    videoUrl: "https://raw.githubusercontent.com/muskann12/portfloio-images/main/dashboard-preview.mp4",
    showDemoForm: true,
    hero: {
      eyebrow: "Case Study · AI Automation Development",
      headline: "WhatsApp, Telegram, AI task assignment & smart invoicing — one unified suite.",
      sub: "Automating communication, intelligently assigning tasks, and surfacing real-time business intelligence across an entire operation.",
    },
    clientOverview:
      "The client managed multiple teams using manual processes – task assignment by managers, invoice follow-ups via email, scattered client communication across WhatsApp/Telegram, and no visibility into employee workload. They needed a unified system that automates communication, intelligently assigns tasks, and provides real-time business intelligence.",
    challenges: [
      "Manual task assignment by managers",
      "Invoice follow-ups handled via email",
      "Scattered client communication across WhatsApp/Telegram",
      "No visibility into employee workload",
      "No unified system for operations",
    ],
    goals: [
      "Automate communication across channels",
      "Intelligently assign tasks based on workload & skills",
      "Automate invoicing and payment reminders",
      "Provide real-time business intelligence",
      "Centralize client and lead management",
    ],
    solution:
      "We built a unified AI automation suite covering messaging, task assignment, invoicing, lead scoring, and live business intelligence.",
    architecture: [
      { label: "Backend: Node.js + Python (AI models)" },
      { label: "Frontend: React + Tailwind" },
      { label: "Messaging: WhatsApp Business API, Telegram Bot API" },
      { label: "Payments: Stripe" },
      { label: "Database: PostgreSQL with vector memory" },
      { label: "Real-time: WebSockets + Redis" },
    ],
    features: [
      "WhatsApp & Telegram Integration – Invoices sent automatically via WhatsApp, task notifications to employees on Telegram, lead follow-up reminders, and two-way communication logging.",
      "AI Task Assignment – System automatically assigns tasks based on employee workload, skills, past performance, and availability. Zero manual intervention.",
      "Stripe Invoicing + Auto-Send – Invoices generated and sent automatically. Real-time payment status. Auto reminders for pending/overdue invoices via WhatsApp/Telegram.",
      "Client Management – Centralized client records with complete history. Any employee can view full client history.",
      "Leads Management with AI Score – Each lead gets AI score (0-100%) based on source, interaction, budget. High-score leads prioritized and assigned to best employee.",
      "Employee Monitoring & Task Load – Dashboard shows each employee's current tasks, monthly completed, availability score.",
      "Real-time Dashboard – 6 KPI cards (Active clients, MRR, open leads, pending invoices, active tasks, employees online). Revenue trend chart (6 months). Live alerts section.",
      "AI Client Memory – System remembers complete history of each client. AI suggests upsells.",
    ],
    stack: [
      { group: "Backend", items: ["Node.js", "Python"] },
      { group: "Frontend", items: ["React", "Tailwind"] },
      { group: "Messaging", items: ["WhatsApp Business API", "Telegram Bot API"] },
      { group: "Payments", items: ["Stripe"] },
      { group: "Database", items: ["PostgreSQL", "Vector memory"] },
      { group: "Real-time", items: ["WebSockets", "Redis"] },
    ],
    results: [
      { value: "−70%", label: "Manual task assignment time" },
      { value: "40%", label: "Faster invoice payments" },
      { value: "85%", label: "Leads followed up <5 min" },
      { value: "20%", label: "Better task distribution" },
      { value: "−30%", label: "Flight delay impact (logistics)" },
    ],
  },
];

export const FEATURED_SLUGS = [

  "wholesale-shopify-sync",

  "product-scraping-sync",
  "ai-appointment-recovery",
];

export const FEATURED_CASES = FEATURED_SLUGS
  .map(s => CASE_STUDIES.find(c => c.slug === s)!)
  .filter(Boolean);

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find(c => c.slug === slug);

export const getCaseStudiesForService = (serviceSlug: string) =>
  CASE_STUDIES.filter(c => c.services.includes(serviceSlug));
