import { Heading } from "../Heading";
import { TrendingLeft } from "./TrendingLeft";
import { TrendingRight } from "./TrendingRight";
import { useTranslation } from "react-i18next";
export const Trending = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-1 md:mt-8">
      <Heading title={t("heading.trending")} />
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <TrendingLeft />
        <TrendingRight />
      </div>
    </div>
  );
};
