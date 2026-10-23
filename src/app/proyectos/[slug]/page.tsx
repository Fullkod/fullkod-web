import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Etiqueta } from "@/components/etiqueta";
import { Galeria, MarcoEscritorio } from "@/components/captura";
import { Mockup } from "@/components/mockup";
import { Simbolo } from "@/components/simbolo";
import { PROYECTOS, buscarProyecto } from "@/content/proyectos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROYECTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = buscarProyecto(slug);
  if (!p) return {};
  return {
    title: `${p.nombre}: caso de estudio`,
    description: p.resumen,
    alternates: { canonical: `/proyectos/${p.slug}` },
    openGraph: { title: `${p.nombre} · Fullkod`, description: p.resumen, url: `/proyectos/${p.slug}` },
  };
}

export default async function CasoDeEstudio({ params }: Props) {
  const { slug } = await params;
  const p = buscarProyecto(slug);
  if (!p) notFound();

  const indice = PROYECTOS.findIndex((x) => x.slug === p.slug);
  const siguiente = PROYECTOS[(indice + 1) % PROYECTOS.length];

  return (
    <>
      {/* Cabecera del caso */}
      <section className="relative overflow-hidden bg-violet-night pt-32 text-white md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-violet/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link href="/#proyectos" className="enlace-subrayado font-mono text-xs uppercase tracking-[0.22em] text-white/60">
              ← Proyectos
            </Link>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-gold">
              Caso de estudio · {p.sector}
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {p.nombre}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">{p.resumen}</p>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Plataformas</dt>
                <dd className="mt-1 font-display text-lg">{p.plataformas.join(" · ")}</dd>
              </div>
              {p.estado ? (
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">Estado</dt>
                  <dd className="mt-1 font-display text-lg">{p.estado}</dd>
                </div>
              ) : null}
            </dl>
          </div>
          <div
            className="simbolo-flota flex items-center justify-center rounded-3xl p-10 shadow-2xl shadow-black/40"
            style={{ background: p.mockup.fondo, color: p.mockup.texto }}
          >
            <div className="w-full max-w-sm">
              {p.portada ? (
                <MarcoEscritorio src={p.portada} alt={`Pantalla de ${p.nombre}`} prioridad />
              ) : (
                <Mockup {...p.mockup} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reto y solución */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-2">
          <div className="revelar">
            <Etiqueta>El reto</Etiqueta>
            <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">{p.reto}</p>
          </div>
          <div className="revelar">
            <Etiqueta>La solución</Etiqueta>
            <ul className="mt-6 space-y-5">
              {p.solucion.map((s) => (
                <li key={s} className="flex gap-4 text-lg leading-relaxed text-slate">
                  <Simbolo className="mt-1 h-5 w-5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.capturas.length > 0 ? (
        <section className="bg-violet-night py-24 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <Etiqueta>Así se ve</Etiqueta>
            <div className="mt-10">
              <Galeria capturas={p.capturas} />
            </div>
          </div>
        </section>
      ) : null}

      {p.resultado ? (
        <section className="bg-white py-24 text-ink">
          <div className="revelar mx-auto max-w-4xl px-4 text-center">
            <Etiqueta>El resultado</Etiqueta>
            <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">{p.resultado}</p>
          </div>
        </section>
      ) : null}

      {/* Tecnologías */}
      <section className="bg-lavender py-20 text-ink">
        <div className="revelar mx-auto max-w-6xl px-4">
          <Etiqueta>Con qué lo construimos</Etiqueta>
          <ul className="mt-6 flex flex-wrap gap-3">
            {p.tecnologias.map((t) => (
              <li key={t} className="rounded-full border border-violet/20 bg-white px-5 py-2 font-mono text-sm text-violet">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Siguiente y contacto */}
      <section className="bg-violet-night py-24 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between">
          <Link href={`/proyectos/${siguiente.slug}`} className="group">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">Siguiente proyecto</p>
            <p className="mt-3 font-display text-4xl font-bold transition group-hover:text-gold md:text-5xl">
              {siguiente.nombre} <span className="inline-block transition group-hover:translate-x-2">→</span>
            </p>
          </Link>
          <Link
            href="/#contacto"
            className="boton-oro self-start rounded-full bg-gold px-8 py-4 font-display text-lg font-semibold text-ink md:self-auto"
          >
            Quiero algo así
          </Link>
        </div>
      </section>
    </>
  );
}
