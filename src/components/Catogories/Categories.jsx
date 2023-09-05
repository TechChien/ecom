import { CategoriesMenu } from "./CategoriesMenu";
import { Slider } from "./Slider";

export const Categories = () => {
  return (
    <div className="flex gap-3 items-center">
      <div id="#sidebar" className="hidden md:flex md:min-w-[25%] relative">
        <CategoriesMenu />
      </div>
      <Slider />
    </div>
  );
};
