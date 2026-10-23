import { notFound } from "next/navigation";

// Catch-all: any unknown path under a locale renders the localized 404 (with header and footer).
export function generateStaticParams() {
  return [{ rest: ["not-found"] }];
}

export default function CatchAll() {
  notFound();
}
