import hipo from "../../../assets/hipo.png";
import cart from "../../../assets/cart.png";
import heart from "../../../assets/heart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";
import { MenuSummary } from "./MenuSummary";
import { MenuList } from "./MenuList";

import { Hamburger } from "../../SearchBar/Hamburger";

import { Fragment } from "react";

const MENNAME = "MEN";
const WOMENNAME = "WOMEN";
const SPORTSNAME = "SPORT";

export const Menu = () => {
  return (
    <Fragment>
      <div className="flex mt-6  font-bold">
        <MenuList css="flex gap-12 items-center">
          <div className="block md:hidden -me-12">
            <Hamburger />
          </div>

          <MenuImage
            src={hipo}
            alt="BRAND"
            css={"h-auto w-12 rounded-full"}
            item="brand"
          />
          <div className="md:flex hidden gap-12">
            <MenuItem name={WOMENNAME} istrigger>
              Women
              <span className="ms-2">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </MenuItem>
            <MenuItem name={MENNAME}>Men</MenuItem>
            <MenuItem name={SPORTSNAME}>Sports</MenuItem>
          </div>
        </MenuList>
        <MenuList css="flex ms-auto md:gap-9 gap-4">
          <span className="hidden md:block">
            <MenuImage
              src={heart}
              alt="HEART"
              css={"h-auto w-10"}
              item="heart"
            />
          </span>
          <MenuImage src={cart} alt="CART" css={"h-auto w-10"} item="cart" />
        </MenuList>
      </div>
      <hr className="mt-2 block md:hidden bg-gray-200 border-1 dark:bg-gray-700" />
    </Fragment>
  );
};
