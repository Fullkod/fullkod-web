"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACTO, enlaceWhatsapp } from "@/lib/contacto";

type Estado =
  | { tipo: "inicial" }
  | { tipo: "enviando" }
  | { tipo: "enviado" }
  | { tipo: "error"; mensaje: string };

const campo =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/40 transition focus:border-gold focus:bg-white/[0.1] focus:outline-none";

export function FormularioContacto() {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formulario = e.currentTarget;
    const datos = Object.fromEntries(new FormData(formulario));
    setEstado({ tipo: "enviando" });
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const cuerpo = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setEstado({ tipo: "error", mensaje: cuerpo.error ?? "No pudimos enviar el mensaje." });
        return;
      }
      formulario.reset();
      setEstado({ tipo: "enviado" });
    } catch {
      setEstado({ tipo: "error", mensaje: "No hay conexión. Inténtalo de nuevo en un momento." });
    }
  }

  if (estado.tipo === "enviado") {
    return (
      <div role="status" className="rounded-3xl border border-gold/40 bg-white/[0.06] p-10 text-center">
        <p className="font-display text-3xl font-semibold text-gold">¡Mensaje recibido!</p>
        <p className="mt-4 text-lg text-white/80">
          Gracias por escribirnos. Te respondemos en cuanto lo leamos.
        </p>
      </div>
    );
  }

  const whatsapp = enlaceWhatsapp("Hola, quiero hablar de un proyecto con Fullkod.");

  return (
    <form onSubmit={enviar} className="grid gap-4 text-left" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">Nombre</span>
          <input name="nombre" required maxLength={100} autoComplete="name" className={campo} placeholder="Tu nombre" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">Correo</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={campo}
            placeholder="tu@correo.com"
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">Empresa o negocio (opcional)</span>
        <input name="empresa" maxLength={150} autoComplete="organization" className={campo} placeholder="Nombre del negocio" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">¿Qué necesitas?</span>
        <textarea
          name="mensaje"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={`${campo} resize-y`}
          placeholder="Cuéntanos tu negocio y qué te gustaría resolver."
        />
      </label>

      {/* Campo trampa para bots: oculto a las personas */}
      <label className="hidden" aria-hidden="true">
        Sitio web
        <input name="sitio" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="flex items-start gap-3 text-sm text-white/75">
        <input name="privacidad" type="checkbox" required className="mt-1 h-4 w-4 accent-[#F2B705]" />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacidad" className="text-gold underline underline-offset-4">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      {estado.tipo === "error" ? (
        <p role="alert" className="rounded-2xl bg-white/10 px-5 py-4 text-sm text-white">
          {estado.mensaje}
          {CONTACTO.email ? (
            <>
              {" "}También puedes escribirnos a{" "}
              <a href={`mailto:${CONTACTO.email}`} className="text-gold underline">
                {CONTACTO.email}
              </a>
              .
            </>
          ) : null}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={estado.tipo === "enviando"}
          className="boton-oro rounded-full bg-gold px-9 py-4 font-display text-lg font-semibold text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {estado.tipo === "enviando" ? "Enviando…" : "Enviar mensaje"}
        </button>
        {whatsapp ? (
          <a href={whatsapp} className="enlace-subrayado font-display font-semibold text-white/90">
            o escríbenos por WhatsApp →
          </a>
        ) : null}
      </div>
    </form>
  );
}
