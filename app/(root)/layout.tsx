import Config from "@config";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { baseMetadata } from "../metadata";
import { StyleProviders } from "./[locale]/providers";

export const metadata: Metadata = { ...baseMetadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang={Config.defaultLocale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/assets/images/logos/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/assets/images/logos/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body>
        <SpeedInsights />
        <Analytics />
        <StyleProviders>{children}</StyleProviders>
      </body>
    </html>
  );
}
