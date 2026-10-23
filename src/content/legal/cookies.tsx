import Link from "next/link";
import type { Locale } from "@/i18n/config";

export function CookiesBody({ lang }: { lang: Locale }) {
  if (lang === "en") {
    return (
      <>
        <h2>Do we use cookies?</h2>
        <p>
          No. This site does not install its own or third-party cookies, neither for analytics nor for
          advertising. That is why we do not show you any cookie notice.
        </p>

        <h2>Visit statistics</h2>
        <p>
          To know how many people visit the site we use Vercel Web Analytics, which counts visits in an
          aggregated, anonymous way, without cookies and without identifying you across sites.
        </p>

        <h2>Fonts</h2>
        <p>
          Fonts are served from our own domain, so your browser does not connect to third-party servers
          to load them.
        </p>

        <h2>Changes</h2>
        <p>
          If in the future we add cookies that need your consent, we will update this page and ask for
          your permission before installing them. More information on how we handle your data in the{" "}
          <Link href="/en/privacy">privacy policy</Link>.
        </p>
      </>
    );
  }
  return (
    <>
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
        tus datos en la <Link href="/es/privacy">política de privacidad</Link>.
      </p>
    </>
  );
}
