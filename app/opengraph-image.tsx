import { ImageResponse } from "next/og";

export const alt = "Athalla Arli - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050a09",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8fd6a8",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800 }}>
            Athalla Arli
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#9fb2ab" }}>
            Software Engineer - Backend APIs, CMS & POS
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6f827b" }}>
          athalla-works.my.id · Bandung, Indonesia
        </div>
      </div>
    ),
    size
  );
}
