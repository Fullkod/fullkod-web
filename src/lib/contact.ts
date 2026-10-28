// Contact details shown on the site.
// Null values are hidden. The email is a Resend inbox (see .titan/memory/reference/correo-fullkod-resend.md).
// `whatsapp`: number in international format, without "+" or spaces (e.g. "34600000000").
// Once set, the buttons and the footer pick them up automatically.
export const CONTACT = {
  email: "contact@fullkod.com" as string | null,
  whatsapp: "5353077035" as string | null,
  linkedin: null as string | null,
};

export function whatsappLink(text: string) {
  if (!CONTACT.whatsapp) return null;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
