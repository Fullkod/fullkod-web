import { DRAFT } from "@/lib/legal";
import { fmt } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function LegalPage({
  title,
  dict,
  children,
}: {
  title: string;
  dict: Dictionary["legal"];
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-violet-night pb-16 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">{dict.eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
          <p className="mt-4 text-white/60">{fmt(dict.lastUpdated, { date: dict.updatedAt })}</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="prose mx-auto max-w-3xl px-4">
          {DRAFT ? (
            <p role="note" className="rounded-2xl border border-dashed border-violet/40 bg-lavender px-5 py-4 text-sm !text-violet">
              {dict.draftNote}
            </p>
          ) : null}
          {children}
        </div>
      </section>
    </>
  );
}

// A legal datum; renders the pending placeholder while it is still unknown.
export function Datum({ value, pending }: { value: string | null; pending: string }) {
  return <strong>{value ?? pending}</strong>;
}
