import createMiddleware from "next-intl/middleware";
import Config from "@config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.keys(Config.locales),

  // Used when no locale matches
  defaultLocale: Config.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh)/:path*"],
};
