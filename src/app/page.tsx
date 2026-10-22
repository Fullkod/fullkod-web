import Link from "next/link";
import { Barra, Simbolo } from "@/components/simbolo";
import { Etiqueta } from "@/components/etiqueta";
import { FormularioContacto } from "@/components/formulario-contacto";
import { Mockup } from "@/components/mockup";
import { PROYECTOS } from "@/content/proyectos";
import { AMBITOS, EQUIPO, PASOS, PREGUNTAS, SERVICIOS, TECNOLOGIAS } from "@/content/sitio";
import { FICTICIOS, TESTIMONIOS } from "@/lib/testimonios";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PREGUNTAS.map((q) => ({
    "@type": "Question",
    name: q.pregunta,
    acceptedAnswer: { "@type": "Answer", text: q.respuesta },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-violet-night pt-32 text-white md:pt-40"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-violet/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 md:grid-cols-[1.1fr_0.9fr] md:pb-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
              Software a medida · España y Latinoamérica
            </p>
            <h1 className="mt-6 font-display text-[3.25rem] font-bold leading-[1.02] tracking-tight md:text-[5.25rem]">
              Full solutions.
              <br />
              <span className="text-gold">Fully coded.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              Construimos aplicaciones completas para tu negocio: desde la primera
              idea hasta la operación diaria, con un solo equipo responsable de todo.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#contacto"
                className="boton-oro rounded-full bg-gold px-8 py-4 font-display text-base font-semibold text-ink"
              >
                Cuéntanos tu proyecto
              </Link>
              <Link
                href="#proyectos"
                className="enlace-subrayado font-display text-base font-semibold text-white/90"
              >
                Ver proyectos →
              </Link>
            </div>
          </div>

          {/* El símbolo: el < y el > se arman al cargar y flotan */}
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="anillo-giratorio absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-white/15 md:h-[30rem] md:w-[30rem]"
            />
            <div className="simbolo-flota relative">
              <Simbolo animado className="h-60 w-60 drop-shadow-[0_30px_60px_rgba(91,33,182,0.55)] md:h-80 md:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/10 bg-violet-night py-6 text-white/55">
        <div className="marquee-pista flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em]">
          {[...AMBITOS, ...AMBITOS].map((a, i) => (
            <span key={i} className="flex items-center gap-10" aria-hidden={i >= AMBITOS.length}>
              {a}
              <Barra className="h-4 w-2 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Proyectos */}
      <section id="proyectos" className="scroll-mt-16 bg-cream py-28 text-ink">
        <div className="mx-auto max-w-6xl px-4">
          <div className="revelar">
            <Etiqueta>Proyectos</Etiqueta>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Software real, en uso todos los días
            </h2>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {PROYECTOS.map((p, i) => (
              // El primero va destacado a doble ancho: con cinco proyectos la rejilla queda completa.
              <div key={p.slug} className={`revelar ${i === 0 ? "md:col-span-2" : ""}`}>
                <Link
                  href={`/proyectos/${p.slug}`}
                  className={`tarjeta group flex h-full flex-col rounded-3xl border border-violet/10 bg-white p-6 ${
                    i === 0 ? "xl:grid xl:grid-cols-[1.15fr_1fr] xl:gap-x-10" : ""
                  }`}
                >
                  <div
                    className={`flex items-center justify-center rounded-2xl p-6 ${i === 0 ? "xl:p-10" : ""}`}
                    style={{ background: p.mockup.fondo, color: p.mockup.texto }}
                  >
                    <Mockup {...p.mockup} />
                  </div>
                  <div className="flex flex-1 flex-col xl:justify-center">
                    <div className="mt-7 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold">{p.nombre}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate">
                        {p.sector}
                      </span>
                    </div>
                    <p className={`mt-3 leading-relaxed text-slate ${i === 0 ? "xl:text-lg" : "flex-1"}`}>
                      {p.resumen}
                    </p>
                    <ul className="mt-5 flex flex-wrap items-start gap-2">
                      {p.etiquetas.map((e) => (
                        <li
                          key={e}
                          className="rounded-full bg-lavender px-3 py-1 font-mono text-xs text-violet"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 font-display text-sm font-semibold text-violet transition group-hover:translate-x-1">
                      Ver caso →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-16 bg-violet-night py-28 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="revelar">
            <Etiqueta oscuro>Servicios</Etiqueta>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Un solo equipo para toda la solución
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {SERVICIOS.map((s) => (
              <div key={s.n} className="revelar">
                <article className="tarjeta group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-9 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gold">{s.n}</span>
                    <Simbolo className="h-7 w-7 opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{s.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{s.texto}</p>
                </article>
              </div>
            ))}
          </div>

          {/* Tecnologías */}
          <div className="revelar mt-20 border-t border-white/10 pt-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/50">
              Con qué trabajamos
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {TECNOLOGIAS.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-2 font-mono text-sm text-white/80 transition hover:border-gold hover:text-gold"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="scroll-mt-16 bg-cream py-28 text-ink">
        <div className="mx-auto max-w-6xl px-4">
          <div className="revelar">
            <Etiqueta>Cómo trabajamos</Etiqueta>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Claro desde el primer día
            </h2>
          </div>
          <ol className="mt-16 grid gap-12 md:grid-cols-3">
            {PASOS.map((p, i) => (
              <li key={p.titulo} className="revelar">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-violet">0{i + 1}</span>
                  <span className="h-px flex-1 bg-gold/60" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{p.titulo}</h3>
                <p className="mt-4 text-lg leading-relaxed text-slate">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="scroll-mt-16 bg-white py-28 text-ink">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="revelar">
            <Etiqueta>Quiénes somos</Etiqueta>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Un equipo pequeño que responde por todo
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              En Fullkod hacemos software completo para cualquier negocio, de España a
              Latinoamérica. Hablas siempre con quien construye tu proyecto: sin
              intermediarios y sin pasar la pelota.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            {EQUIPO.map((m) => (
              <li key={m.nombre} className="revelar">
                <div className="tarjeta flex h-full flex-col items-center rounded-3xl border border-violet/10 bg-lavender/50 p-8 text-center">
                  <div className="relative">
                    <span className="flex h-28 w-28 items-center justify-center rounded-full bg-violet font-display text-3xl font-semibold text-white">
                      {m.iniciales}
                    </span>
                    <Simbolo className="absolute -bottom-1 -right-1 h-9 w-9 rounded-full bg-white p-1.5" />
                  </div>
                  <p className="mt-6 font-display text-xl font-semibold">{m.nombre}</p>
                  {m.rol ? <p className="mt-1 text-sm text-slate">{m.rol}</p> : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonios */}
      <section id="clientes" className="scroll-mt-16 bg-lavender py-28 text-ink">
        <div className="mx-auto max-w-6xl px-4">
          <div className="revelar flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Etiqueta>Clientes</Etiqueta>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Lo que dicen de trabajar con nosotros
              </h2>
            </div>
            {FICTICIOS ? (
              <span className="self-start rounded-full border border-violet/30 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-violet md:self-auto">
                Testimonios de ejemplo
              </span>
            ) : null}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {TESTIMONIOS.map((t) => (
              <div key={t.nombre} className="revelar">
                <figure className="tarjeta flex h-full flex-col rounded-3xl border border-violet/10 bg-white p-8">
                  <span aria-hidden="true" className="font-display text-6xl leading-none text-gold">
                    “
                  </span>
                  <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-ink">
                    {t.cita}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-violet/10 pt-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet font-display text-sm font-semibold text-white">
                      {t.iniciales}
                    </span>
                    <span>
                      <span className="block font-display font-semibold">{t.nombre}</span>
                      <span className="block text-sm text-slate">{t.cargo}</span>
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="scroll-mt-16 bg-cream py-28 text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="revelar">
            <Etiqueta>Preguntas frecuentes</Etiqueta>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Lo que suelen preguntarnos
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              ¿No está tu duda?{" "}
              <Link href="#contacto" className="font-semibold text-violet underline underline-offset-4">
                Escríbenos
              </Link>
              .
            </p>
          </div>

          <div className="divide-y divide-violet/15 border-y border-violet/15">
            {PREGUNTAS.map((q) => (
              <details key={q.pregunta} className="faq group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-semibold">
                  {q.pregunta}
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet/30 text-violet transition duration-300 group-open:rotate-45 group-open:bg-violet group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="faq-respuesta pb-6 pr-12 text-lg leading-relaxed text-slate">
                  {q.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative scroll-mt-16 overflow-hidden bg-violet py-28 text-white">
        <Simbolo className="pointer-events-none absolute -left-20 top-24 h-72 w-72 opacity-10" />
        <Simbolo className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 opacity-10" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[0.9fr_1.1fr]">
          <div className="revelar">
            <Etiqueta oscuro>Contacto</Etiqueta>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              ¿Tienes un negocio que necesita software a medida?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Cuéntanos qué quieres resolver. Te respondemos con preguntas concretas y,
              si encaja, con una propuesta por escrito.
            </p>
          </div>
          <div className="revelar">
            <FormularioContacto />
          </div>
        </div>
      </section>
    </>
  );
}
