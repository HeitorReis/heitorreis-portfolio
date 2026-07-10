import { ImageResponse } from "next/og";

export const alt = "Heitor Reis — Computer Engineering Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b0e15 0%, #12101f 55%, #0b1420 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(79,157,255,0.55) 0%, rgba(79,157,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(163,116,255,0.5) 0%, rgba(163,116,255,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "999px",
              background: "#4f9dff",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8b93a7",
            }}
          >
            Computer Engineering Student
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 112,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1,
              backgroundImage: "linear-gradient(90deg, #f5f7fb 20%, #4f9dff 65%, #a374ff 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Heitor Reis
          </span>
          <span style={{ fontSize: 32, color: "#c3c9d6", maxWidth: 900, display: "flex" }}>
            AI, low-level systems, and digital health — from a Harvard hackathon win to
            AI-driven tools inside Embraer.
          </span>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Embraer", "Emma", "Harvard Hackathon Winner", "Huawei Seeds ×2"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#dfe3ec",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
