import { CountDown } from "./CountDown";
import { ImageWindow } from "./ImageWindow";

import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { Stars } from "./Stars";
import { ProductStock } from "./ProductStock";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const TrendingLeft = () => {
  const products = useSelector((state) => state.product.data);
  const { t } = useTranslation();

  const trendingProduct = products.filter((p) => p.productId === 4)[0];

  return (
    <div className="border-2 py-8 md:w-1/3">
      <CountDown t={t} />
      <div className="w-10/12  mx-auto relative mt-6 md:mt-8">
        <ImageWindow bgImg="apparel4" hover={false}>
          <Stars score={4.5} comments="2,432" />
          <ProductTitle
            title={t(trendingProduct.title)}
            linkTo="/WomenClothing/apparel4"
          />
          <ProductPrice price={123.24} originalPrice={180} />
          <ProductStock stock={2307} sold={2109} />
        </ImageWindow>
      </div>
    </div>
  );
};
