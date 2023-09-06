import { ProductPrice } from "./ProductPrice";
import { ProductTitle } from "./ProductTitle";
import { Stars } from "./Stars";
import { ProductStock } from "./ProductStock";

import { ImageWindow } from "./ImageWindow";

export const ProductCard = ({ ...props }) => {
  const { title, score, comments, price, originalPrice, sold, bgImage, stock } =
    props;
  const linkTo = props?.linkTo;
  // console.log(props);

  return (
    <div className="flex gap-2">
      <div className="sm:w-2/5 md:w-1/3 md:h-full sm:h-[15rem]  relative overflow-hidden">
        <ImageWindow bgImg={bgImage} />
      </div>
      <div className="w-2/3">
        <ProductTitle title={title} linkTo={linkTo ?? "#"} />
        <Stars score={score} comments={comments} />
        <ProductPrice price={price} originalPrice={originalPrice} />
        <ProductStock sold={sold} stock={stock} />
      </div>
    </div>
  );
};
