import logo from "@/assets/logo.png";

export function Logo({
  size = 200, // pehle 80 tha
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
            fontSize: 20,
            color: "#fff",
          }}
        >
          VOXEN
        </span>
      )}
    </div>
  );
}
