"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACT, whatsappLink } from "@/lib/contact";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

const field =
  "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/40 transition focus:border-gold focus:bg-white/[0.1] focus:outline-none";

export function ContactForm({ lang, dict }: { lang: Locale; dict: Dictionary["form"] }) {
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
        body: JSON.stringify({ ...data, lang }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({ kind: "error", message: body.error ?? dict.errorDefault });
        return;
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch {
      setStatus({ kind: "error", message: dict.errorNetwork });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-gold/40 bg-white/[0.06] p-10 text-center">
        <p className="font-display text-3xl font-semibold text-gold">{dict.sentTitle}</p>
        <p className="mt-4 text-lg text-white/80">{dict.sentText}</p>
      </div>
    );
  }

  const whatsapp = whatsappLink(dict.whatsappText);

  return (
    <form onSubmit={submit} className="grid gap-4 text-left" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">{dict.name}</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} placeholder={dict.namePlaceholder} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-white/80">{dict.email}</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder={dict.emailPlaceholder}
          />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">{dict.company}</span>
        <input name="company" maxLength={150} autoComplete="organization" className={field} placeholder={dict.companyPlaceholder} />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-white/80">{dict.message}</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          className={`${field} resize-y`}
          placeholder={dict.messagePlaceholder}
        />
      </label>

      {/* Honeypot for bots: hidden from people */}
      <label className="hidden" aria-hidden="true">
        {dict.honeypot}
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="flex items-start gap-3 text-sm text-white/75">
        <input name="privacy" type="checkbox" required className="mt-1 h-4 w-4 accent-[#F2B705]" />
        <span>
          {dict.privacyPrefix}{" "}
          <Link href={`/${lang}/privacy`} className="text-gold underline underline-offset-4">
            {dict.privacyLink}
          </Link>
          .
        </span>
      </label>

      {status.kind === "error" ? (
        <p role="alert" className="rounded-2xl bg-white/10 px-5 py-4 text-sm text-white">
          {status.message}
          {CONTACT.email ? (
            <>
              {" "}{dict.errorEmailHint}{" "}
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
          {status.kind === "sending" ? dict.sending : dict.submit}
        </button>
        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link font-display font-semibold text-white/90"
          >
            {dict.whatsapp}
          </a>
        ) : null}
      </div>
    </form>
  );
}
