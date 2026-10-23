import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { getProjects } from "@/content/projects";
import { FooterColumn } from "@/components/footer-column";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary["footer"] }) {
  const projects = getProjects(lang);
  return (
    <footer className="bg-violet-night text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:gap-12 md:py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/fullkod-horizontal-reversed.svg"
            alt="Fullkod"
            width={992}
            height={256}
            unoptimized
            loading="eager"
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-xs font-display text-xl text-white/80">
            Full solutions. <span className="text-gold">Fully coded.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{dict.blurb}</p>
        </div>

        <FooterColumn title={dict.projects}>
          <ul className="space-y-3 text-white/75">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/${lang}/projects/${p.slug}`} className="underline-link">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title={dict.company}>
          <ul className="space-y-3 text-white/75">
            <li><Link href={`/${lang}#services`} className="underline-link">{dict.services}</Link></li>
            <li><Link href={`/${lang}#team`} className="underline-link">{dict.team}</Link></li>
            <li><Link href={`/${lang}#faq`} className="underline-link">{dict.faq}</Link></li>
            <li><Link href={`/${lang}#contact`} className="underline-link">{dict.contactLink}</Link></li>
          </ul>
        </FooterColumn>

        <FooterColumn title={dict.contact}>
          <ul className="space-y-3 text-white/75">
            {CONTACT.email ? (
              <li>
                <a href={`mailto:${CONTACT.email}`} className="underline-link">
                  {CONTACT.email}
                </a>
              </li>
            ) : null}
            {CONTACT.whatsapp ? (
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-link"
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
            {CONTACT.linkedin ? (
              <li>
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="underline-link">
                  LinkedIn
                </a>
              </li>
            ) : null}
            <li>
              <Link href={`/${lang}#contact`} className="underline-link">
                {dict.writeUs}
              </Link>
            </li>
          </ul>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{dict.rights}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href={`/${lang}/legal-notice`} className="underline-link">{dict.legalNotice}</Link></li>
            <li><Link href={`/${lang}/privacy`} className="underline-link">{dict.privacy}</Link></li>
            <li><Link href={`/${lang}/cookies`} className="underline-link">{dict.cookies}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
