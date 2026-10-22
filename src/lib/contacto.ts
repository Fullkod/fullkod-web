// Datos de contacto que muestra la web.
// Quedan en null hasta que estén decididos (correo corporativo: ver hub, pendiente de CREA0009).
// `whatsapp`: número en formato internacional sin «+» ni espacios (p. ej. "34600000000").
// Cuando haya datos, ponlos aquí y los botones y el pie los usarán automáticamente.
export const CONTACTO = {
  email: null as string | null,
  whatsapp: null as string | null,
  linkedin: null as string | null,
};

export function enlaceWhatsapp(texto: string) {
  if (!CONTACTO.whatsapp) return null;
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`;
}
