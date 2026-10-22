import Link from "next/link";
import { Simbolo } from "@/components/simbolo";

export default function NoEncontrada() {
  return (
    <section className="flex min-h-[80vh] items-center bg-violet-night pt-16 text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <Simbolo animado className="h-32 w-32" />
        <p className="mt-10 font-mono text-sm uppercase tracking-[0.22em] text-gold">Error 404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          Esta página no existe
        </h1>
        <p className="mt-5 text-lg text-white/70">
          Puede que el enlace esté mal o que la hayamos movido.
        </p>
        <Link
          href="/"
          className="boton-oro mt-10 rounded-full bg-gold px-8 py-4 font-display font-semibold text-ink"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
