import type { Metadata } from "next";
import { Dato, PaginaLegal } from "@/components/pagina-legal";
import { TITULAR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegal() {
  return (
    <PaginaLegal titulo="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de
        comercio electrónico (LSSI-CE), te informamos de que este sitio web, fullkod.com, es
        titularidad de:
      </p>
      <ul>
        <li>Titular: <Dato valor={TITULAR.nombre} /></li>
        <li>NIF: <Dato valor={TITULAR.nif} /></li>
        <li>Domicilio: <Dato valor={TITULAR.domicilio} /></li>
        <li>Correo electrónico: <Dato valor={TITULAR.email} /></li>
        {TITULAR.registro ? <li>Datos registrales: {TITULAR.registro}</li> : null}
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

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales que correspondan conforme a la ley.
      </p>
    </PaginaLegal>
  );
}
