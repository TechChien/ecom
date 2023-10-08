import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";

export const TrendingRight = () => {
  const products = useSelector((state) => state.product.data);

  const CardItems = products;

  return (
    <div className="md:w-2/3 flex flex-col md:grid md:grid-rows-4 md:grid-flow-col gap-2">
      <ProductCard {...CardItems[4]} linkTo="/Shoes/shoe1" />
      <ProductCard {...CardItems[1]} />
      <ProductCard {...CardItems[2]} />
      <ProductCard {...CardItems[3]} />
      <ProductCard {...CardItems[0]} />
      <ProductCard {...CardItems[5]} />
      <ProductCard {...CardItems[6]} />
      <ProductCard {...CardItems[7]} />
    </div>
  );
};
