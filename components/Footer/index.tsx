import React from "react";
import { useTranslations } from "next-intl";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Config from "@config";

import "./Footer.css";

const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="w-full bottom-0 bg-background py-6">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center gap-8 max-sm:flex-col max-sm:items-start max-sm:justfiy-start">
            <div className="flex flex-row gap-5">
              <div className="flex items-center select-none">
                <Image
                  src={Config.logo}
                  alt="Tadika Desa Jaya's Logo"
                  width={60}
                  height={60}
                  className="drop-shadow-md"
                />
              </div>
              <p className="w-48 font-inter font-semibold orange-text-gradient">
                {t("Footer.Top.Motto")}
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-8 justify-center items-center max-sm:flex-col max-sm:items-start">
                {Object.entries(Config.footer).map(
                  ([categoryTranslationPath, categoryValue]) => (
                    <div key={categoryTranslationPath} className="flex flex-row gap-8">
                      <span className="vertical !h-28 max-sm:hidden" />
                      <div>
                        <h4 className="text-[18px] font-satoshi font-bold mb-2 capitalize">
                          {t(categoryTranslationPath)}
                        </h4>
                        <div className="flex flex-col gap-1">
                          {Object.entries(categoryValue).map(
                            ([subCategoryTranslationPath, subCategoryValue]) => (
                              <Link
                                key={subCategoryTranslationPath}
                                href={subCategoryValue.href}
                                className="footer-link-text"
                              >
                                <p>{t(subCategoryTranslationPath)}</p>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr className="my-6 border-textDefault" />
          {/* <Divider /> */}

          {/* Footer Below */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center gap-2 max-sm:flex-col max-sm:items-start">
              <p className="font-inter pink-text-gradient">
              {t("Footer.Bottom.madeWith")}
              </p>
              <div>
                <div className="flex flex-row gap-5 text-sm font-inter justify-center items-center h-10">
                  <p className="font-satoshi text-sm font-semibold max-sm:hidden ">
                  {t("Footer.Bottom.socialMedia")}
                  </p>
                  <span className="vertical max-sm:!h-5 max-sm:hidden" />
                  <Link
                    href={Config.socials["facebook"].href}
                    target="_block"
                    className="square-button focus:outline-none focus-visible:ring-2 shadow shadow-accent text-textDefault"
                  >
                    <Facebook aria-hidden="true" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-2 max-sm:flex-col max-sm:items-start">
              <div className="flex flex-row gap-3 justify-between max-sm:flex-col max-sm:items-start max-sm:gap-0">
                <Link href={"/tos"} className="footer-link-text text-center">
                  <p>{t("Footer.Bottom.termsOfService")}</p>
                </Link>
                <span className="vertical max-sm:!h-5 max-sm:hidden" />
                <Link
                  href={"/privacy"}
                  className="footer-link-text text-center"
                >
                  <p>{t("Footer.Bottom.privacy")}</p>
                </Link>
              </div>
              <p className="text-right font-inter text-gray-500 text-sm max-sm:text-left">
                © {new Date().getFullYear()} Tadika Desa Jaya. {t("Footer.Bottom.allRightsReserved")}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
