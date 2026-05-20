export type ServiceDef = {
  slug: string;
  to: string;
  title: string;
  tagline: string;
  oneLiner: string;
};

export const SERVICES: ServiceDef[] = [
  {
    slug: "graphic-designing",
    to: "/graphic-designing",
    title: "Graphic Designing",
    tagline: "Logos, branding, print & social media visuals.",
    oneLiner: "Visual identities, marketing collateral, and social systems crafted with intent and polish.",
  },
  {
    slug: "video-editing",
    to: "/video-editing",
    title: "Video Editing",
    tagline: "Reels, ads, cinematic & long-form content.",
    oneLiner: "Story-led cuts, motion, and color — from punchy reels to cinematic brand films.",
  },
  {
    slug: "seo-growth",
    to: "/seo-growth",
    title: "SEO & Growth",
    tagline: "Technical SEO, content engines, analytics.",
    oneLiner: "Compounding visibility through technical SEO, content systems, and measurement.",
  },
  {
    slug: "web-development",
    to: "/web-development",
    title: "Web Development",
    tagline: "Next.js, headless CMS, edge deploys.",
    oneLiner: "Production-grade websites engineered for performance, scale, and craft.",
  },
  {
    slug: "ui-ux-design",
    to: "/ui-ux-design",
    title: "UI/UX Design",
    tagline: "Product surfaces, design systems, prototypes.",
    oneLiner: "Interfaces with intention — product surfaces, design systems, and high-fidelity prototypes.",
  },
  {
    slug: "recruiting",
    to: "/recruiting",
    title: "Recruiting",
    tagline: "Talent sourcing, placements, hiring solutions.",
    oneLiner: "Sourcing, vetting, and placing operators across engineering, design, and growth.",
  },
  {
    slug: "ai-chatbot-development",
    to: "/ai-chatbot-development",
    title: "AI Chatbot Development",
    tagline: "Custom bots, LLM integrations, automation.",
    oneLiner: "Custom LLM-powered assistants across web, WhatsApp, and internal tools.",
  },
  {
    slug: "software-automation",
    to: "/software-automation",
    title: "Software Automation",
    tagline: "AI workflows, integrations, internal tools.",
    oneLiner: "Automating busywork with custom workflows, integrations, and internal tools.",
  },
];
