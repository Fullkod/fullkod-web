export type Screenshot = {
  src: string;
  alt: string;
  kind: "desktop" | "mobile";
};

export type Screen = [file: string, description: string];

// Builds the screenshot list from file names (`<prefix>-<screen>.png`;
// the mobile version takes the `-mobile` suffix).
export function buildScreenshots(prefix: string, desktop: Screen[], mobile: Screen[] = []): Screenshot[] {
  return [
    ...desktop.map(([f, alt]) => ({ src: `/sites/${prefix}-${f}.png`, alt, kind: "desktop" as const })),
    ...mobile.map(([f, alt]) => ({ src: `/sites/${prefix}-${f}-mobile.png`, alt, kind: "mobile" as const })),
  ];
}

// What a business gains by using the product. `plan` names the plan that includes it, when not every plan does.
export type Benefit = {
  title: string;
  text: string;
  plan?: string;
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  summary: string;
  tags: string[];
  platforms: string[];
  status: string | null;
  challenge: string;
  solution: string[];
  benefits?: Benefit[];
  result: string | null;
  technologies: string[];
  cover: string | null;
  screenshots: Screenshot[];
  mockup: {
    kind: "dashboard" | "mobile";
    accent: string;
    background: string;
    text: string;
  };
};

// Translatable part of a project. `alts` lists the screenshot descriptions in the same order
// as the Spanish `screenshots` (desktop first, then mobile).
export type ProjectCopy = Pick<
  Project,
  "sector" | "summary" | "tags" | "platforms" | "status" | "challenge" | "solution" | "benefits" | "result"
> & { alts: string[] };
