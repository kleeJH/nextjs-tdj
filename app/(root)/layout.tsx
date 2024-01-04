import Config from "@config";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { StyleProviders } from "./[locale]/providers";

export const metadata: Metadata = {
  title: "Tadika Desa Jaya",
  description: "Tadika Desa Jaya's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang={Config.defaultLocale}>
      <head>
        <link
          rel="icon"
          href="/assets/images/logo.png"
          type="image/png"
          sizes="any"
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
