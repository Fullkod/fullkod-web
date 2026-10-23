import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { NoticeBody } from "@/content/legal/notice";
import { LOCALES, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const path = "legal-notice";
  return {
    title: getDictionary(lang).legal.noticeTitle,
    alternates: {
      canonical: `/${lang}/${path}`,
      languages: { es: `/es/${path}`, en: `/en/${path}`, "x-default": `/es/${path}` },
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { legal } = getDictionary(lang);
  return (
    <LegalPage title={legal.noticeTitle} dict={legal}>
      <NoticeBody lang={lang} pending={legal.pending} />
    </LegalPage>
  );
}
