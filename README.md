# fullkod-web

Sitio de **Fullkod** (fullkod.com): página corporativa, casos de estudio y páginas legales. Next.js 16 con App Router, TypeScript y Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
```

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Proyectos y casos de estudio (`/proyectos/<slug>`) | `src/content/proyectos.ts` |
| Servicios, proceso, equipo, tecnologías y preguntas frecuentes | `src/content/sitio.ts` |
| Testimonios (ahora de ejemplo, `FICTICIOS = true`) | `src/lib/testimonios.ts` |
| Correo, WhatsApp y LinkedIn | `src/lib/contacto.ts` |
| Datos del titular para aviso legal y privacidad (`BORRADOR = true`) | `src/lib/legal.ts` |
| URL y descripción del sitio (SEO) | `src/lib/sitio.ts` |

Los campos en `null` no se muestran (o salen como «[pendiente]» en las páginas legales). Antes de publicar: testimonios reales, datos del titular, roles del equipo y contacto.

## Formulario de contacto

`src/app/api/contacto/route.ts` reenvía los mensajes por correo con [Resend](https://resend.com). Configura las variables de `.env.example` en `.env.local` o en Vercel. Sin ellas, el formulario responde que aún no está activo.

## Marca

- Logos y favicons vienen del kit de `Fullkod/brand` (copiados a `public/`). Si cambia el logo, se recopia desde `kit/logo/` y `kit/web/`; no se escribe el logo con texto.
- El símbolo en dos piezas (`<` violeta y `>` dorado) está en `src/components/simbolo.tsx`, para animarlo.
- Colores, tipografías (Outfit, DM Sans y JetBrains Mono) y animaciones están en `src/app/globals.css`.

## SEO

Metadatos y Open Graph en `src/app/layout.tsx`, imagen para compartir en `src/app/opengraph-image.tsx`, `sitemap.ts`, `robots.ts` y datos estructurados (Organization y FAQPage). Estadísticas con Vercel Web Analytics, sin cookies.

## Despliegue

Pendiente: conectar el repo a Vercel y apuntar el dominio `fullkod.com`.
