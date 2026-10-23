# fullkod-web

**Fullkod** website (fullkod.com): corporate page, case studies and legal pages. Next.js 16 (App Router), TypeScript and Tailwind CSS v4. The site copy is in Spanish; code, identifiers, comments and routes are in English.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

## Where each thing is edited

| What | File |
|---|---|
| Projects and case studies (`/projects/<slug>`) | `src/content/projects.ts` |
| Services, process, team, technologies and FAQ | `src/content/home.ts` |
| Testimonials | `src/lib/testimonials.ts` |
| Email, WhatsApp and LinkedIn | `src/lib/contact.ts` |
| Owner data for the legal notice and privacy policy (`DRAFT = true`) | `src/lib/legal.ts` |
| Site URL and description (SEO) | `src/lib/site.ts` |

Fields set to `null` are not shown (or render as "[pendiente]" on the legal pages). Before publishing: owner data, team roles and contact details.

## Routes

`/` · `/projects/<slug>` · `/legal-notice` · `/privacy` · `/cookies` · `/api/contact`. Home anchors: `#projects`, `#services`, `#process`, `#team`, `#clients`, `#faq`, `#contact`.

## Contact form

`src/app/api/contact/route.ts` forwards messages by email with [Resend](https://resend.com). Set the variables from `.env.example` (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`) in `.env.local` or in Vercel. Without them the form answers that it is not active yet.

## Brand

- Logos and favicons come from the `Fullkod/brand` kit (copied into `public/`). If the logo changes, copy it again from `kit/logo/` and `kit/web/`; never type the logo out as text.
- The two-piece symbol (violet `<` and gold `>`) lives in `src/components/symbol.tsx`, so it can be animated.
- Colors, fonts (Outfit, DM Sans and JetBrains Mono) and animations are in `src/app/globals.css`.
- Screenshots in `public/sites/` are named `<project>-<screen>.png`, with the `-mobile` suffix for the phone version.

## SEO

Metadata and Open Graph in `src/app/layout.tsx`, share image in `src/app/opengraph-image.tsx`, `sitemap.ts`, `robots.ts` and structured data (Organization and FAQPage). Visit stats with Vercel Web Analytics, cookieless.

## Deployment

Pending: connect the repo to Vercel and point the `fullkod.com` domain.
