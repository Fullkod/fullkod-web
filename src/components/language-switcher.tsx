"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LOCALES, LOCALE_NAMES, switchLocalePath, type Locale } from "@/i18n/config";

// Round flag (inline SVG: emoji flags do not render on Windows).
function Flag({ locale, className = "h-5 w-5" }: { locale: Locale; className?: string }) {
  const uid = useId().replace(/:/g, "");
  return (
    <span aria-hidden="true" className={`inline-block shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 ${className}`}>
      {locale === "es" ? (
        <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <rect width="3" height="2" fill="#AA151B" />
          <rect y="0.5" width="3" height="1" fill="#F1BF00" />
        </svg>
      ) : (
        <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <clipPath id={`${uid}s`}>
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id={`${uid}t`}>
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath={`url(#${uid}s)`}>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${uid}t)`} stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      )}
    </span>
  );
}

// Language selector: a flag button that opens a small menu with every language.
// Each option links to the same page in that language.
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${LOCALE_NAMES[lang]}`}
        className="flex h-11 items-center gap-2 rounded-full border border-white/15 pl-3 pr-3 font-mono text-xs uppercase tracking-[0.12em] text-white/90 transition hover:border-gold/60 hover:text-white"
      >
        <Flag locale={lang} />
        <span>{lang}</span>
        <svg
          viewBox="0 0 10 6"
          aria-hidden="true"
          className={`h-1.5 w-2.5 text-white/60 transition duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="absolute right-0 top-full z-10 mt-2 min-w-44 overflow-hidden rounded-2xl border border-white/15 bg-violet-night p-1.5 shadow-2xl shadow-black/40"
      >
        {LOCALES.map((locale) => (
          <li key={locale}>
            <Link
              href={switchLocalePath(pathname, locale)}
              hrefLang={locale}
              lang={locale}
              onClick={() => setOpen(false)}
              aria-current={locale === lang ? "true" : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-display text-sm transition ${
                locale === lang ? "bg-white/10 text-gold" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Flag locale={locale} className="h-6 w-6" />
              <span className="flex-1">{LOCALE_NAMES[locale]}</span>
              {locale === lang ? (
                <svg viewBox="0 0 12 10" aria-hidden="true" className="h-2.5 w-3">
                  <path d="M1 5l3.5 3.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
