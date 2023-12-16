import English from "language-icons/icons/en.svg";
import Chinese from "language-icons/icons/zh.svg";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Logo from "./public/assets/images/logo.png";

const Config: {
  logo: StaticImageData;
  personal: {
    address: {
      street: string;
      residential: string;
      postalTown: string;
      stateCountry: string;
    };
  };
  defaultLocale: string;
  locales: { [langs: string]: { icon: string | StaticImport } };
  socials: { [category: string]: { href: string } };
  navigationLinks: { title: string; href: string }[];
  footer: {
    [categoryTranslationPath: string]: {
      [subCategoryTranslationPath: string]: { href: string };
    };
  };
} = {
  logo: Logo,
  personal: {
    address: {
      street: "Lot 8 & 10, Jalan 34,",
      residential: "Taman Desa Jaya,",
      postalTown: "52100 Kuala Lumpur,",
      stateCountry: " Wilayah Persekutuan, Malaysia",
    },
  },
  defaultLocale: "en",
  locales: {
    en: {
      icon: English,
    },
    zh: {
      icon: Chinese,
    },
  },
  socials: {
    facebook: {
      href: "https://www.facebook.com/TJDEDU",
    },
  },
  navigationLinks: [
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Programme",
      href: "/#programme",
    },
    {
      title: "Location",
      href: "/#location",
    },
    {
      title: "Admission",
      href: "/#admission",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
  footer: {
    "Footer.Top.Category.quickLinks": {
      "Footer.Top.SubCategory.aboutUs": {
        href: "/",
      },
      "Footer.Top.SubCategory.ourProgrammes": {
        href: "/",
      },
    },
    "Footer.Top.Category.connect": {
      "Footer.Top.SubCategory.contactUs": {
        href: "/",
      },
      "Footer.Top.SubCategory.career": {
        href: "/",
      },
    },
  },
};

export default Config;
