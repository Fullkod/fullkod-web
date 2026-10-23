"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACT, whatsappLink } from "@/lib/contact";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const field =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/40 transition focus:border-gold focus:bg-white/[0.1] focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ kind: "error", message: body.error ?? "No pudimos enviar el mensaje." });
        return;
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: "No hay conexión. Inténtalo de nuevo en un momento." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-gold/40 bg-white/[0.06] p-10 text-center">
        <p className="font-display text-3xl font-semibold text-gold">¡Mensaje recibido!</p>
        <p className="mt-4 text-lg text-white/80">
          Gracias por escribirnos. Te respondemos en cuanto lo leamos.
        </p>
      </div>
    );
  }

  const whatsapp = whatsappLink("Hola, quiero hablar de un proyecto con Fullkod.");

  return (
    <form onSubmit={submit} className="grid gap-4 text-left" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">Nombre</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Tu nombre" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">Correo</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="tu@correo.com"
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">Empresa o negocio (opcional)</span>
        <input name="company" maxLength={150} autoComplete="organization" className={field} placeholder="Nombre del negocio" />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">¿Qué necesitas?</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={`${field} resize-y`}
          placeholder="Cuéntanos tu negocio y qué te gustaría resolver."
        />
      </label>

      {/* Honeypot for bots: hidden from people */}
      <label className="hidden" aria-hidden="true">
        Sitio web
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="flex items-start gap-3 text-sm text-white/75">
        <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 accent-[#F2B705]" />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacy" className="text-gold underline underline-offset-4">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      {status.kind === "error" ? (
        <p role="alert" className="rounded-2xl bg-white/10 px-5 py-4 text-sm text-white">
          {status.message}
          {CONTACT.email ? (
            <>
              {" "}También puedes escribirnos a{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-gold underline">
                {CONTACT.email}
              </a>
              .
            </>
          ) : null}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="gold-button rounded-full bg-gold px-9 py-4 font-display text-lg font-semibold text-ink disabled:cursor-wait disabled:opacity-70"
        >
          {status.kind === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
        {whatsapp ? (
          <a href={whatsapp} className="underline-link font-display font-semibold text-white/90">
            o escríbenos por WhatsApp →
          </a>
        ) : null}
      </div>
    </form>
  );
}
