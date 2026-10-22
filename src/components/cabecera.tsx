"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Simbolo } from "@/components/simbolo";

const ENLACES = [
  { href: "/#proyectos", texto: "Proyectos" },
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#proceso", texto: "Cómo trabajamos" },
  { href: "/#equipo", texto: "Equipo" },
  { href: "/#preguntas", texto: "Preguntas" },
];

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);

  // Bloquea el scroll de la página mientras el menú móvil está abierto y lo cierra con Escape.
  useEffect(() => {
    if (!abierto) return;
    const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", cerrar);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", cerrar);
    };
  }, [abierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-violet-night/75 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="Fullkod, inicio" className="flex items-center gap-2.5">
          <Simbolo className="h-7 w-7" />
          <Image
            src="/brand/fullkod-wordmark-white.svg"
            alt="Fullkod"
            width={600}
            height={200}
            unoptimized
            className="h-5 w-auto"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 font-display text-sm text-white/80 lg:flex">
          {ENLACES.map((e) => (
            <Link key={e.href} href={e.href} className="enlace-subrayado">
              {e.texto}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contacto"
            className="boton-oro hidden rounded-full bg-gold px-5 py-2 font-display text-sm font-semibold text-ink sm:inline-block"
          >
            Hablemos
          </Link>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition duration-300 ${
                  abierto ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-gold transition duration-300 ${
                  abierto ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-white transition duration-300 ${
                  abierto ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        hidden={!abierto}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-violet-night lg:hidden"
      >
        <nav aria-label="Móvil" className="mx-auto flex max-w-6xl flex-col px-4 py-6">
          {ENLACES.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={() => setAbierto(false)}
              className="menu-entrada flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-semibold"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {e.texto}
              <span aria-hidden="true" className="text-gold">→</span>
            </Link>
          ))}
          <Link
            href="/#contacto"
            onClick={() => setAbierto(false)}
            className="boton-oro mt-8 rounded-full bg-gold px-6 py-4 text-center font-display text-lg font-semibold text-ink"
          >
            Hablemos
          </Link>
        </nav>
      </div>
    </header>
  );
}
