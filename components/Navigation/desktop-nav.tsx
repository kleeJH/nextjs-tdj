"use client";

import Config from "@config";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import LocaleSwitch from "./locale-button";
import ThemeSwitch from "./theme-button";

const DesktopNavigation = ({
  hasNavLinks = true,
}: {
  hasNavLinks: boolean;
}) => {
  const router = useRouter();
  const [active, setActive] = useState<string>("");

  return (
    <div className="sm:flex hidden gap-10 items-center">
      {hasNavLinks && (
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {Config.navigationLinks.map((nav) => (
            <li
              key={nav.href}
              className={`${
                active === nav.title ? "orange-text-gradient drop-shadow-md" : "text-default"
              } hover:text-accent text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                router.replace(nav.href);
              }}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-3 md:gap-5">
        <LocaleSwitch />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default DesktopNavigation;
