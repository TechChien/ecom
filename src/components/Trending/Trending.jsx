import { Heading } from "../Heading";
import { TrendingLeft } from "./TrendingLeft";
import { TrendingRight } from "./TrendingRight";

export const Trending = () => {
  return (
    <div className="mt-1 md:mt-8">
      <Heading title="Trending Products" />
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <TrendingLeft />
        <TrendingRight />
      </div>
    </div>
  );
};
