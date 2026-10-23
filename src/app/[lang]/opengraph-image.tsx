import { ImageResponse } from "next/og";
import { DEFAULT_LOCALE, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { OG_SIZE, brandLogoDataUri } from "@/lib/og";

// Image shown when the link is shared (WhatsApp, LinkedIn, X...).
export const alt = "Fullkod — Full solutions. Fully coded.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta } = getDictionary(hasLocale(lang) ? lang : DEFAULT_LOCALE);
  const logo = await brandLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#24104F",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={310} height={80} style={{ marginBottom: 56 }} />
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#F2B705", textTransform: "uppercase" }}>
            {meta.ogEyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
            <span>Full solutions.</span>
            <span style={{ color: "#F2B705" }}>Fully coded.</span>
          </div>
          <div style={{ marginTop: 36, fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            {meta.ogLine}
          </div>
        </div>
        <svg width="320" height="320" viewBox="0 0 256 256">
          <polygon fill="#5B21B6" points="136,32 128,24 24,128 109.75,213.75 137.18,166.25 128,175.43 80.57,128" />
          <polygon fill="#F2B705" points="120,224 128,232 232,128 146.25,42.25 118.82,89.75 128,80.57 175.43,128" />
        </svg>
      </div>
    ),
    size,
  );
}
