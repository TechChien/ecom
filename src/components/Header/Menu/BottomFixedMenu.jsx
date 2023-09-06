import { useState, useEffect, useRef, Fragment } from "react";

import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { BottomMenuItem } from "./BottomMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BottomMenuSearchBar } from "../../SearchBar/BottomMenuSearchBar";
import { CartSidePopup } from "./CartSidePopup";

export const BottomFixedMenu = () => {
  const [height, setHeight] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  const handleSearchClick = (e) => setOpenSearch((o) => !o);

  const handleCartClick = (e) => setOpenCart((o) => !o);

  const handleCloseCart = (e) => setOpenCart(false);

  return (
    <Fragment>
      <div
        ref={ref}
        className="fixed bottom-0 md:hidden w-screen h-[3rem] bg-slate-300"
      >
        <div className="w-full flex h-full ">
          <span className="w-1/4 flex items-center justify-center h-full text-slate-400">
            <BottomMenuItem title="Account">
              <FontAwesomeIcon icon={faUser} />
            </BottomMenuItem>
          </span>
          <span className="w-1/4 flex items-center justify-center h-full text-slate-400">
            <BottomMenuItem title="Wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </BottomMenuItem>
          </span>
          <span
            onClick={handleSearchClick}
            className="w-1/4 flex items-center justify-center h-full text-slate-400"
          >
            <BottomMenuItem title="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </BottomMenuItem>
          </span>
          <span
            onClick={handleCartClick}
            className="w-1/4 flex items-center justify-center h-full text-slate-400"
          >
            <BottomMenuItem title="Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </BottomMenuItem>
          </span>
        </div>
      </div>
      <div>
        {openSearch ? (
          <BottomMenuSearchBar height={height} open={openSearch} />
        ) : null}

        <CartSidePopup open={openCart} hideFn={handleCloseCart} />
      </div>
    </Fragment>
  );
};
