import { Heart } from "../Trending/Heart";
import { ProductPrice } from "../Trending/ProductPrice";
import { ProductTitle } from "../Trending/ProductTitle";
import { Stars } from "../Trending/Stars";

export const FeaturingItem = ({ ...props }) => {
  const { score, comments, title, price, originalPrice, bgImg } = props;

  return (
    <div className="w-full h-[45rem] relative">
      <div className="w-full h-2/3  overflow-hidden">
        <div
          className={`w-full h-full bg-${bgImg} bg-center bg-no-repeat bg-cover hover:scale-110`}
        ></div>
      </div>
      <Heart />
      <Stars score={score} comments={comments} />
      <ProductTitle title={title} />
      <ProductPrice price={price} originalPrice={originalPrice} />
    </div>
  );
};
