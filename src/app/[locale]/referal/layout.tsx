import "../../globals.css";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "../../providers";
import "@rainbow-me/rainbowkit/styles.css";

export default async function ReferalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ru" | "kz")) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <Providers messages={messages} locale={locale}>
      {children}
    </Providers>
  );
}
