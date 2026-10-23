import type { Metadata } from "next";
import { Datum, LegalPage } from "@/components/legal-page";
import { OWNER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/legal-notice" },
};

export default function LegalNotice() {
  return (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>
        Este sitio web, fullkod.com, es titularidad de:
      </p>
      <ul>
        <li>Titular: <Datum value={OWNER.name} /></li>
        <li>Nombre comercial: <strong>Fullkod</strong></li>
        <li>Correo electrónico: <Datum value={OWNER.email} /></li>
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
    </LegalPage>
  );
}
