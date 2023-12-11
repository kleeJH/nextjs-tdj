import { useTranslations } from "next-intl";

const RootPage = () => {
  const t = useTranslations("Index");
  return <div className=" text-default mt-10">
    {t("title")}
  </div>;
};

export default RootPage;
