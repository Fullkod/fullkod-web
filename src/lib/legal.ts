// Datos del titular para el aviso legal y la privacidad (LSSI y RGPD).
// BORRADOR: los campos en null salen como «[pendiente]» y las páginas legales muestran un aviso.
// Completa todos los campos y revisa los textos (idealmente con un asesor) antes de publicar,
// y entonces pon BORRADOR = false.
export const BORRADOR = true;

export const TITULAR = {
  nombre: null as string | null, // razón social o nombre del titular
  nif: null as string | null,
  domicilio: null as string | null,
  email: null as string | null,
  registro: null as string | null, // datos registrales, si es sociedad
};

export const ACTUALIZADO = "22 de octubre de 2026";
