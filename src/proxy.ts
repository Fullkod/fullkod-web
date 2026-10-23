import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasLocale, negotiateLocale } from "@/i18n/config";

// Sends visitors without a language in the URL to /es or /en, based on their browser language.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";
  if (hasLocale(first)) return;
  // Files with an extension (images, robots.txt, sitemap.xml...) are served as they are.
  if (/\.[a-z0-9]+$/i.test(pathname)) return;

  const locale = negotiateLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip the API and Next internals.
  matcher: ["/((?!api|_next).*)"],
};
