import logo from "@/assets/logo.png";

export function Logo({
 // pehle 80 tha
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
     
          display: "block",
        }}
      />

    
    </div>
  );
}
