// Site owner data for the legal notice and the privacy policy (LSSI and GDPR).
// `name` and `email` are required; a null one renders as "[pendiente]". `taxId`, `address` and
// `registry` are optional and only shown when set. While DRAFT is true the legal pages show a draft notice.
// Fill in every field and review the texts (ideally with an advisor) before publishing,
// then set DRAFT = false.
export const DRAFT = true;

export const OWNER = {
  name: "Roberto Gabriel Cabrera Álvarez" as string | null, // legal name or owner's name
  taxId: null as string | null, // optional: shown only when set
  address: null as string | null, // optional: shown only when set
  email: "robert.cabrer92@gmail.com" as string | null,
  registry: null as string | null, // optional: company registry data, if incorporated
};

export const LAST_UPDATED = "22 de octubre de 2026";
