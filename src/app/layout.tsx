import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Outfit } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Cabecera } from "@/components/cabecera";
import { Pie } from "@/components/pie";
import { SITIO } from "@/lib/sitio";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.url),
  title: {
    default: "Fullkod — Full solutions. Fully coded.",
    template: "%s · Fullkod",
  },
  description: SITIO.descripcion,
  applicationName: "Fullkod",
  keywords: [
    "software a medida",
    "desarrollo de aplicaciones",
    "aplicaciones web",
    "apps móviles",
    "SaaS",
    "e-commerce",
    "automatización",
    "España",
    "Latinoamérica",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Fullkod",
    title: "Fullkod — Full solutions. Fully coded.",
    description: SITIO.descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fullkod — Full solutions. Fully coded.",
    description: SITIO.descripcion,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#24104F",
};

const organizacion = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fullkod",
  url: SITIO.url,
  logo: `${SITIO.url}/icon-512.png`,
  slogan: "Full solutions. Fully coded.",
  description: SITIO.descripcion,
  areaServed: ["ES", "Latinoamérica"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizacion).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-full bg-gold px-5 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <Cabecera />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Pie />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
