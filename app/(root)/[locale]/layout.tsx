import Config from "@config";
import "@styles/globals.css";

import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const LocaleLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!Object.keys(Config.locales).includes(locale as any)) notFound();

  const messages = useMessages();
  unstable_setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">{children}</div>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;

export function generateStaticParams() {
  return Object.keys(Config.locales).map((locale) => ({ locale }));
}
