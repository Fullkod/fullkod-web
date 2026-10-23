import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { DesktopFrame, Gallery } from "@/components/screenshot";
import { Mockup } from "@/components/mockup";
import { BrandSymbol, GoldEdges } from "@/components/symbol";
import { fmt } from "@/i18n/config";
import { SITE } from "@/lib/site";
import { PROJECT_SLUGS, findProject, getProjects } from "@/content/projects";
import { LOCALES, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => PROJECT_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const p = findProject(lang, slug);
  if (!p) return {};
  const dict = getDictionary(lang);
  return {
    title: `${p.name}: ${dict.meta.caseStudy}`,
    description: p.summary,
    alternates: {
      canonical: `/${lang}/projects/${p.slug}`,
      languages: { es: `/es/projects/${p.slug}`, en: `/en/projects/${p.slug}`, "x-default": `/es/projects/${p.slug}` },
    },
    openGraph: { title: `${p.name} · Fullkod`, description: p.summary, url: `/${lang}/projects/${p.slug}` },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const p = findProject(lang, slug);
  if (!p) notFound();
  const dict = getDictionary(lang);
  const t = dict.project;

  const projects = getProjects(lang);
  const index = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(index + 1) % projects.length];

  const url = `${SITE.url}/${lang}/projects/${p.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Fullkod", item: `${SITE.url}/${lang}` },
          { "@type": "ListItem", position: 2, name: dict.header.links.projects, item: `${SITE.url}/${lang}#projects` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: p.name,
        description: p.summary,
        url,
        inLanguage: lang,
        applicationCategory: "BusinessApplication",
        operatingSystem: p.platforms.join(", "),
        applicationSuite: "Fullkod",
        image: p.cover ? `${SITE.url}${p.cover}` : undefined,
        screenshot: p.screenshots.map((s) => ({ "@type": "ImageObject", url: `${SITE.url}${s.src}`, caption: s.alt })),
        author: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* Case header */}
      <section className="relative overflow-hidden bg-violet-night pt-32 text-white md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-violet/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link href={`/${lang}#projects`} className="underline-link font-mono text-xs uppercase tracking-[0.22em] text-white/60">
              {t.back}
            </Link>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              {t.caseStudy} · {p.sector}
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {p.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">{p.summary}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">{t.platforms}</dt>
                <dd className="mt-1 font-display text-lg">{p.platforms.join(" · ")}</dd>
              </div>
              {p.status ? (
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">{t.status}</dt>
                  <dd className="mt-1 font-display text-lg">{p.status}</dd>
                </div>
              ) : null}
            </dl>
          </div>
          <div
            className="symbol-float flex items-center justify-center rounded-3xl p-10 shadow-2xl shadow-black/40"
            style={{ background: p.mockup.background, color: p.mockup.text }}
          >
            <div className="w-full max-w-sm">
              {p.cover ? (
                <DesktopFrame src={p.cover} alt={fmt(dict.home.projects.screenOf, { name: p.name })} priority />
              ) : (
                <Mockup {...p.mockup} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge and solution */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-2">
          <div className="reveal">
            <Eyebrow>{t.challenge}</Eyebrow>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">{p.challenge}</p>
          </div>
          <div className="reveal">
            <Eyebrow>{t.solution}</Eyebrow>
            <ul className="mt-6 space-y-5">
              {p.solution.map((s) => (
                <li key={s} className="flex gap-4 text-lg leading-relaxed text-slate">
                  <BrandSymbol className="mt-1 h-5 w-5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.screenshots.length > 0 ? (
        <section className="relative overflow-hidden bg-violet-night py-24 text-white">
          <GoldEdges />
          <div className="relative mx-auto max-w-6xl px-4">
            <Eyebrow dark>{t.screens}</Eyebrow>
            <div className="mt-10">
              <Gallery screenshots={p.screenshots} labels={dict.gallery} />
            </div>
          </div>
        </section>
      ) : null}

      {p.result ? (
        <section className="bg-white py-24 text-ink">
          <div className="reveal mx-auto max-w-4xl px-4 text-center">
            <Eyebrow>{t.result}</Eyebrow>
            <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">{p.result}</p>
          </div>
        </section>
      ) : null}

      {/* Technologies */}
      <section className="bg-lavender py-20 text-ink">
        <div className="reveal mx-auto max-w-6xl px-4">
          <Eyebrow>{t.stack}</Eyebrow>
          <ul className="mt-6 flex flex-wrap gap-3">
            {p.technologies.map((t) => (
              <li key={t} className="rounded-full border border-violet/20 bg-white px-5 py-2 font-mono text-sm text-violet">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next project and contact */}
      <section className="relative overflow-hidden bg-violet-night py-24 text-white">
        <GoldEdges />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between">
          <Link href={`/${lang}/projects/${next.slug}`} className="group">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">{t.nextProject}</p>
            <p className="mt-3 font-display text-4xl font-bold transition group-hover:text-gold md:text-5xl">
              {next.name} <span className="inline-block transition group-hover:translate-x-2">→</span>
            </p>
          </Link>
          <Link
            href={`/${lang}#contact`}
            className="gold-button self-start rounded-full bg-gold px-8 py-4 font-display text-lg font-semibold text-ink md:self-auto"
          >
            {t.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
