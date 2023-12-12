import { useTranslations, useLocale } from "next-intl";
import { Hero } from "@components/MainPage";
import { notFound } from "next/navigation";
import Config from "@config";

const RootPage = () => {
  // if (!Object.keys(Config.locales).includes(useLocale() as any)) return notFound();

  // const t = useTranslations("Index");
  return (
    <div className=" text-default mt-10 mb-[1000px]">
      {/* {t("title")} */}
      <Hero />
    </div>
  );
};

export default RootPage;
