import { Datum } from "@/components/legal-page";
import { OWNER } from "@/lib/legal";
import type { Locale } from "@/i18n/config";

export function NoticeBody({ lang, pending }: { lang: Locale; pending: string }) {
  if (lang === "en") {
    return (
      <>
        <h2>Website owner</h2>
        <p>This website, fullkod.com, is owned by:</p>
        <ul>
          <li>Owner: <Datum value={OWNER.name} pending={pending} /></li>
          <li>Trade name: <strong>Fullkod</strong></li>
          <li>Email: <Datum value={OWNER.email} pending={pending} /></li>
          {OWNER.taxId ? <li>Tax ID: {OWNER.taxId}</li> : null}
          {OWNER.address ? <li>Address: {OWNER.address}</li> : null}
          {OWNER.registry ? <li>Registry details: {OWNER.registry}</li> : null}
        </ul>

        <h2>Purpose</h2>
        <p>
          This site presents Fullkod&apos;s software development services and lets you get in touch with us.
          Browsing it does not commit you to anything and requires no registration.
        </p>

        <h2>Intellectual and industrial property</h2>
        <p>
          The Fullkod brand, its logo, the design of the site and its texts belong to the owner or are used
          with permission. They may not be reproduced, distributed or transformed for commercial purposes
          without written permission. Third-party names and trademarks that appear on the site belong to
          their respective owners.
        </p>

        <h2>Liability</h2>
        <p>
          We try to keep the information on the site correct and up to date, but we do not guarantee that it
          is free of errors. We are not responsible for the content of the external sites we link to.
        </p>
      </>
    );
  }
  return (
    <>
      <h2>Titular del sitio web</h2>
      <p>Este sitio web, fullkod.com, es titularidad de:</p>
      <ul>
        <li>Titular: <Datum value={OWNER.name} pending={pending} /></li>
        <li>Nombre comercial: <strong>Fullkod</strong></li>
        <li>Correo electrónico: <Datum value={OWNER.email} pending={pending} /></li>
        {OWNER.taxId ? <li>Identificación fiscal: {OWNER.taxId}</li> : null}
        {OWNER.address ? <li>Domicilio: {OWNER.address}</li> : null}
        {OWNER.registry ? <li>Datos registrales: {OWNER.registry}</li> : null}
      </ul>

      <h2>Objeto</h2>
      <p>
        Este sitio presenta los servicios de desarrollo de software de Fullkod y permite ponerse
        en contacto con nosotros. Navegar por él no te obliga a nada ni requiere registro.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        La marca Fullkod, su logotipo, el diseño del sitio y sus textos son propiedad del titular o
        se usan con autorización. No se permite reproducirlos, distribuirlos ni transformarlos con
        fines comerciales sin permiso por escrito. Los nombres y marcas de terceros que aparecen en
        el sitio pertenecen a sus respectivos titulares.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada, pero no
        garantizamos que esté libre de errores. No respondemos del contenido de los sitios
        externos a los que enlazamos.
      </p>
    </>
  );
}
