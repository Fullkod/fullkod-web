import type { Metadata } from "next";
import Link from "next/link";
import { Datum, LegalPage } from "@/components/legal-page";
import { OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        <Datum value={OWNER.name} />, titular de Fullkod. Puedes escribirnos a{" "}
        <Datum value={OWNER.email} />.
      </p>

      <h2>Qué datos tratamos y para qué</h2>
      <p>
        Solo tratamos los datos que nos envías con el formulario de contacto: nombre, correo
        electrónico, empresa (si la indicas) y el contenido de tu mensaje. Los usamos para
        responder a tu consulta y, si nos lo pides, para prepararte una propuesta.
      </p>
      <p>
        No usamos tus datos para enviarte publicidad ni los vendemos o cedemos a terceros con fines
        comerciales.
      </p>

      <h2>Base legal</h2>
      <p>
        Tu consentimiento, que nos das al marcar la casilla del formulario, y la aplicación de
        medidas precontractuales cuando nos pides una propuesta (artículo 6.1.a y 6.1.b del RGPD).
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        El tiempo necesario para atender tu consulta. Si llegamos a trabajar juntos, durante la
        relación y los plazos que exija la ley. Si no, los borramos cuando dejan de ser necesarios.
      </p>

      <h2>Quién más interviene</h2>
      <p>
        Para que el sitio funcione nos apoyamos en proveedores que tratan datos por nuestra cuenta,
        con contratos que les obligan a protegerlos:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>: alojamiento del sitio y estadísticas de visitas agregadas y
          anónimas, sin cookies.
        </li>
        <li>
          <strong>Resend</strong>: envío a nuestro correo de los mensajes del formulario.
        </li>
      </ul>
      <p>
        Ambos pueden tratar datos fuera del Espacio Económico Europeo, con las garantías que prevé
        el RGPD, como las cláusulas contractuales tipo de la Comisión Europea.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos acceder a tus datos, rectificarlos, suprimirlos, oponerte a su tratamiento,
        limitarlo o llevártelos a otro servicio, y retirar tu consentimiento en cualquier momento.
        Escríbenos a <Datum value={OWNER.email} /> indicando qué derecho quieres ejercer.
      </p>
      <p>
        Si crees que no hemos tratado bien tus datos, puedes reclamar ante la autoridad de protección
        de datos de tu país (en España, la <a href="https://www.aepd.es">AEPD</a>).
      </p>

      <h2>Cookies</h2>
      <p>
        Consulta la <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalPage>
  );
}
