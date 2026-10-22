import Image from "next/image";
import { CONTACTO } from "@/lib/contacto";

const servicios = [
  {
    n: "01",
    titulo: "Aplicaciones web a medida",
    texto:
      "Paneles, portales y herramientas internas diseñados alrededor de cómo trabaja tu equipo, no al revés.",
  },
  {
    n: "02",
    titulo: "Plataformas y e-commerce",
    texto:
      "Tiendas y marketplaces con catálogo, pagos, pedidos y reportes propios, sin depender de plantillas cerradas.",
  },
  {
    n: "03",
    titulo: "Automatización e IA",
    texto:
      "Procesos repetitivos convertidos en flujos que funcionan solos, con asistentes que responden con tus datos.",
  },
  {
    n: "04",
    titulo: "Integraciones y mantenimiento",
    texto:
      "Conectamos tu software con lo que ya usas y lo mantenemos vivo, con monitoreo y mejoras continuas.",
  },
];

const pasos = [
  {
    titulo: "Escuchamos",
    texto:
      "Entendemos el negocio, el problema real y qué significa «listo» para ti antes de escribir una línea de código.",
  },
  {
    titulo: "Diseñamos y construimos",
    texto:
      "Prototipos con tu equipo, entregas cortas y revisables. Ves avances reales cada semana.",
  },
  {
    titulo: "Lanzamos y acompañamos",
    texto:
      "Despliegue, formación y soporte. El software sigue creciendo con tu negocio.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/fullkod-horizontal-white.svg"
      alt="Fullkod"
      width={992}
      height={256}
      unoptimized
      className={className}
    />
  );
}

function BotonPrincipal({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-display text-base font-semibold text-ink transition hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const contactoHref = CONTACTO.email
    ? `mailto:${CONTACTO.email}?subject=Hablemos%20de%20mi%20proyecto`
    : "#contacto";

  return (
    <>
      {/* Cabecera */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-violet-night/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#inicio" aria-label="Fullkod, inicio">
            <Logo className="h-7 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 font-display text-sm text-white/80 md:flex">
            <a href="#servicios" className="hover:text-gold">Servicios</a>
            <a href="#enfoque" className="hover:text-gold">Cómo trabajamos</a>
            <a href="#contacto" className="hover:text-gold">Contacto</a>
          </nav>
          <a
            href={contactoHref}
            className="rounded-full bg-gold px-4 py-2 font-display text-sm font-semibold text-ink hover:brightness-105"
          >
            Hablemos
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-violet-night text-white"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-violet/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl gap-16 px-4 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Software a medida · España y Latinoamérica
              </p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                Full solutions.
                <br />
                <span className="text-gold">Fully coded.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                Soluciones de software completas para cualquier negocio.
                Código a medida, de la primera idea a la operación diaria, con
                un solo equipo responsable de todo.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <BotonPrincipal href={contactoHref}>Cuéntanos tu proyecto</BotonPrincipal>
                <a
                  href="#servicios"
                  className="font-display text-base font-semibold text-white/90 underline-offset-8 hover:text-gold hover:underline"
                >
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Tarjeta de código: el tono técnico de la marca */}
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-ink/70 p-6 shadow-2xl shadow-black/40">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-gold" />
                </div>
                <pre className="overflow-x-auto font-mono text-[0.8rem] leading-7 text-white/85 sm:text-sm">
                  <code>
                    <span className="text-white/40">{"// tu proyecto, de principio a fin"}</span>
                    {"\n"}
                    <span className="text-violet-200">const</span> negocio{" "}
                    <span className="text-white/50">=</span>{" "}
                    <span className="text-violet-200">await</span> fullkod.
                    <span className="text-gold">construir</span>({"{"}
                    {"\n  "}alcance: <span className="text-gold">&quot;completo&quot;</span>,
                    {"\n  "}equipo: <span className="text-gold">&quot;uno&quot;</span>,
                    {"\n  "}codigo: <span className="text-gold">&quot;a medida&quot;</span>
                    {"\n"}
                    {"});"}
                    {"\n\n"}
                    <span className="text-white/40">{"// listo para crecer"}</span>
                    {"\n"}
                    <span className="text-violet-200">await</span> negocio.
                    <span className="text-gold">escalar</span>();
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-background py-24">
          <div className="mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet">
              Lo que hacemos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              Un solo equipo para toda la solución
            </h2>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {servicios.map((s) => (
                <article
                  key={s.n}
                  className="group rounded-2xl border border-violet/10 bg-lavender/60 p-8 transition hover:-translate-y-1 hover:border-violet/30 hover:bg-lavender"
                >
                  <span className="font-mono text-sm text-violet">{s.n}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {s.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate">{s.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Enfoque */}
        <section id="enfoque" className="bg-violet-night py-24 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Cómo trabajamos
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Claro desde el primer día, sin sorpresas al final
            </h2>

            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {pasos.map((p, i) => (
                <li key={p.titulo} className="border-t border-gold/40 pt-6">
                  <span className="font-mono text-sm text-gold">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-white/70">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="bg-cream py-24">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              ¿Tienes un negocio que necesita software a medida?
            </h2>
            <div className="shrink-0">
              <a
                href={contactoHref}
                className="inline-flex items-center justify-center rounded-full bg-violet px-7 py-4 font-display text-base font-semibold text-white transition hover:bg-violet-night"
              >
                Hablemos
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Contacto y pie */}
      <footer id="contacto" className="bg-violet-night text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo className="h-9 w-auto" />
            <p className="mt-6 max-w-sm font-display text-xl text-white/80">
              Full solutions. <span className="text-gold">Fully coded.</span>
            </p>
          </div>
          <div className="space-y-3 text-white/75 md:text-right">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Contacto</p>
            {CONTACTO.email ? (
              <a href={`mailto:${CONTACTO.email}`} className="block text-lg hover:text-gold">
                {CONTACTO.email}
              </a>
            ) : null}
            {CONTACTO.linkedin ? (
              <a href={CONTACTO.linkedin} className="block text-lg hover:text-gold">
                LinkedIn
              </a>
            ) : null}
            <p>España y Latinoamérica</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-white/50 md:flex-row md:justify-between">
            <p>© 2026 Fullkod. Todos los derechos reservados.</p>
            <p>Código a medida, hecho con cuidado.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
