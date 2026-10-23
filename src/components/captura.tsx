"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Captura } from "@/content/proyectos";

// Captura real de una app dentro de un marco de navegador (escritorio) o de teléfono (móvil).
// Al pulsar una captura se amplía encima de la página; se cierra con la X, con Escape o pulsando fuera.

export function MarcoEscritorio({ src, alt, prioridad = false }: { src: string; alt: string; prioridad?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/30">
      <div className="flex items-center gap-1.5 bg-black/5 px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-black/20" />
        <span className="h-2 w-2 rounded-full bg-black/20" />
        <span className="h-2 w-2 rounded-full bg-black/20" />
      </div>
      <div className="relative aspect-[1440/840] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-cover object-top"
          priority={prioridad}
        />
      </div>
    </div>
  );
}

export function MarcoMovil({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[230px] rounded-[2rem] border-[6px] border-ink bg-ink shadow-2xl shadow-black/30">
      <div className="relative aspect-[390/844] w-full overflow-hidden rounded-[1.5rem] bg-white">
        <Image src={src} alt={alt} fill sizes="230px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Visor({
  capturas,
  indice,
  alCambiar,
  alCerrar,
}: {
  capturas: Captura[];
  indice: number;
  alCambiar: (i: number) => void;
  alCerrar: () => void;
}) {
  const total = capturas.length;
  const captura = capturas[indice];
  const [inicioToque, setInicioToque] = useState<number | null>(null);
  const ir = useCallback((delta: number) => alCambiar((indice + delta + total) % total), [alCambiar, indice, total]);

  useEffect(() => {
    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") alCerrar();
      else if (e.key === "ArrowRight") ir(1);
      else if (e.key === "ArrowLeft") ir(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", alTeclear);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", alTeclear);
    };
  }, [alCerrar, ir]);

  const botonLateral =
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition hover:bg-white/30";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={captura.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={alCerrar}
      onTouchStart={(e) => setInicioToque(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (inicioToque === null) return;
        const dx = e.changedTouches[0].clientX - inicioToque;
        setInicioToque(null);
        if (Math.abs(dx) > 50) ir(dx < 0 ? 1 : -1);
      }}
    >
      <button
        type="button"
        onClick={alCerrar}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-2xl leading-none text-white transition hover:bg-white/30"
      >
        ×
      </button>
      {total > 1 ? (
        <>
          <button
            type="button"
            aria-label="Anterior"
            className={`${botonLateral} left-3`}
            onClick={(e) => {
              e.stopPropagation();
              ir(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className={`${botonLateral} right-3`}
            onClick={(e) => {
              e.stopPropagation();
              ir(1);
            }}
          >
            ›
          </button>
        </>
      ) : null}
      <figure className="flex max-h-full max-w-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={captura.src}
          src={captura.src}
          alt={captura.alt}
          className="max-h-[82vh] w-auto max-w-[88vw] rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="text-center font-mono text-xs uppercase tracking-[0.15em] text-white/70">
          {captura.alt} · {indice + 1}/{total}
        </figcaption>
      </figure>
    </div>
  );
}

export function Galeria({ capturas }: { capturas: Captura[] }) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const escritorio = capturas.filter((c) => c.tipo === "escritorio");
  const movil = capturas.filter((c) => c.tipo === "movil");
  // Mismo orden que en pantalla: primero las de escritorio y luego las de móvil.
  const todas = [...escritorio, ...movil];
  return (
    <div className="space-y-16">
      {escritorio.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2">
          {escritorio.map((c) => (
            <figure key={c.src}>
              <button
                type="button"
                onClick={() => setAbierta(todas.indexOf(c))}
                aria-label={`Ampliar: ${c.alt}`}
                className="block w-full cursor-zoom-in text-left transition hover:-translate-y-1"
              >
                <MarcoEscritorio src={c.src} alt={c.alt} />
              </button>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-white/60">
                {c.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      {movil.length > 0 ? (
        <div>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-gold">En el móvil</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {movil.map((c) => (
              <figure key={c.src}>
                <button
                  type="button"
                  onClick={() => setAbierta(todas.indexOf(c))}
                  aria-label={`Ampliar: ${c.alt}`}
                  className="block w-full cursor-zoom-in transition hover:-translate-y-1"
                >
                  <MarcoMovil src={c.src} alt={c.alt} />
                </button>
                <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-[0.15em] text-white/60">
                  {c.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
      {abierta !== null ? (
        <Visor capturas={todas} indice={abierta} alCambiar={setAbierta} alCerrar={() => setAbierta(null)} />
      ) : null}
    </div>
  );
}
