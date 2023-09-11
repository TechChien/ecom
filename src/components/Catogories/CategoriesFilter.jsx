import { Fragment } from "react";

import { FilterItem } from "./FilterItem";
import { ColorCheck } from "./ColorCheck";
import { PricePicker } from "./PricePicker";

const filterItems = [
  {
    mainClass: "Category",
    subclass: [
      { title: "Bags", count: 15 },
      { title: "Beauty", count: 2 },
      { title: "Clothing", count: 3 },
      { title: "Jewelry", count: 1 },
      { title: "Shoes", count: 7 },
    ],
  },
  {
    mainClass: "Activity",
    subclass: [
      { title: "Athletic", count: 11 },
      { title: "Lounge", count: 13 },
      { title: "Outdoor", count: 7 },
      { title: "Travel", count: 3 },
      { title: "Urban", count: 4 },
    ],
  },
  {
    mainClass: "Brands",
    subclass: [
      { title: "Nike", count: 9 },
      { title: "Louis Vuitton", count: 7 },
      { title: "Hermes", count: 2 },
      { title: "Gucci", count: 6 },
      { title: "Zara", count: 5 },
    ],
  },
];

const colorarr = ["red", "yellow", "green", "blue", "orange"];

export const CategoriesFilter = ({ open, hideFn }) => {
  const openClass = open ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`fixed z-10  h-screen px-2  md:h-fit ${openClass} md:translate-x-0  w-2/3 sm:w-1/3  bg-slate-100 md:bg-white top-0 left-0  md:relative md:w-2/5 lg:w-1/4 transition-all duration-300 overflow-auto`}
    >
      <div className="w-full mx-auto overflow-auto">
        <h1 className="md:hidden flex Fiter text-xl font-bold border-b-2 mb-2">
          Filter
          <span onClick={hideFn} className="ms-auto pe-2">
            x
          </span>
        </h1>
        {filterItems.map((item) => (
          <div key={item.mainClass}>
            <FilterItem item={item} />
            <hr className="my-2" />
          </div>
        ))}
      </div>
      <Fragment>
        <h1 className="text-xl font-bold">Color</h1>
        <div className="flex gap-3 mt-2  items-center">
          {colorarr.map((color) => (
            <ColorCheck key={color} color={color} />
          ))}
        </div>
      </Fragment>
      <hr className="my-2" />
      <Fragment>
        <h1 className="text-xl font-bold">Price</h1>

        <PricePicker minPrice={5} maxPrice={350} />
      </Fragment>
    </div>
  );
};
