# fullkod-web

**Fullkod** website (fullkod.com): corporate page, case studies and legal pages. Next.js 16 (App Router), TypeScript and Tailwind CSS v4. The site is bilingual (Spanish and English); code, identifiers, comments and routes are in English.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

## Languages

Spanish (default) and English, with locale-prefixed routes (`/es`, `/en`). `src/proxy.ts` redirects `/` and any path without a locale to the visitor's language (Accept-Language; unknown languages get English). The language toggle is in the header and links to the same page in the other language.

## Where each thing is edited

| What | File |
|---|---|
| UI and home copy (services, process, FAQ, testimonials text, forms, 404...) | `src/i18n/dictionaries/es.ts` and `en.ts` (same shape, enforced by types) |
| Projects: slug, images, colors, technologies | `src/content/projects.es.ts` |
| Projects: English text | `src/content/projects.en.ts` (merged over the Spanish data by `projects.ts`) |
| Team and technologies (language-neutral) | `src/content/home.ts` |
| Testimonial people (names, initials) | `src/lib/testimonials.ts` |
| Email, WhatsApp and LinkedIn | `src/lib/contact.ts` |
| Owner data for the legal notice and privacy policy (`DRAFT = true`) | `src/lib/legal.ts` |
| Legal page bodies (ES and EN) | `src/content/legal/` |
| Site URL (SEO) | `src/lib/site.ts` |

To add a language: add it to `LOCALES` in `src/i18n/config.ts`, create its dictionary and project copy, and add its branch in the `src/content/legal/` bodies. Fields set to `null` are not shown (or render as a "pending" placeholder on the legal pages).

## Routes

`/<lang>` · `/<lang>/projects/<slug>` · `/<lang>/legal-notice` · `/<lang>/privacy` · `/<lang>/cookies` · `/api/contact`. Home anchors: `#projects`, `#services`, `#process`, `#team`, `#clients`, `#faq`, `#contact`.

## Contact form

`src/app/api/contact/route.ts` forwards messages by email with [Resend](https://resend.com). Set the variables from `.env.example` (`RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`) in `.env.local` or in Vercel. Without them the form answers that it is not active yet.

## Brand

- Logos and favicons come from the `Fullkod/brand` kit (copied into `public/`). If the logo changes, copy it again from `kit/logo/` and `kit/web/`; never type the logo out as text.
- The two-piece symbol (violet `<` and gold `>`) lives in `src/components/symbol.tsx`, so it can be animated.
- Colors, fonts (Outfit, DM Sans and JetBrains Mono) and animations are in `src/app/globals.css`.
- Screenshots in `public/sites/` are named `<project>-<screen>.png`, with the `-mobile` suffix for the phone version.

## SEO

Metadata and Open Graph in `src/app/[lang]/layout.tsx` (with `hreflang` alternates), share image in `src/app/[lang]/opengraph-image.tsx`, `sitemap.ts` (one entry per page and language), `robots.ts` and structured data (Organization and FAQPage). Visit stats with Vercel Web Analytics, cookieless.

## Deployment

Pending: connect the repo to Vercel and point the `fullkod.com` domain.
