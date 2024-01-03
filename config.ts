import English from "language-icons/icons/en.svg";
import Chinese from "language-icons/icons/zh.svg";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import LowDefLogo from "./public/assets/images/logo.png";
import HighDefLogo from "./public/assets/images/logo-big.png";
import TiltCardPic1 from "./public/assets/images/card-sportsDay.jpg";
import TiltCardPic2 from "./public/assets/images/card-malaysiaDay.jpg";
import TiltCardPic3 from "./public/assets/images/card-plants.jpg";


const Config: {
  logoLowDef: StaticImageData;
  logoHighDef: StaticImageData;
  defaultLocale: string;
  locales: { [langs: string]: { icon: string | StaticImport } };

  personal: {
    address: {
      street: string;
      residential: string;
      postalTown: string;
      stateCountry: string;
    };
  };

  socials: { [category: string]: { [info: string]: string } };

  gallery: { link: string; height: number }[];
  hero: {
    picture1: StaticImport;
    picture2: StaticImport;
    picture3: StaticImport;
  };
  navigationLinks: { title: string; href: string }[];
  footer: {
    [categoryTranslationPath: string]: {
      [subCategoryTranslationPath: string]: { href: string };
    };
  };
} = {
  // Default Website Stuff
  logoLowDef: LowDefLogo,
  logoHighDef: HighDefLogo,
  defaultLocale: "en",
  locales: {
    en: {
      icon: English,
    },
    zh: {
      icon: Chinese,
    },
  },

  // Address
  personal: {
    address: {
      street: "Lot 8, Jalan 34,",
      residential: "Taman Desa Jaya,",
      postalTown: "52100 Kuala Lumpur,",
      stateCountry: " Wilayah Persekutuan, Malaysia",
    },
  },

  // Socials
  socials: {
    phone: {
      number: "60362761557",
    },
    facebook: {
      href: "https://www.facebook.com/TJDEDU",
      msgLink: "https://www.facebook.com/messages/t/101261530228970",
    },
    whatsapp: {
      href: "https://wa.me/60162614308",
    },
  },

  // Overview Website Stuff
  gallery: [
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid0T1gwyeqAHfrtfJVpvSyVqpxiGQmd7okbkUVwEzXaZJxv82Kb83nQsFbvizG3PhjKl",
      height: 550,
    }, // 23 Dec 2023 - Christmas & New Year
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid06AWrzx3bDguLQn6tarMrKTMRaTWFC67jXCjPaEJFRK7YEjGCkkrAuSQ2MD4bmFoJl",
      height: 700,
    }, // 16 Nov 2023 - 6yr Field Trip to Disease Prevention Facility
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid0iodmZRnxXXkmUY6xH5W2AjF2wanBofLP74E8vbvWGdbnk7PT12GUcCMpkonRC2tFl",
      height: 615,
    }, //  16 Nov 2023 - Deepavali
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid0cHYqj2YJMK2ygniqLCiXX3BfMVW84zjDBMuZHUzRnGYSvUejbRpuiCSxYLnbQreUl",
      height: 700,
    }, // 29 Oct 2023 - Children's day and Halloween
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid02pQCwDmc63m8tXvMfk3dARRmNJrD8rcs3NMRPV3wjCoAwkMgRepxfpYtwaECcgQKgl",
      height: 680,
    }, // 26 Aug 2023 - National Day
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid02KYEWA3PWA9ngLM8Vn9jEt31vdJYmUqvni9qbNxafFEojBKg7sHDYy7ehG9LCR49Fl",
      height: 685,
    }, // 20 Aug 2023 - Sports Day
    {
      link: "https://www.facebook.com/TJDEDU/posts/pfbid02kYyrmWvkTXQK2ucNqi4WzLth84y5Bthz93RXazaz2yDseTiC74xNWiJfkSHxW2wfl",
      height: 525,
    }, // 28 July 2023 - Storytelling Contest
  ],
  hero: {
    picture1: TiltCardPic1,
    picture2: TiltCardPic2,
    picture3: TiltCardPic3,
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
      // "Footer.Top.SubCategory.career": {
      //   href: "/careers",
      // },
    },
  },
};

export default Config;
