import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { PROJECTS } from "@/content/projects";
import { FooterColumn } from "@/components/footer-column";

export function Footer() {
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
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Para negocios de todo el mundo. Construimos aplicaciones completas
            para tu negocio: desde la primera idea hasta la operación diaria,
            con un solo equipo responsable de todo.
          </p>
        </div>

        <FooterColumn title="Proyectos">
          <ul className="space-y-3 text-white/75">
            {PROJECTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="underline-link">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Fullkod">
          <ul className="space-y-3 text-white/75">
            <li><Link href="/#services" className="underline-link">Servicios</Link></li>
            <li><Link href="/#team" className="underline-link">Equipo</Link></li>
            <li><Link href="/#faq" className="underline-link">Preguntas frecuentes</Link></li>
            <li><Link href="/#contact" className="underline-link">Contacto</Link></li>
          </ul>
        </FooterColumn>

        <FooterColumn title="Contacto">
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
                <a href={`https://wa.me/${CONTACT.whatsapp}`} className="underline-link">
                  WhatsApp
                </a>
              </li>
            ) : null}
            {CONTACT.linkedin ? (
              <li>
                <a href={CONTACT.linkedin} className="underline-link">
                  LinkedIn
                </a>
              </li>
            ) : null}
            <li>
              <Link href="/#contact" className="underline-link">
                Escríbenos
              </Link>
            </li>
          </ul>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Fullkod. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/legal-notice" className="underline-link">Aviso legal</Link></li>
            <li><Link href="/privacy" className="underline-link">Privacidad</Link></li>
            <li><Link href="/cookies" className="underline-link">Cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
