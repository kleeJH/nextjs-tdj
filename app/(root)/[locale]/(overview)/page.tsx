import { useTranslations } from "next-intl";
import { Hero } from "@components/MainPage";

const RootPage = () => {
  // const t = useTranslations("Index");
  return (
    <div className=" text-default mt-10 mb-[90vh]">
      {/* {t("title")} */}
      <Hero />
    </div>
  );
};

export default RootPage;
