import logo from "@/assets/logo.png";

export function Logo({
  size = 80,
  withWord = false,
}: {
  size?: number;
  withWord?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src={logo}
        alt="Voxen logo"
        style={{
          height: size,
          width: "auto",
          display: "block",
        }}
      />

      {withWord && (
        <span
          style={{
            fontWeight: 700,
            letterSpacing: 1.5,
            fontSize: 16,
            color: "#fff",
          }}
        >
          VOXEN
        </span>
      )}
    </div>
  );
}
