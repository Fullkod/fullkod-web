import { PROJECTS_ES } from "@/content/projects.es";
import { PROJECTS_EN_COPY } from "@/content/projects.en";
import type { Project } from "@/content/project-types";
import type { Locale } from "@/i18n/config";

export type { Project, Screenshot } from "@/content/project-types";

// English = Spanish data (slug, technologies, images, colors) with the English copy merged over it.
const PROJECTS_EN: Project[] = PROJECTS_ES.map((p) => {
  const { alts, ...copy } = PROJECTS_EN_COPY[p.slug];
  return {
    ...p,
    ...copy,
    screenshots: p.screenshots.map((s, i) => ({ ...s, alt: alts[i] })),
  };
});

export function getProjects(lang: Locale): Project[] {
  return lang === "en" ? PROJECTS_EN : PROJECTS_ES;
}

export function findProject(lang: Locale, slug: string) {
  return getProjects(lang).find((p) => p.slug === slug);
}

export const PROJECT_SLUGS = PROJECTS_ES.map((p) => p.slug);
