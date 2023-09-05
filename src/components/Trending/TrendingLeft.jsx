import { CountDown } from "./CountDown";
import { ImageWindow } from "./ImageWindow";

import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { Stars } from "./Stars";
import { ProductStock } from "./ProductStock";
export const TrendingLeft = () => {
  return (
    <div className="border-2 py-8 w-1/3 hidden md:block">
      <CountDown />
      <div className="w-10/12  mx-auto relative mt-6 md:mt-8">
        <ImageWindow bgImg="apparel4" hover={false}>
          <Stars score={4.5} comments="2,432" />
          <ProductTitle
            title={"Happy Sailed Womens Summer Boho Florida"}
            linkTo="/WomenClothing/apparel4"
          />
          <ProductPrice price={123.24} originalPrice={180} />
          <ProductStock stock={2307} sold={2109} />
        </ImageWindow>
      </div>
    </div>
  );
};
