import Link from "next/link";
import { lang } from "next/root-params";
import { BrandSymbol } from "@/components/symbol";
import { DEFAULT_LOCALE, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function NotFound() {
  const current = await lang();
  const locale = hasLocale(current) ? current : DEFAULT_LOCALE;
  const t = getDictionary(locale).notFound;
  return (
    <section className="flex min-h-[80vh] items-center bg-violet-night pt-16 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <BrandSymbol animated className="h-32 w-32" />
        <p className="mt-10 font-mono text-sm uppercase tracking-[0.22em] text-gold">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          {t.title}
        </h1>
        <p className="mt-5 text-lg text-white/70">{t.text}</p>
        <Link
          href={`/${locale}`}
          className="gold-button mt-10 rounded-full bg-gold px-8 py-4 font-display font-semibold text-ink"
        >
          {t.back}
        </Link>
      </div>
    </section>
  );
}
