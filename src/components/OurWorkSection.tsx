import { useState } from "react";

type VideoCard = {
  id: string;
  category: "reels" | "ads" | "longform" | "cinematic";
  title: string;
  desc: string;
  duration: string;
  youtubeId: string;
  featured?: boolean;
};

type DesignCard = {
  id: string;
  category: "logo" | "branding" | "social" | "print" | "banners";
  title: string;
  desc: string;
  emoji: string;
  gradient: string;
};

const VIDEOS: VideoCard[] = [
  { id: "v1", category: "reels", title: "Brand Promo Reel", desc: "High-energy social reel cut for maximum retention.", duration: "2:34", youtubeId: "VIDEO_ID_HERE", featured: true },
  { id: "v2", category: "ads", title: "Product Ad — 30 Sec Cut", desc: "Punchy product spot built for paid placements.", duration: "1:10", youtubeId: "VIDEO_ID_HERE" },
  { id: "v3", category: "cinematic", title: "Cinematic Wedding Highlight", desc: "Filmic edit with custom color grading.", duration: "5:22", youtubeId: "VIDEO_ID_HERE" },
  { id: "v4", category: "longform", title: "Corporate Documentary", desc: "Long-form narrative piece with motion graphics.", duration: "8:45", youtubeId: "VIDEO_ID_HERE" },
  { id: "v5", category: "reels", title: "Instagram Reel — Fashion Brand", desc: "Trend-driven reel with rhythmic cuts.", duration: "0:58", youtubeId: "VIDEO_ID_HERE" },
  { id: "v6", category: "ads", title: "Food Brand TVC", desc: "Appetite-appeal commercial with macro shots.", duration: "1:30", youtubeId: "VIDEO_ID_HERE" },
];

const DESIGNS: DesignCard[] = [
  { id: "d1", category: "logo", title: "Brand Logo — Tech Startup", desc: "Minimal wordmark with icon variant", emoji: "🔤", gradient: "linear-gradient(135deg,#7C3AED,#160E28)" },
  { id: "d2", category: "branding", title: "Full Brand Identity System", desc: "Logo, palette, typography, guidelines", emoji: "🎨", gradient: "linear-gradient(135deg,#A855F7,#0E0818)" },
  { id: "d3", category: "social", title: "Instagram Post Pack — 12 Designs", desc: "Feed posts, stories, highlights covers", emoji: "📱", gradient: "linear-gradient(135deg,#C084FC,#160E28)" },
  { id: "d4", category: "print", title: "Tri-fold Brochure Design", desc: "Print-ready CMYK bilingual layout", emoji: "🖨️", gradient: "linear-gradient(135deg,#6B21A8,#0E0818)" },
  { id: "d5", category: "banners", title: "Digital Banner Set — 5 Sizes", desc: "Web banners optimized for all platforms", emoji: "🖼️", gradient: "linear-gradient(135deg,#7C3AED,#A855F7)" },
  { id: "d6", category: "logo", title: "Emblem Logo + Variations", desc: "Full badge design, dark & light versions", emoji: "🔤", gradient: "linear-gradient(135deg,#A855F7,#6B21A8)" },
];

const VIDEO_FILTERS = [
  { key: "all", label: "All" },
  { key: "reels", label: "Reels" },
  { key: "ads", label: "Ads" },
  { key: "longform", label: "Long Form" },
  { key: "cinematic", label: "Cinematic" },
];

const DESIGN_FILTERS = [
  { key: "all", label: "All" },
  { key: "logo", label: "Logo" },
  { key: "branding", label: "Branding" },
  { key: "social", label: "Social Media" },
  { key: "print", label: "Print Design" },
  { key: "banners", label: "Banners" },
];

const sectionHeading: React.CSSProperties = {
  fontFamily: "'DM Serif Display', serif",
  fontStyle: "italic",
  fontSize: "clamp(32px, 4.5vw, 54px)",
  fontWeight: 400,
  letterSpacing: "-0.015em",
  margin: 0,
};

const cardBase: React.CSSProperties = {
  background: "#160E28",
  border: "1px solid rgba(168,85,247,0.1)",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
};

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "9px 18px",
        borderRadius: 9999,
        fontSize: 13,
        letterSpacing: 0.3,
        background: active ? "rgba(168,85,247,0.2)" : "transparent",
        border: `1px solid ${active ? "#C084FC" : "rgba(168,85,247,0.25)"}`,
        color: active ? "#fff" : "rgba(233,213,255,0.65)",
        transition: "all 0.25s ease",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function HoverCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...cardBase,
        ...style,
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        borderColor: hover ? "rgba(168,85,247,0.35)" : "rgba(168,85,247,0.1)",
        boxShadow: hover ? "0 20px 50px rgba(168,85,247,0.18)" : "none",
      }}
    >
      {children}
    </div>
  );
}

function VideoTile({ video }: { video: VideoCard }) {
  const [playing, setPlaying] = useState(false);
  return (
    <HoverCard
      style={{
        gridColumn: video.featured ? "span 2" : "span 1",
      }}
    >
      <div
        onClick={() => setPlaying(true)}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          overflow: "hidden",
          cursor: "pointer",
          background: "linear-gradient(135deg,#1d1233,#0E0818)",
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.18), transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#C084FC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 28px rgba(192,132,252,0.5)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#160E28">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 12,
                right: 12,
                padding: "4px 10px",
                borderRadius: 9999,
                background: "rgba(8,5,15,0.75)",
                color: "#E9D5FF",
                fontSize: 12,
                fontVariantNumeric: "tabular-nums",
                backdropFilter: "blur(6px)",
              }}
            >
              {video.duration}
            </div>
          </>
        )}
      </div>
      <div style={{ padding: 22 }}>
        <span
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 9999,
            fontSize: 10,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#C084FC",
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(192,132,252,0.25)",
          }}
        >
          {video.category}
        </span>
        <h3
          style={{
            margin: "14px 0 6px",
            fontSize: 19,
            fontWeight: 500,
            color: "#fff",
          }}
        >
          {video.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.55,
            color: "rgba(233,213,255,0.55)",
          }}
        >
          {video.desc}
        </p>
      </div>
    </HoverCard>
  );
}

function DesignTile({ design }: { design: DesignCard }) {
  const [hover, setHover] = useState(false);
  return (
    <HoverCard>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          height: 220,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: design.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            transition: "transform 0.5s ease",
            transform: hover ? "scale(1.04)" : "scale(1)",
          }}
        >
          {design.emoji}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8,5,15,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 15,
            letterSpacing: 0.5,
            opacity: hover ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          View →
        </div>
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 10px",
            borderRadius: 9999,
            fontSize: 10,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#fff",
            background: "rgba(124,58,237,0.8)",
            backdropFilter: "blur(4px)",
          }}
        >
          {design.category}
        </span>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 500, color: "#fff" }}>
          {design.title}
        </h3>
        <p
          style={{
            margin: "6px 0 12px",
            fontSize: 13,
            lineHeight: 1.55,
            color: "rgba(233,213,255,0.55)",
          }}
        >
          {design.desc}
        </p>
        <a
          href="#"
          style={{
            color: "#C084FC",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          View Project →
        </a>
      </div>
    </HoverCard>
  );
}

function Header({
  title,
  accent,
  stats,
}: {
  title: string;
  accent: string;
  stats: { value: string; label: string }[];
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 28,
      }}
    >
      <div>
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          Our Work
        </div>
        <h2 style={sectionHeading}>
          {title} <span style={{ color: "#C084FC" }}>{accent}</span>
        </h2>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontStyle: "italic",
                fontSize: 32,
                color: "#C084FC",
                lineHeight: 1,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: "rgba(233,213,255,0.55)",
                marginTop: 6,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilterBar({
  filters,
  active,
  onChange,
}: {
  filters: { key: string; label: string }[];
  active: string;
  onChange: (k: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        paddingBottom: 22,
        marginBottom: 28,
        borderBottom: "1px solid rgba(168,85,247,0.15)",
      }}
    >
      {filters.map((f) => (
        <Pill key={f.key} active={active === f.key} onClick={() => onChange(f.key)}>
          {f.label}
        </Pill>
      ))}
    </div>
  );
}

function VideoEditing() {
  const [filter, setFilter] = useState("all");
  const shown = VIDEOS.filter((v) => filter === "all" || v.category === filter);
  return (
    <div>
      <Header
        title="Video"
        accent="Editing"
        stats={[
          { value: "50+", label: "Projects Done" },
          { value: "5★", label: "Client Rating" },
        ]}
      />
      <FilterBar filters={VIDEO_FILTERS} active={filter} onChange={setFilter} />
      <div
        className="ourwork-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {shown.map((v) => (
          <VideoTile key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}

function GraphicDesigning() {
  const [filter, setFilter] = useState("all");
  const shown = DESIGNS.filter((d) => filter === "all" || d.category === filter);
  return (
    <div>
      <Header
        title="Graphic"
        accent="Designing"
        stats={[
          { value: "80+", label: "Designs" },
          { value: "5★", label: "Rating" },
        ]}
      />
      <FilterBar filters={DESIGN_FILTERS} active={filter} onChange={setFilter} />
      <div
        className="ourwork-grid-design"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {shown.map((d) => (
          <DesignTile key={d.id} design={d} />
        ))}
      </div>
    </div>
  );
}

export function OurWorkSection() {
  const [tab, setTab] = useState<"video" | "design">("video");
  return (
    <section
      id="services"
      style={{
        background: "#0E0818",
        padding: "100px 6vw 120px",
      }}
    >
      <div style={{ maxWidth: 1500, margin: "0 auto" }}>
        <div className="sec-label" style={{ marginBottom: 22 }}>
          — Our Work
        </div>

        {/* Tab toggle */}
        <div
          role="tablist"
          style={{
            display: "inline-flex",
            padding: 6,
            borderRadius: 9999,
            background: "#160E28",
            border: "1px solid rgba(168,85,247,0.12)",
            marginBottom: 44,
            gap: 4,
          }}
        >
          {[
            { k: "video", l: "Video Editing" },
            { k: "design", l: "Graphic Designing" },
          ].map((t) => {
            const active = tab === (t.k as typeof tab);
            return (
              <button
                key={t.k}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.k as typeof tab)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 9999,
                  border: "none",
                  fontSize: 13,
                  letterSpacing: 0.4,
                  color: active ? "#fff" : "rgba(233,213,255,0.55)",
                  background: active
                    ? "linear-gradient(135deg,#7C3AED,#A855F7)"
                    : "transparent",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                {t.l}
              </button>
            );
          })}
        </div>

        {tab === "video" ? <VideoEditing /> : <GraphicDesigning />}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ourwork-grid-design { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .ourwork-grid { grid-template-columns: 1fr !important; }
          .ourwork-grid-design { grid-template-columns: 1fr !important; }
          .ourwork-grid > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
