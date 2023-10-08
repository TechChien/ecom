import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

import hipo from "../../../assets/hipo.png";
import cart from "../../../assets/cart.png";
import wishlist from "../../../assets/heart.png";

import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";
import { MenuList } from "./MenuList";

import { Hamburger } from "../../SearchBar/Hamburger";

import { SlideHeader } from "../SlideHeader";

import { MENNAME, WOMENNAME, SPORTSNAME, BRAND, CART, WISHLIST } from "./items";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(true);
  };

  const hideFn = (e) => {
    setOpen(false);
  };

  return (
    <Fragment>
      <div className="flex mt-6  font-bold">
        <MenuList css="flex gap-12 items-center">
          <div onClick={handleClick} className="block md:hidden -me-12">
            <Hamburger />
          </div>
          <Link to="/">
            <MenuImage
              src={hipo}
              alt="BRAND"
              css={"h-auto w-12 rounded-full"}
              item={BRAND}
            />
          </Link>
          <div className="md:flex hidden gap-12">
            <MenuItem name={WOMENNAME} istrigger>
              {t("header.women")}
              <span className="ms-2">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </MenuItem>
            <MenuItem name={MENNAME}> {t("header.men")}</MenuItem>
            <MenuItem name={SPORTSNAME}> {t("header.sport")}</MenuItem>
          </div>
        </MenuList>
        <MenuList css="flex ms-auto md:gap-9 gap-4">
          <span className="hidden md:block">
            <MenuImage
              src={wishlist}
              alt="wishlist"
              css={"h-auto w-10"}
              item={WISHLIST}
            />
          </span>
          <MenuImage src={cart} alt="CART" css={"h-auto w-10"} item={CART} />
        </MenuList>
      </div>
      <hr className="mt-2 block md:hidden bg-gray-200 border-1 dark:bg-gray-700" />
      <SlideHeader open={open} hideFn={hideFn} />
    </Fragment>
  );
};
