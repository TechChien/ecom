import { Heading } from "../Heading";
import { TrendingLeft } from "./TrendingLeft";
import { TrendingRight } from "./TrendingRight";

export const Trending = () => {
  return (
    <div className="mt-8">
      <Heading title="Trending Products" />
      <div className="flex gap-4 mt-6">
        <TrendingLeft />
        <TrendingRight />
      </div>
    </div>
  );
};
