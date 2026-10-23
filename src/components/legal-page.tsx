import { DRAFT, LAST_UPDATED } from "@/lib/legal";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="bg-violet-night pb-16 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">Legal</p>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-4 text-white/60">Última actualización: {LAST_UPDATED}</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="prose mx-auto max-w-3xl px-4">
          {DRAFT ? (
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

// A legal datum; renders "[pendiente]" while it is still unknown.
export function Datum({ value }: { value: string | null }) {
  return <strong>{value ?? "[pendiente]"}</strong>;
}
