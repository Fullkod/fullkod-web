import type { MetadataRoute } from "next";
import { PROJECT_SLUGS, getProjects } from "@/content/projects";
import { LOCALES } from "@/i18n/config";
import { SITE } from "@/lib/site";

// One entry per page and language, each pointing at its translations (hreflang).
function entry(path: string, changeFrequency: "monthly" | "yearly", priority: number, images: string[] = []): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`]));
  return LOCALES.map((lang) => ({
    url: `${SITE.url}/${lang}${path}`,
    changeFrequency,
    priority,
    alternates: { languages },
    ...(images.length > 0 ? { images: images.map((src) => `${SITE.url}${src}`) } : {}),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("", "monthly", 1),
    ...PROJECT_SLUGS.flatMap((slug) => {
      const project = getProjects("es").find((p) => p.slug === slug);
      return entry(`/projects/${slug}`, "monthly", 0.8, project?.screenshots.map((s) => s.src) ?? []);
    }),
    ...entry("/legal-notice", "yearly", 0.2),
    ...entry("/privacy", "yearly", 0.2),
    ...entry("/cookies", "yearly", 0.2),
  ];
}
