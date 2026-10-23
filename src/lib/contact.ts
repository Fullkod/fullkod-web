// Contact details shown on the site.
// Stay null until decided (corporate email: see the hub, pending item of CREA0009).
// `whatsapp`: number in international format, without "+" or spaces (e.g. "34600000000").
// Once set, the buttons and the footer pick them up automatically.
export const CONTACT = {
  email: null as string | null,
  whatsapp: "5353077035" as string | null,
  linkedin: null as string | null,
};

export function whatsappLink(text: string) {
  if (!CONTACT.whatsapp) return null;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
