// Site owner data for the legal notice and the privacy policy (LSSI and GDPR).
// `name` and `email` are required; a null one renders as a "pending" placeholder. `taxId`, `address` and
// `registry` are optional and only shown when set. While DRAFT is true the legal pages show a draft notice.
// The texts are published as final, but a lawyer still has to review them (see the hub notes).
// Set DRAFT = true to show the "draft" banner again on the legal pages.
// The "last updated" date is in the dictionaries (legal.updatedAt).
export const DRAFT = false;

export const OWNER = {
  name: "Roberto Gabriel Cabrera Álvarez" as string | null, // legal name or owner's name
  taxId: null as string | null, // optional: shown only when set
  address: null as string | null, // optional: shown only when set
  email: "robert.cabrer92@gmail.com" as string | null,
  registry: null as string | null, // optional: company registry data, if incorporated
};
