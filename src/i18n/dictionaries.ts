import { es, type Dictionary } from "@/i18n/dictionaries/es";
import { en } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
