import { FeaturingItem } from "./FeaturingItem";
import { Heading } from "../Heading";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const Featuring = () => {
  const { t } = useTranslation();
  const products = useSelector((state) => state.product.data);

  const featureItems = products;

  return (
    <div className="mt-4">
      <div className="flex w-full">
        <Heading title={t("heading.feature")} />
        <div className="hover:text-white mt-4 ms-auto ">
          {t("banner.lower.viewall")}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className="grid grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-4  grid-flow-row md:grid-flow-col gap-3 mt-4">
        <FeaturingItem {...featureItems[0]} />
        <FeaturingItem {...featureItems[1]} />
        <FeaturingItem {...featureItems[2]} />
        <FeaturingItem {...featureItems[3]} />
        <FeaturingItem {...featureItems[4]} />
        <FeaturingItem {...featureItems[5]} />
        <FeaturingItem {...featureItems[6]} />
        <FeaturingItem {...featureItems[7]} />
      </div>
    </div>
  );
};
