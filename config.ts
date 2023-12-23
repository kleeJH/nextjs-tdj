import English from "language-icons/icons/en.svg";
import Chinese from "language-icons/icons/zh.svg";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import LowDefLogo from "./public/assets/images/logo.png";
import HighDefLogo from "./public/assets/images/logo-big.png";
import TiltCardPic1 from "./public/assets/images/card-malaysiaDay.jpg";

const Config: {
  logoLowDef: StaticImageData;
  logoHighDef: StaticImageData;
  personal: {
    address: {
      street: string;
      residential: string;
      postalTown: string;
      stateCountry: string;
    };
  };
  hero: {
    picture1: StaticImport;
    picture2: StaticImport;
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
  logoLowDef: LowDefLogo,
  logoHighDef: HighDefLogo,
  personal: {
    address: {
      street: "Lot 8, Jalan 34,",
      residential: "Taman Desa Jaya,",
      postalTown: "52100 Kuala Lumpur,",
      stateCountry: " Wilayah Persekutuan, Malaysia",
    },
  },
  hero: {
    picture1: TiltCardPic1,
    picture2: TiltCardPic1,
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
        href: "/#about",
      },
      "Footer.Top.SubCategory.ourProgrammes": {
        href: "/#programme",
      },
    },
    "Footer.Top.Category.connect": {
      "Footer.Top.SubCategory.contactUs": {
        href: "/#contact",
      },
      "Footer.Top.SubCategory.career": {
        href: "/careers",
      },
    },
  },
};

export default Config;
