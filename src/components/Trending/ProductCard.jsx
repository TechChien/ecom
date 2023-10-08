import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { Stars } from "./Stars";
import { ProductStock } from "./ProductStock";

import { ImageWindow } from "./ImageWindow";

import { useTranslation } from "react-i18next";

export const ProductCard = ({ ...props }) => {
  const { t } = useTranslation();

  const { title, score, comments, price, originalPrice, sold, bgImg, stock } =
    props;
  const linkTo = props?.linkTo;
  // console.log(props);

  return (
    <div className="flex gap-2">
      <div className="sm:w-2/5 md:w-1/3 md:h-full sm:h-[15rem]  relative overflow-hidden">
        <ImageWindow bgImg={bgImg} />
      </div>
      <div className="w-2/3">
        <ProductTitle title={t(title)} linkTo={linkTo ?? "#"} />
        <Stars score={score} comments={comments} />
        <ProductPrice price={price} originalPrice={originalPrice} />
        <ProductStock sold={sold} stock={stock} />
      </div>
    </div>
  );
};
