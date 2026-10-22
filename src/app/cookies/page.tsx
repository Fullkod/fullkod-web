import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLegal } from "@/components/pagina-legal";

export const metadata: Metadata = {
  title: "Política de cookies",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <PaginaLegal titulo="Política de cookies">
      <h2>¿Usamos cookies?</h2>
      <p>
        No. Este sitio no instala cookies propias ni de terceros, ni con fines analíticos ni
        publicitarios. Por eso no te mostramos ningún aviso de cookies.
      </p>

      <h2>Estadísticas de visitas</h2>
      <p>
        Para saber cuántas personas visitan el sitio usamos Vercel Web Analytics, que cuenta las
        visitas de forma agregada y anónima, sin cookies y sin identificarte entre sitios.
      </p>

      <h2>Tipografías</h2>
      <p>
        Las tipografías se sirven desde nuestro propio dominio, así que tu navegador no se
        conecta a servidores de terceros para cargarlas.
      </p>

      <h2>Cambios</h2>
      <p>
        Si en el futuro añadimos cookies que necesiten tu consentimiento, actualizaremos esta
        página y te pediremos permiso antes de instalarlas. Más información sobre cómo tratamos
        tus datos en la <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </PaginaLegal>
  );
}
