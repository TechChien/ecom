import hipo from "../../../assets/hipo.png";
import cart from "../../../assets/cart.png";
import heart from "../../../assets/heart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { MenuItem } from "./MenuItem";
import { MenuImage } from "./MenuImage";
import { MenuSummary } from "./MenuSummary";
import { MenuList } from "./MenuList";

const MENNAME = "MEN";
const WOMENNAME = "WOMEN";
const SPORTSNAME = "SPORT";

export const Menu = () => {
  return (
    <div className="flex mt-6  font-bold">
      <MenuList css="flex gap-12 items-center">
        <MenuImage
          src={hipo}
          alt="BRAND"
          css={"h-auto w-12 rounded-full"}
          item="brand"
        />
        <MenuItem name={WOMENNAME} istrigger>
          Women
          <span className="ms-2">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </MenuItem>
        <MenuItem name={MENNAME}>Men</MenuItem>
        <MenuItem name={SPORTSNAME}>Sports</MenuItem>
      </MenuList>
      <MenuList css="flex ms-auto gap-9">
        <MenuImage src={heart} alt="HEART" css={"h-auto w-10"} item="heart" />
        <MenuImage src={cart} alt="CART" css={"h-auto w-10"} item="cart" />
        <MenuSummary />
      </MenuList>
    </div>
  );
};
