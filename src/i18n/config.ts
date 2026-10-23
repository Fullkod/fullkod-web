// Supported languages. Spanish is the default; routes are prefixed with the locale (/es, /en).
export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// Picks the locale from an Accept-Language header: the first Spanish or English entry by
// quality wins; any other language falls back to English; no header falls back to the default.
export function negotiateLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { base: tag.trim().toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((e) => e.base && e.base !== "*" && !Number.isNaN(e.q) && e.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const { base } of entries) {
    if (hasLocale(base)) return base;
  }
  return entries.length > 0 ? "en" : DEFAULT_LOCALE;
}

// Replaces {placeholders} in a dictionary string.
export function fmt(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

// Path of the same page in another locale: swaps the first segment.
export function switchLocalePath(pathname: string, to: Locale) {
  const segments = pathname.split("/");
  if (hasLocale(segments[1] ?? "")) segments[1] = to;
  else segments.splice(1, 0, to);
  return segments.join("/") || `/${to}`;
}
