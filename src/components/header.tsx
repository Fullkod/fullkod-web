"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary["header"] }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: `/${lang}#projects`, label: dict.links.projects },
    { href: `/${lang}#services`, label: dict.links.services },
    { href: `/${lang}#process`, label: dict.links.process },
    { href: `/${lang}#team`, label: dict.links.team },
    { href: `/${lang}#faq`, label: dict.links.faq },
  ];

  // Locks page scroll while the mobile menu is open and closes it on Escape.
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-violet-night/75 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href={`/${lang}`} aria-label={dict.homeLabel} className="flex items-center">
          <Image
            src="/brand/fullkod-horizontal-reversed.svg"
            alt="Fullkod"
            width={992}
            height={256}
            unoptimized
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav aria-label={dict.mainNav} className="hidden items-center gap-8 font-display text-sm text-white/80 lg:flex">
          {links.map((e) => (
            <Link key={e.href} href={e.href} className="underline-link">
              {e.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} label={dict.languageLabel} />
          <Link
            href={`/${lang}#contact`}
            className="gold-button hidden rounded-full bg-gold px-5 py-2 font-display text-sm font-semibold text-ink sm:inline-block"
          >
            {dict.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-gold transition duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-violet-night lg:hidden"
      >
        <nav aria-label={dict.mobileNav} className="mx-auto flex max-w-6xl flex-col px-4 py-6">
          {links.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={() => setOpen(false)}
              className="menu-enter flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-semibold"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {e.label}
              <span aria-hidden="true" className="text-gold">→</span>
            </Link>
          ))}
          <Link
            href={`/${lang}#contact`}
            onClick={() => setOpen(false)}
            className="gold-button mt-8 rounded-full bg-gold px-6 py-4 text-center font-display text-lg font-semibold text-ink"
          >
            {dict.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
