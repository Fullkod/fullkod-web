import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Permanent redirects from the first (Spanish-path, no-locale) URLs of the site.
  async redirects() {
    return [
      { source: "/proyectos/:slug", destination: "/es/projects/:slug", permanent: true },
      { source: "/privacidad", destination: "/es/privacy", permanent: true },
      { source: "/aviso-legal", destination: "/es/legal-notice", permanent: true },
      // klauShop became Kshop, the multi-store platform it grew into.
      { source: "/:lang(es|en)/projects/klaushop", destination: "/:lang/projects/kshop", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
