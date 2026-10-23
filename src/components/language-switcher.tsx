"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, switchLocalePath, type Locale } from "@/i18n/config";

// ES | EN toggle: links to the same page in the other language.
export function LanguageSwitcher({ lang, label, className = "" }: { lang: Locale; label: string; className?: string }) {
  const pathname = usePathname();
  return (
    <div role="group" aria-label={label} className={`flex items-center font-mono text-xs uppercase tracking-[0.18em] ${className}`}>
      {LOCALES.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 ? <span aria-hidden="true" className="mx-2 text-white/25">/</span> : null}
          <Link
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === lang ? "true" : undefined}
            className={locale === lang ? "text-gold" : "text-white/60 transition hover:text-white"}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  );
}
