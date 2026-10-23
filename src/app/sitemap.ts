import type { MetadataRoute } from "next";
import { PROJECT_SLUGS } from "@/content/projects";
import { LOCALES } from "@/i18n/config";
import { SITE } from "@/lib/site";

// One entry per page and language, each pointing at its translations (hreflang).
function entry(path: string, changeFrequency: "monthly" | "yearly", priority: number): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`]));
  return LOCALES.map((lang) => ({
    url: `${SITE.url}/${lang}${path}`,
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("", "monthly", 1),
    ...PROJECT_SLUGS.flatMap((slug) => entry(`/projects/${slug}`, "monthly", 0.8)),
    ...entry("/legal-notice", "yearly", 0.2),
    ...entry("/privacy", "yearly", 0.2),
    ...entry("/cookies", "yearly", 0.2),
  ];
}
