"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Screenshot } from "@/content/projects";

// Real app screenshot inside a browser frame (desktop) or a phone frame (mobile).
// Clicking a screenshot enlarges it over the page; it closes with the X, with Escape or by clicking outside.

export function DesktopFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
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
          priority={priority}
        />
      </div>
    </div>
  );
}

export function MobileFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[230px] rounded-[2rem] border-[6px] border-ink bg-ink shadow-2xl shadow-black/30">
      <div className="relative aspect-[390/844] w-full overflow-hidden rounded-[1.5rem] bg-white">
        <Image src={src} alt={alt} fill sizes="230px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Lightbox({
  screenshots,
  index,
  onChange,
  onClose,
}: {
  screenshots: Screenshot[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const total = screenshots.length;
  const current = screenshots[index];
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const go = useCallback((delta: number) => onChange((index + delta + total) % total), [onChange, index, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, go]);

  const sideButton =
    "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-3xl leading-none text-white transition hover:bg-white/30";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const dx = e.changedTouches[0].clientX - touchStart;
        setTouchStart(null);
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <button
        type="button"
        onClick={onClose}
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
            className={`${sideButton} left-3`}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            className={`${sideButton} right-3`}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            ›
          </button>
        </>
      ) : null}
      <figure className="flex max-h-full max-w-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="max-h-[82vh] w-auto max-w-[88vw] rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="text-center font-mono text-xs uppercase tracking-[0.15em] text-white/70">
          {current.alt} · {index + 1}/{total}
        </figcaption>
      </figure>
    </div>
  );
}

export function Gallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const desktop = screenshots.filter((c) => c.kind === "desktop");
  const mobile = screenshots.filter((c) => c.kind === "mobile");
  // Same order as on screen: desktop first, then mobile.
  const all = [...desktop, ...mobile];
  return (
    <div className="space-y-16">
      {desktop.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2">
          {desktop.map((c) => (
            <figure key={c.src}>
              <button
                type="button"
                onClick={() => setOpenIndex(all.indexOf(c))}
                aria-label={`Ampliar: ${c.alt}`}
                className="block w-full cursor-zoom-in text-left transition hover:-translate-y-1"
              >
                <DesktopFrame src={c.src} alt={c.alt} />
              </button>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-white/60">
                {c.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      {mobile.length > 0 ? (
        <div>
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-gold">En el móvil</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {mobile.map((c) => (
              <figure key={c.src}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(all.indexOf(c))}
                  aria-label={`Ampliar: ${c.alt}`}
                  className="block w-full cursor-zoom-in transition hover:-translate-y-1"
                >
                  <MobileFrame src={c.src} alt={c.alt} />
                </button>
                <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-[0.15em] text-white/60">
                  {c.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
      {openIndex !== null ? (
        <Lightbox screenshots={all} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      ) : null}
    </div>
  );
}
