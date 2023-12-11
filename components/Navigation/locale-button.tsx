"use client";

import Config from "@config";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import "./Navigation.css";

const LocaleSwitch = () => {
  const t = useTranslations("Locale");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [nextLocale, setNextLocale] = useState<string>(currentLocale);
  const [toggleLocaleDropdown, setToggleLocaleDropdown] =
    useState<boolean>(false);

  let localeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: Event) => {
      if (
        localeDropdownRef.current &&
        !localeDropdownRef.current.contains(e.target as Node)
      )
        setToggleLocaleDropdown(false);
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, [localeDropdownRef]);

  const handleDropdownItemClick = (newLocale: string) => {
    // Don't do anything if current locale is same
    if (currentLocale === newLocale) return;

    // Else, set next locale and change route path
    setNextLocale(newLocale);
    const regex = new RegExp(`/(${Object.keys(Config.locales).join("|")})/*`);
    router.replace(newLocale + "/" + pathname.replace(regex, "/"));
  };

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.8 }}
        className="rounded-lg p-2 duration-300 focus:outline-none focus-visible:ring-2 bg-secondary hover:bg-accent cursor-pointer border-solid border-[1px] border-accent"
        onClick={() => setToggleLocaleDropdown(!toggleLocaleDropdown)}
        ref={localeDropdownRef}
      >
        <Image
          src={Config.locales[nextLocale].icon}
          alt={`${t(nextLocale)}`}
          height={20}
          width={20}
        />
      </motion.div>

      <AnimatePresence>
        {toggleLocaleDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-secondary absolute top-16 w-fit -translate-x-[31%] border-solid border-[1px] border-accent rounded-lg p-2 overflow-hidden focus:outline-none focus-visible:ring-2 flex-row"
          >
            {Object.keys(Config.locales).map((locale) => (
              <div
                key={locale}
                className="h-10 flex items-center rounded-lg p-2 hover:bg-accent transition duration-500 cursor-pointer font-semibold"
                onClick={() => handleDropdownItemClick(locale)}
              >
                <Image
                  src={Config.locales[locale].icon}
                  alt={`${t(locale)}`}
                  height={30}
                  width={30}
                  className="pr-2"
                />
                {`${t(locale)}`}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LocaleSwitch;
