import { FeaturingItem } from "../Featuring/FeaturingItem";
import { useSelector } from "react-redux";

export const SearchResult = () => {
  const products = useSelector((state) => state.product.data);

  return (
    <div className="mt-3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2  grid-flow-row">
        <FeaturingItem {...products[0]} />
        <FeaturingItem {...products[1]} />
        <FeaturingItem {...products[2]} />
        <FeaturingItem {...products[3]} />
        <FeaturingItem {...products[4]} />
        <FeaturingItem {...products[5]} />
        <FeaturingItem {...products[6]} />
        <FeaturingItem {...products[7]} />
      </div>
    </div>
  );
};
