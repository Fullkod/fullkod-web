import type { MetadataRoute } from "next";
import { PROYECTOS } from "@/content/proyectos";
import { SITIO } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITIO.url, changeFrequency: "monthly", priority: 1 },
    ...PROYECTOS.map((p) => ({
      url: `${SITIO.url}/proyectos/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITIO.url}/aviso-legal`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITIO.url}/privacidad`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITIO.url}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
