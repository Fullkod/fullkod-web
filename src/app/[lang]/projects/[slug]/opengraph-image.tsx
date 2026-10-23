import { ImageResponse } from "next/og";
import { DEFAULT_LOCALE, hasLocale } from "@/i18n/config";
import { findProject } from "@/content/projects";
import { OG_SIZE, brandLogoDataUri, publicImageDataUri } from "@/lib/og";

// Share image of a case study: project name and sector next to its real screenshot.
export const alt = "Fullkod — case study";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const project = findProject(hasLocale(lang) ? lang : DEFAULT_LOCALE, slug);
  const logo = await brandLogoDataUri();
  const cover = project?.cover ? await publicImageDataUri(project.cover, 1000) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 72px",
          background: "#24104F",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 470 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={232} height={60} style={{ marginBottom: 56 }} />
          <div style={{ fontSize: 24, letterSpacing: 5, color: "#F2B705", textTransform: "uppercase" }}>
            {project?.sector}
          </div>
          <div style={{ marginTop: 18, fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{project?.name}</div>
          <div style={{ marginTop: 26, fontSize: 26, lineHeight: 1.35, color: "rgba(255,255,255,0.75)" }}>
            {project?.summary.split(":")[0]}
          </div>
        </div>
        {cover ? (
          <div
            style={{
              display: "flex",
              marginLeft: 56,
              width: 560,
              height: 340,
              borderRadius: 18,
              overflow: "hidden",
              border: "6px solid rgba(255,255,255,0.14)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cover} alt="" width={560} height={340} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
        ) : null}
      </div>
    ),
    size,
  );
}
