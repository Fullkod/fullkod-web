import { ACTUALIZADO, BORRADOR } from "@/lib/legal";

export function PaginaLegal({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-violet-night pb-16 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Legal</p>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">{titulo}</h1>
          <p className="mt-4 text-white/60">Última actualización: {ACTUALIZADO}</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="prosa mx-auto max-w-3xl px-4">
          {BORRADOR ? (
            <p role="note" className="rounded-2xl border border-dashed border-violet/40 bg-lavender px-5 py-4 text-sm !text-violet">
              Borrador: este texto está pendiente de completar y revisar. Los datos marcados como
              «[pendiente]» se añadirán antes de publicar la web.
            </p>
          ) : null}
          {children}
        </div>
      </section>
    </>
  );
}

export function Dato({ valor }: { valor: string | null }) {
  return <strong>{valor ?? "[pendiente]"}</strong>;
}
