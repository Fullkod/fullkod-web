// Receives the contact form and forwards it by email with Resend (REST API, no SDK).
// Environment variables (see .env.example):
//   RESEND_API_KEY  Resend API key
//   CONTACT_TO      address that receives the messages
//   CONTACT_FROM    sender verified in Resend (defaults to Resend's testing sender)
// Without RESEND_API_KEY or CONTACT_TO it answers 503 and the form explains it.

import { DEFAULT_LOCALE, fmt, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const LIMITS = { name: 100, email: 200, company: 150, message: 4000 };

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: getDictionary(DEFAULT_LOCALE).api.badFormat }, { status: 400 });
  }
  const lang = typeof data.lang === "string" && hasLocale(data.lang) ? data.lang : DEFAULT_LOCALE;
  const t = getDictionary(lang).api;

  // Honeypot: if it comes filled in, it is a bot. Answer as if everything went fine.
  if (text(data.website, 200)) return Response.json({ ok: true });

  const name = text(data.name, LIMITS.name);
  const email = text(data.email, LIMITS.email);
  const company = text(data.company, LIMITS.company);
  const message = text(data.message, LIMITS.message);

  if (!name || !message || message.length < 10) {
    return Response.json({ error: t.missingFields }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: t.invalidEmail }, { status: 400 });
  }
  if (data.privacy !== "on") {
    return Response.json({ error: t.privacyRequired }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!apiKey || !to) {
    return Response.json(
      { error: t.inactive },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Fullkod web <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: fmt(t.subject, { name }),
      text: [
        `${t.labelName}: ${name}`,
        `${t.labelEmail}: ${email}`,
        `${t.labelCompany}: ${company || "—"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend responded", res.status, await res.text().catch(() => ""));
    return Response.json(
      { error: t.sendFailed },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
