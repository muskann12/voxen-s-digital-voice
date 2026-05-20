import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type PortfolioCard } from "@/components/ServicePage";

export const Route = createFileRoute("/video-editing")({
  component: Page,
  head: () => ({ meta: [{ title: "Video Editing — Voxen" }, { name: "description", content: "Reels, ads, cinematic, and long-form video editing." }] }),
});

const Play = () => (
  <div style={{
    width: 64, height: 64, borderRadius: "50%",
    background: "rgba(192,132,252,0.15)", border: "1px solid rgba(192,132,252,0.45)",
    display: "flex", alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(8px)",
  }}>
    <div style={{
      width: 0, height: 0, marginLeft: 6,
      borderTop: "12px solid transparent", borderBottom: "12px solid transparent",
      borderLeft: "18px solid #C084FC",
    }} />
  </div>
);

const cards: PortfolioCard[] = [
  { id: "1", title: "Helix — Brand Film", description: "Cinematic anthem film for a Series B fintech launch.", category: "Cinematic", tag: "Cinematic", tagColor: "#E8C07A", thumbnail: <Play />, meta: "2:34" },
  { id: "2", title: "Drift Reels Pack", description: "12-pack of vertical reels for a lifestyle brand's monthly drop.", category: "Reels", tag: "Reels", tagColor: "#ec4899", thumbnail: <Play />, meta: "0:18" },
  { id: "3", title: "Nimbus Performance Ad", description: "Hook-driven 30s paid social ad cut for cold traffic.", category: "Ads", tag: "Ad", tagColor: "#06b6d4", thumbnail: <Play />, meta: "0:30" },
  { id: "4", title: "Founders Podcast Ep. 14", description: "Long-form interview edit with chapters, captions, and B-roll.", category: "Long Form", tag: "Long Form", tagColor: "#7C3AED", thumbnail: <Play />, meta: "42:10" },
  { id: "5", title: "Atlas Product Demo", description: "Screen-recorded product walkthrough with motion overlays.", category: "Ads", tag: "Ad", tagColor: "#06b6d4", thumbnail: <Play />, meta: "1:12" },
  { id: "6", title: "Voxen Studio Reel", description: "Annual showreel — color graded and sound designed in-house.", category: "Cinematic", tag: "Cinematic", tagColor: "#E8C07A", thumbnail: <Play />, meta: "1:48" },
];

function Page() {
  return (
    <ServicePage
      title="Video Editing"
      oneLiner="Story-led cuts, motion, and color — from punchy reels to cinematic brand films."
      filters={["All", "Reels", "Ads", "Long Form", "Cinematic"]}
      cards={cards}
      featuredFirst
    />
  );
}
