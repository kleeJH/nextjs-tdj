import English from "language-icons/icons/en.svg";
import Chinese from "language-icons/icons/zh.svg";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Logo from "./public/assets/images/logo.png";

const Config: {
  locales: { [langs: string]: { icon: string | StaticImport } };
  defaultLocale: string;
  logo: StaticImageData;
} = {
  locales: {
    en: {
      icon: English,
    },
    zh: {
      icon: Chinese,
    },
  },
  defaultLocale: "en",
  logo: Logo,
};

export default Config;
