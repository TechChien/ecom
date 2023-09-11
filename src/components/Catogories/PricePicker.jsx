import { Fragment } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const PricePicker = ({ minPrice, maxPrice }) => {
  return (
    <Fragment>
      <div className="mt-2">
        <Slider min={minPrice} max={maxPrice} />
      </div>
      <div className="mt-2 flex w-full">
        <span className="text-slate-300 ">${minPrice}</span>
        <span className="text-slate-300 ms-auto pe-1">${maxPrice}</span>
      </div>
    </Fragment>
  );
};
