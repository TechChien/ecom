import { useState } from "react";
import { useLocation } from "react-router";

import { CategoriesFilter } from "./Catogories/CategoriesFilter";
import { Breadcrumbs } from "./Breadcrumbs";

import { Hamburger } from "./SearchBar/Hamburger";
import { DropDownList } from "./DropDown/DropDownList";
import { SearchResult } from "./Catogories/SearchResult";

const sortBy = [
  { title: "sort by default", value: "default" },
  { title: "sort by price(ltoh)", value: "price(ltoh)" },
  { title: "sort by price(htol)", value: "price(htol)" },
  { title: "sort by alphabet", value: "alphabet" },
];

const numberOfPage = [
  { title: "10", value: 10 },
  { title: "20", value: 20 },
  { title: "50", value: 50 },
  { title: "100", value: 100 },
];

export const CateoryPage = () => {
  const location = useLocation();

  const [openFilter, setOpenFilter] = useState(false);

  const [sort, setSort] = useState(sortBy[0]);
  const [numOfPage, setNumOfPage] = useState(numberOfPage[0]);

  const getSortListValue = (value) => {
    setSort(value);
  };

  const getNumOfPageListValue = (value) => {
    setNumOfPage(value);
  };

  const handleFilterClick = (e) => {
    setOpenFilter((f) => !f);
  };

  const hideFn = (e) => {
    setOpenFilter(false);
  };

  return (
    <div className="flex gap-2">
      <CategoriesFilter {...{ hideFn, open: openFilter }} />
      <div className="w-full">
        <Breadcrumbs />
        <h1 className="text-xl font-bold ">
          {location.pathname.split("/")[1]}
        </h1>
        <p className="leading-loose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          officia ipsam adipisci exercitationem et tempore corrupti, recusandae
          repellendus? Unde omnis fugiat praesentium, molestiae dolores voluptas
          ducimus deleniti delectus? Dolor, perferendis.
        </p>
        <div className="mt-2 flex items-center">
          <span
            onClick={handleFilterClick}
            className="md:hidden flex items-center text-xl font-bold"
          >
            <Hamburger />
            Filter
          </span>
          <div className="ms-auto flex gap-8 md:gap-12">
            <span>
              <DropDownList
                onChange={getSortListValue}
                firstChose={sort}
                options={sortBy}
              />
            </span>
            <span>
              <DropDownList
                onChange={getNumOfPageListValue}
                firstChose={numOfPage}
                options={numberOfPage}
              />
            </span>
          </div>
        </div>
        <SearchResult />
      </div>
    </div>
  );
};
