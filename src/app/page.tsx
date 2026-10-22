import Image from "next/image";
import { Barra, Simbolo } from "@/components/simbolo";
import { Mockup } from "@/components/mockup";
import { CONTACTO } from "@/lib/contacto";

const proyectos = [
  {
    nombre: "LensSpace",
    texto:
      "Gestión completa para ópticas: clientes, recetas, ventas, pagos, producción y entregas, en un solo panel.",
    etiquetas: ["Multiempresa", "Pagos", "Producción"],
    tipo: "panel" as const,
    acento: "#F2B705",
    fondo: "#FFFFFF",
    texto_color: "#17132A",
  },
  {
    nombre: "Turno Flash",
    texto:
      "Turnos y venta de pasajes para peluquerías, barberías, clínicas y transportistas: panel web, app Android y página pública.",
    etiquetas: ["Turnos", "Android", "Pasajes"],
    tipo: "movil" as const,
    acento: "#F2B705",
    fondo: "#17132A",
    texto_color: "#FFFFFF",
  },
  {
    nombre: "Turnia",
    texto:
      "Turnos y horarios para entornos de salud: calendario interactivo, roles y exportación, en web y apps iOS y Android.",
    etiquetas: ["Calendario", "Roles", "iOS y Android"],
    tipo: "panel" as const,
    acento: "#5B21B6",
    fondo: "#EFEAFB",
    texto_color: "#17132A",
  },
  {
    nombre: "Follow It",
    texto:
      "Gestión de repartos con tres roles —negocio, mensajero y cliente— y seguimiento en tiempo real.",
    etiquetas: ["Repartos", "Tiempo real", "Móvil"],
    tipo: "movil" as const,
    acento: "#F2B705",
    fondo: "#5B21B6",
    texto_color: "#FFFFFF",
  },
  {
    nombre: "klauShop",
    texto:
      "Tienda en línea con CMS propio: catálogo, pedidos y panel de administración hechos a medida.",
    etiquetas: ["E-commerce", "CMS propio", "Pedidos"],
    tipo: "panel" as const,
    acento: "#5B21B6",
    fondo: "#FDF6DD",
    texto_color: "#17132A",
  },
];

const servicios = [
  {
    n: "01",
    titulo: "Aplicaciones web y móviles",
    texto:
      "Paneles, portales y apps Android/iOS diseñados alrededor de cómo trabaja tu equipo.",
  },
  {
    n: "02",
    titulo: "Plataformas SaaS y e-commerce",
    texto:
      "Multiempresa, pagos, pedidos y reportes propios, sin depender de plantillas cerradas.",
  },
  {
    n: "03",
    titulo: "Automatización e IA",
    texto:
      "Procesos repetitivos convertidos en flujos que funcionan solos, con asistentes que usan tus datos.",
  },
  {
    n: "04",
    titulo: "Integraciones y mantenimiento",
    texto:
      "Conectamos tu software con lo que ya usas, y lo mantenemos vivo y mejorando.",
  },
];

const pasos = [
  {
    titulo: "Escuchamos",
    texto:
      "Entendemos el negocio y qué significa «listo» para ti antes de escribir una línea de código.",
  },
  {
    titulo: "Construimos",
    texto:
      "Entregas cortas y revisables. Ves avances reales cada semana, no al final.",
  },
  {
    titulo: "Acompañamos",
    texto:
      "Despliegue, formación y soporte. El software sigue creciendo con tu negocio.",
  },
];

const ambitos = [
  "Ópticas",
  "Clínicas",
  "Peluquerías",
  "Repartos",
  "E-commerce",
  "Turnos",
  "Automatización",
  "IA",
];

function Etiqueta({ children, oscuro = false }: { children: React.ReactNode; oscuro?: boolean }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.22em] ${
        oscuro ? "text-gold" : "text-violet"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  const contactoHref = CONTACTO.email
    ? `mailto:${CONTACTO.email}?subject=Hablemos%20de%20mi%20proyecto`
    : "#contacto";

  return (
    <>
      {/* Cabecera */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-violet-night/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#inicio" aria-label="Fullkod, inicio" className="flex items-center gap-2.5">
            <Simbolo className="h-7 w-7" />
            <Image
              src="/brand/fullkod-wordmark-white.svg"
              alt="Fullkod"
              width={600}
              height={200}
              unoptimized
              className="h-5 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-9 font-display text-sm text-white/80 md:flex">
            <a href="#proyectos" className="enlace-subrayado">Proyectos</a>
            <a href="#servicios" className="enlace-subrayado">Servicios</a>
            <a href="#proceso" className="enlace-subrayado">Cómo trabajamos</a>
          </nav>
          <a
            href={contactoHref}
            className="boton-oro rounded-full bg-gold px-5 py-2 font-display text-sm font-semibold text-ink"
          >
            Hablemos
          </a>
        </div>
      </header>

      <main className="flex-1">
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
                <a
                  href={contactoHref}
                  className="boton-oro rounded-full bg-gold px-8 py-4 font-display text-base font-semibold text-ink"
                >
                  Cuéntanos tu proyecto
                </a>
                <a
                  href="#proyectos"
                  className="enlace-subrayado font-display text-base font-semibold text-white/90"
                >
                  Ver proyectos →
                </a>
              </div>
            </div>

            {/* El símbolo: el < y el > se arman al cargar y flotan */}
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="anillo-giratorio absolute h-[24rem] w-[24rem] rounded-full border border-dashed border-white/15 md:h-[30rem] md:w-[30rem]"
              />
              <div className="simbolo-flota relative">
                <Simbolo animado className="h-64 w-64 drop-shadow-[0_30px_60px_rgba(91,33,182,0.55)] md:h-80 md:w-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-white/10 bg-violet-night py-6 text-white/55">
          <div className="marquee-pista flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em]">
            {[...ambitos, ...ambitos].map((a, i) => (
              <span key={i} className="flex items-center gap-10">
                {a}
                <Barra className="h-4 w-2 shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Proyectos */}
        <section id="proyectos" className="bg-cream py-28 text-ink">
          <div className="mx-auto max-w-6xl px-4">
            <div className="revelar">
              <Etiqueta>Proyectos</Etiqueta>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Software real, en uso todos los días
              </h2>
            </div>

            <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {proyectos.map((p) => (
                <div key={p.nombre} className="revelar">
                  <article className="tarjeta flex h-full flex-col rounded-3xl border border-violet/10 bg-white p-6">
                    <div
                      className="flex items-center justify-center rounded-2xl p-6"
                      style={{ background: p.fondo, color: p.texto_color }}
                    >
                      <Mockup
                        tipo={p.tipo}
                        acento={p.acento}
                        fondo={p.fondo === "#FFFFFF" ? "#FDF6DD" : p.fondo}
                        texto={p.texto_color}
                      />
                    </div>
                    <h3 className="mt-7 font-display text-2xl font-semibold">{p.nombre}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-slate">{p.texto}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {p.etiquetas.map((e) => (
                        <li
                          key={e}
                          className="rounded-full bg-lavender px-3 py-1 font-mono text-xs text-violet"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-violet-night py-28 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="revelar">
              <Etiqueta oscuro>Servicios</Etiqueta>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Un solo equipo para toda la solución
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {servicios.map((s) => (
                <div key={s.n} className="revelar">
                  <article className="tarjeta group rounded-3xl border border-white/10 bg-white/[0.03] p-9 hover:bg-white/[0.06]">
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
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="bg-cream py-28 text-ink">
          <div className="mx-auto max-w-6xl px-4">
            <div className="revelar">
              <Etiqueta>Cómo trabajamos</Etiqueta>
            </div>
            <ol className="mt-16 grid gap-12 md:grid-cols-3">
              {pasos.map((p, i) => (
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

        {/* Llamada a la acción */}
        <section className="relative overflow-hidden bg-violet py-32 text-center text-white">
          <Simbolo className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 opacity-10" />
          <Simbolo className="pointer-events-none absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 opacity-10" />
          <div className="revelar relative mx-auto max-w-3xl px-4">
            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              ¿Tienes un negocio que necesita software a medida?
            </h2>
            <a
              href={contactoHref}
              className="boton-oro mt-12 inline-block rounded-full bg-gold px-9 py-4 font-display text-lg font-semibold text-ink"
            >
              Hablemos
            </a>
          </div>
        </section>
      </main>

      {/* Contacto y pie */}
      <footer id="contacto" className="bg-violet-night text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Image
              src="/brand/fullkod-horizontal-white.svg"
              alt="Fullkod"
              width={992}
              height={256}
              unoptimized
              className="h-10 w-auto"
            />
            <p className="mt-6 max-w-sm font-display text-2xl text-white/80">
              Full solutions. <span className="text-gold">Fully coded.</span>
            </p>
          </div>
          <div className="space-y-3 text-white/75 md:text-right">
            <Etiqueta oscuro>Contacto</Etiqueta>
            {CONTACTO.email ? (
              <a href={`mailto:${CONTACTO.email}`} className="enlace-subrayado block text-lg">
                {CONTACTO.email}
              </a>
            ) : null}
            {CONTACTO.linkedin ? (
              <a href={CONTACTO.linkedin} className="enlace-subrayado block text-lg">
                LinkedIn
              </a>
            ) : null}
            <p>España y Latinoamérica</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-white/50 md:flex-row md:justify-between">
            <p>© 2026 Fullkod. Todos los derechos reservados.</p>
            <p>Full solutions. Fully coded.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
