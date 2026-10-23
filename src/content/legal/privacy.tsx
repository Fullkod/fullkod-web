import Link from "next/link";
import { Datum } from "@/components/legal-page";
import { OWNER } from "@/lib/legal";
import type { Locale } from "@/i18n/config";

export function PrivacyBody({ lang, pending }: { lang: Locale; pending: string }) {
  if (lang === "en") {
    return (
      <>
        <h2>Data controller</h2>
        <p>
          <Datum value={OWNER.name} pending={pending} />, owner of Fullkod. You can write to us at{" "}
          <Datum value={OWNER.email} pending={pending} />.
        </p>

        <h2>What data we process and why</h2>
        <p>
          We only process the data you send us through the contact form: name, email address, company (if
          you give it) and the content of your message. We use it to answer your inquiry and, if you ask us
          to, to prepare a proposal for you.
        </p>
        <p>
          We do not use your data to send you advertising, and we do not sell it or hand it over to third
          parties for commercial purposes.
        </p>

        <h2>Legal basis</h2>
        <p>
          Your consent, which you give by ticking the checkbox on the form, and the application of
          pre-contractual measures when you ask us for a proposal (Article 6(1)(a) and 6(1)(b) of the GDPR).
        </p>

        <h2>How long we keep it</h2>
        <p>
          As long as needed to handle your inquiry. If we end up working together, for the duration of the
          relationship and the periods required by law. Otherwise, we delete it when it is no longer needed.
        </p>

        <h2>Who else is involved</h2>
        <p>
          To make the site work we rely on providers that process data on our behalf, under contracts that
          oblige them to protect it:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong>: hosting of the site and aggregated, anonymous visit statistics,
            without cookies.
          </li>
          <li>
            <strong>Resend</strong>: delivery of the form messages to our email.
          </li>
        </ul>
        <p>
          Both may process data outside the European Economic Area, with the safeguards provided by the
          GDPR, such as the European Commission&apos;s standard contractual clauses.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to access your data, correct it, delete it, object to its processing, restrict it
          or take it to another service, and withdraw your consent at any time. Write to us at{" "}
          <Datum value={OWNER.email} pending={pending} /> saying which right you want to exercise.
        </p>
        <p>
          If you believe we have not handled your data properly, you can complain to the data protection
          authority of your country (in Spain, the <a href="https://www.aepd.es">AEPD</a>).
        </p>

        <h2>Cookies</h2>
        <p>
          See the <Link href="/en/cookies">cookie policy</Link>.
        </p>
      </>
    );
  }
  return (
    <>
      <h2>Responsable del tratamiento</h2>
      <p>
        <Datum value={OWNER.name} pending={pending} />, titular de Fullkod. Puedes escribirnos a{" "}
        <Datum value={OWNER.email} pending={pending} />.
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
        Escríbenos a <Datum value={OWNER.email} pending={pending} /> indicando qué derecho quieres ejercer.
      </p>
      <p>
        Si crees que no hemos tratado bien tus datos, puedes reclamar ante la autoridad de protección
        de datos de tu país (en España, la <a href="https://www.aepd.es">AEPD</a>).
      </p>

      <h2>Cookies</h2>
      <p>
        Consulta la <Link href="/es/cookies">política de cookies</Link>.
      </p>
    </>
  );
}
