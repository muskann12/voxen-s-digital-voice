export function Logo({ size = 28, withWord = true }: { size?: number; withWord?: boolean }) {
  const h = size;
  const w = size * 1.05;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg width={w} height={h} viewBox="0 0 32 30" fill="none">
        <defs>
          <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect x="1" y="2" width="5" height="26" rx="1.5" fill="url(#vg)" />
        <rect x="9" y="8" width="5" height="18" rx="1.5" fill="url(#vg)" opacity="0.85" />
        <rect x="17" y="8" width="5" height="18" rx="1.5" fill="url(#vg)" opacity="0.85" />
        <rect x="25" y="2" width="5" height="26" rx="1.5" fill="url(#vg)" />
      </svg>
      {withWord && (
        <span style={{ fontWeight: 700, letterSpacing: 1.5, fontSize: 16, color: "#fff" }}>
          VOXEN
        </span>
      )}
    </div>
  );
}
