import Image from "next/image";
import Link from "next/link";
import { CONTACTO } from "@/lib/contacto";
import { PROYECTOS } from "@/content/proyectos";

export function Pie() {
  return (
    <footer className="bg-violet-night text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
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
          <p className="mt-3 text-sm text-white/60">España y Latinoamérica</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Proyectos</p>
          <ul className="mt-5 space-y-3 text-white/75">
            {PROYECTOS.map((p) => (
              <li key={p.slug}>
                <Link href={`/proyectos/${p.slug}`} className="enlace-subrayado">
                  {p.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Fullkod</p>
          <ul className="mt-5 space-y-3 text-white/75">
            <li><Link href="/#servicios" className="enlace-subrayado">Servicios</Link></li>
            <li><Link href="/#equipo" className="enlace-subrayado">Equipo</Link></li>
            <li><Link href="/#preguntas" className="enlace-subrayado">Preguntas frecuentes</Link></li>
            <li><Link href="/#contacto" className="enlace-subrayado">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Contacto</p>
          <ul className="mt-5 space-y-3 text-white/75">
            {CONTACTO.email ? (
              <li>
                <a href={`mailto:${CONTACTO.email}`} className="enlace-subrayado">
                  {CONTACTO.email}
                </a>
              </li>
            ) : null}
            {CONTACTO.whatsapp ? (
              <li>
                <a href={`https://wa.me/${CONTACTO.whatsapp}`} className="enlace-subrayado">
                  WhatsApp
                </a>
              </li>
            ) : null}
            {CONTACTO.linkedin ? (
              <li>
                <a href={CONTACTO.linkedin} className="enlace-subrayado">
                  LinkedIn
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/#contacto" className="enlace-subrayado">
                Escríbenos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fullkod. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/aviso-legal" className="enlace-subrayado">Aviso legal</Link></li>
            <li><Link href="/privacidad" className="enlace-subrayado">Privacidad</Link></li>
            <li><Link href="/cookies" className="enlace-subrayado">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
