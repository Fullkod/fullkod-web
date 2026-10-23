import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { DesktopFrame, Gallery } from "@/components/screenshot";
import { Mockup } from "@/components/mockup";
import { BrandSymbol, GoldEdges } from "@/components/symbol";
import { PROJECTS, findProject } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) return {};
  return {
    title: `${p.name}: caso de estudio`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.name} · Fullkod`, description: p.summary, url: `/projects/${p.slug}` },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) notFound();

  const index = PROJECTS.findIndex((x) => x.slug === p.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <>
      {/* Case header */}
      <section className="relative overflow-hidden bg-violet-night pt-32 text-white md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-violet/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link href="/#projects" className="underline-link font-mono text-xs uppercase tracking-[0.22em] text-white/60">
              ← Proyectos
            </Link>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              Caso de estudio · {p.sector}
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {p.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">{p.summary}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Plataformas</dt>
                <dd className="mt-1 font-display text-lg">{p.platforms.join(" · ")}</dd>
              </div>
              {p.status ? (
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Estado</dt>
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
                <DesktopFrame src={p.cover} alt={`Pantalla de ${p.name}`} priority />
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
            <Eyebrow>El reto</Eyebrow>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">{p.challenge}</p>
          </div>
          <div className="reveal">
            <Eyebrow>La solución</Eyebrow>
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
            <Eyebrow dark>Así se ve</Eyebrow>
            <div className="mt-10">
              <Gallery screenshots={p.screenshots} />
            </div>
          </div>
        </section>
      ) : null}

      {p.result ? (
        <section className="bg-white py-24 text-ink">
          <div className="reveal mx-auto max-w-4xl px-4 text-center">
            <Eyebrow>El resultado</Eyebrow>
            <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">{p.result}</p>
          </div>
        </section>
      ) : null}

      {/* Technologies */}
      <section className="bg-lavender py-20 text-ink">
        <div className="reveal mx-auto max-w-6xl px-4">
          <Eyebrow>Con qué lo construimos</Eyebrow>
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
          <Link href={`/projects/${next.slug}`} className="group">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">Siguiente proyecto</p>
            <p className="mt-3 font-display text-4xl font-bold transition group-hover:text-gold md:text-5xl">
              {next.name} <span className="inline-block transition group-hover:translate-x-2">→</span>
            </p>
          </Link>
          <Link
            href="/#contact"
            className="gold-button self-start rounded-full bg-gold px-8 py-4 font-display text-lg font-semibold text-ink md:self-auto"
          >
            Quiero algo así
          </Link>
        </div>
      </section>
    </>
  );
}
