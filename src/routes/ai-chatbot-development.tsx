import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/ai-chatbot-development")({
  component: Page,
  head: () => ({ meta: [{ title: "AI Chatbot Development — Voxen" }, { name: "description", content: "Custom bots, LLM integrations, automation." }] }),
});

const Bubble = ({ side, w, children }: { side: "l" | "r"; w: string; children: React.ReactNode }) => (
  <div style={{
    alignSelf: side === "l" ? "flex-start" : "flex-end",
    background: side === "l" ? "rgba(168,85,247,0.16)" : "linear-gradient(135deg, #7C3AED, #C084FC)",
    color: side === "l" ? "#E9D5FF" : "#fff",
    padding: "6px 12px", borderRadius: 12,
    fontSize: 11, maxWidth: w,
    border: side === "l" ? "1px solid rgba(168,85,247,0.25)" : "none",
  }}>{children}</div>
);

const Chat = ({ a, b, c }: { a: string; b: string; c: string }) => (
  <div style={{ width: "78%", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
    <Bubble side="l" w="85%">{a}</Bubble>
    <Bubble side="r" w="75%">{b}</Bubble>
    <Bubble side="l" w="80%">{c}</Bubble>
  </div>
);

const Platforms = ({ items }: { items: string[] }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
    {items.map(p => (
      <span key={p} style={{
        fontSize: 10.5, padding: "3px 8px", borderRadius: 4,
        background: "rgba(124,58,237,0.18)", color: "#E9D5FF",
        border: "1px solid rgba(168,85,247,0.25)",
      }}>{p}</span>
    ))}
  </div>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "Helix Support Bot", description: "Tier-1 support assistant handling 70% of inbound tickets with handoff.", category: "Customer Support", tag: "Support", tagColor: "#06b6d4", thumbnail: <Chat a="Hi, my card was declined." b="Let me check that for you." c="I can see the issue — fixed." />, footer: <Platforms items={["Website", "WhatsApp"]} /> },
  { id: "2", title: "Drift Lead Qualifier", description: "Conversational qualifier capturing budget, timeline, and intent.", category: "Lead Gen", tag: "Lead Gen", tagColor: "#C084FC", thumbnail: <Chat a="Looking for a quote." b="Happy to help — what's the budget?" c="Got it. Booking a call." />, footer: <Platforms items={["Website", "Messenger"]} /> },
  { id: "3", title: "Atlas Ops Copilot", description: "Internal Slack copilot answering ops questions from a private corpus.", category: "Internal Tools", tag: "Internal", tagColor: "#7C3AED", thumbnail: <Chat a="What's our refund SLA?" b="48 hours for verified orders." c="Where in the docs?" />, footer: <Platforms items={["Slack", "Notion"]} /> },
  { id: "4", title: "NexaShop Concierge", description: "Storefront product finder with cart actions and order lookup.", category: "E-commerce Bots", tag: "E-commerce", tagColor: "#ec4899", thumbnail: <Chat a="Show running shoes under $80." b="Here are 6 matches." c="Add the second one to my cart." />, footer: <Platforms items={["Website", "WhatsApp"]} /> },
  { id: "5", title: "PulseHR Onboarding Bot", description: "Guides new hires through paperwork, IT setup, and team intros.", category: "Internal Tools", tag: "Internal", tagColor: "#7C3AED", thumbnail: <Chat a="Welcome! Ready to start?" b="Yes, let's go." c="Step 1: upload your ID." />, footer: <Platforms items={["Slack", "Email"]} /> },
  { id: "6", title: "Halo Lead Magnet", description: "Quiz-style WhatsApp bot scoring leads for a skincare brand.", category: "Lead Gen", tag: "Lead Gen", tagColor: "#C084FC", thumbnail: <Chat a="What's your skin type?" b="Oily, sensitive." c="Here's your routine." />, footer: <Platforms items={["WhatsApp", "Telegram"]} /> },
];

function Page() {
  return (
    <ServicePage
      title="AI Chatbot Development"
      oneLiner="Custom LLM-powered assistants across web, WhatsApp, and internal tools."
      filters={["All", "Customer Support", "Lead Gen", "Internal Tools", "E-commerce Bots"]}
      cards={cards}
    />
  );
}
