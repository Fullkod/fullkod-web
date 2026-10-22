# fullkod-web

Sitio de **Fullkod** (fullkod.com): página corporativa y landings. Next.js 16 con App Router, TypeScript y Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
```

## Marca

- Logos y favicons vienen del kit de `Fullkod/brand` (copiados a `public/`). Si cambia el logo, se recopia desde `kit/logo/` y `kit/web/`; no se escribe el logo con texto.
- Colores y tipografías están como tokens en `src/app/globals.css` (Outfit, DM Sans y JetBrains Mono).

## Contacto

`src/lib/contacto.ts` guarda el correo y LinkedIn que muestra la web. Están en `null` hasta que se decida el correo corporativo.

## Despliegue

Pendiente: conectar el repo a Vercel y apuntar el dominio `fullkod.com`.
