import React from "react";
import { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { StyleProviders } from "./providers";

import Navigation from "@components/Navigation";

import Config from "@config";
import "@styles/globals.css";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Tadika Desa Jaya",
  description: "Tadika Desa Jaya's Website",
};

const RootLayout = ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (!Object.keys(Config.locales).includes(locale as any)) return notFound();

  unstable_setRequestLocale(locale);

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <link rel="icon" href="/assets/images/logo.png"  type="image/png" sizes="any"/>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StyleProviders>
            <div className="main">
              <div className="gradient" />
            </div>
            <div className="app">
              <Navigation />
              {children}
            </div>
          </StyleProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export function generateStaticParams() {
  return Object.keys(Config.locales).map((locale) => ({ locale }));
}

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <html lang="en">
//       {/* <head>
//           <link rel="icon" href="/assets/images/logo.png" />
//         </head> */}
//       <body>
//         <div className="main">
//           <div className="gradient" />
//         </div>
//         <div className="app">{children}</div>
//       </body>
//     </html>
//   );
// };

// export default RootLayout;
