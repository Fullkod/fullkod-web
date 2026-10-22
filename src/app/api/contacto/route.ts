// Recibe el formulario de contacto y lo reenvía por correo con Resend (API REST, sin SDK).
// Variables de entorno (ver .env.example):
//   RESEND_API_KEY      clave de Resend
//   CONTACTO_DESTINO    correo que recibe los mensajes
//   CONTACTO_REMITENTE  remitente verificado en Resend (por defecto, el de pruebas de Resend)
// Sin RESEND_API_KEY o CONTACTO_DESTINO responde 503 y el formulario lo explica.

const LIMITES = { nombre: 100, email: 200, empresa: 150, mensaje: 4000 };

function texto(valor: unknown, max: number) {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ error: "Formato no válido." }, { status: 400 });
  }

  // Campo trampa: si viene relleno es un bot. Respondemos como si todo fuera bien.
  if (texto(datos.sitio, 200)) return Response.json({ ok: true });

  const nombre = texto(datos.nombre, LIMITES.nombre);
  const email = texto(datos.email, LIMITES.email);
  const empresa = texto(datos.empresa, LIMITES.empresa);
  const mensaje = texto(datos.mensaje, LIMITES.mensaje);

  if (!nombre || !mensaje || mensaje.length < 10) {
    return Response.json({ error: "Completa tu nombre y cuéntanos un poco más." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Revisa el correo: no parece válido." }, { status: 400 });
  }
  if (datos.privacidad !== "on") {
    return Response.json({ error: "Necesitamos que aceptes la política de privacidad." }, { status: 400 });
  }

  const clave = process.env.RESEND_API_KEY;
  const destino = process.env.CONTACTO_DESTINO;
  if (!clave || !destino) {
    return Response.json(
      { error: "El formulario aún no está activo. Vuelve a intentarlo pronto." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${clave}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACTO_REMITENTE ?? "Fullkod web <onboarding@resend.dev>",
      to: [destino],
      reply_to: email,
      subject: `Nuevo contacto desde la web: ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        `Correo: ${email}`,
        `Empresa: ${empresa || "—"}`,
        "",
        mensaje,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[contacto] Resend respondió", res.status, await res.text().catch(() => ""));
    return Response.json(
      { error: "No pudimos enviar el mensaje. Inténtalo de nuevo en un momento." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
