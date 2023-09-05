import { Categories } from "./Catogories/Categories";
import { Trending } from "./Trending/Trending";
import { Featuring } from "./Featuring/Featuring";
import { Banner } from "./Banner/Banner";

export const Home = () => {
  return (
    <div>
      <Categories />
      <Trending />
      <Featuring />
      <Banner />
    </div>
  );
};
