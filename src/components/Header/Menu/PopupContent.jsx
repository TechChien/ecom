import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { deleteCart } from "../../../redux/reducer/cartSlice";
import { ImageWindow } from "../../Trending/ImageWindow";
import { useTranslation } from "react-i18next";

export const PopupContent = ({ parentImg, hideFn }) => {
  const { t } = useTranslation();

  const items = useSelector((state) => state[parentImg]?.items);
  const products = useSelector((state) => state.product.data);

  const dispath = useDispatch();

  if (parentImg !== "cart") return null;
  if (!items) return null;

  const buyItems = items.map((item) => {
    const ret = item.subtitle ? { subtitle: item.subtitle } : {};

    return {
      amount: item.amount,
      ...ret,
      ...products[item.productId - 1],
    };
  });

  const handleClick = (productId) => (e) => {
    dispath(deleteCart(productId));
    e.stopPropagation();
  };

  return (
    <Fragment>
      <h1 className="font-extrabold text-slate-500 text-2xl p-2 flex">
        {t("cart.header", {
          count: buyItems.length,
          item: `$t(cart.${parentImg})`,
        })}
        <span onClick={hideFn} className="ms-auto">
          x
        </span>
      </h1>
      <hr />
      <ul className="flex flex-col gap-4 mt-4 px-2">
        {buyItems.map((item) => (
          <li key={item.title} className="flex gap-2">
            <div className="w-1/3">
              <div className="w-full h-[12rem]">
                <ImageWindow heart={false} hover={false} bgImg={item.bgImg} />
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-black font-bold ">
                <h2>{t(item.title)}</h2>
                <blockquote className="mt-2">${item.price}</blockquote>
                {Object.prototype.hasOwnProperty.call(item, "subtitle") ? (
                  <p className="mt-2">{item.subtitle}</p>
                ) : null}
                <p className="mt-2">
                  {t("cart.amount")} {item.amount}
                </p>
              </div>
            </div>
            <FontAwesomeIcon
              onClick={handleClick(item.productId)}
              className="cursor-pointer"
              icon={faX}
            />
          </li>
        ))}
      </ul>
      <hr className="mt-2" />
      <div className="mt-2 pl-2">
        <h2 className="text-3xl text-slate-600 font-bold">
          {t("cart.subtotal")}
        </h2>
        <h3 className="mt-2 text-2xl text-slate-500">
          ${buyItems.reduce((acc, b) => acc + +b.price * +b.amount, 0)}
        </h3>
      </div>
      <hr className="mt-2" />
      <div className="flex flex-col gap-3 mt-2 px-2">
        {parentImg === "cart" ? (
          <>
            <Link to="/Checkout">
              <button
                onClick={hideFn}
                className="p-2 w-full bg-red-500 rounded-full text-white hover:bg-red-400"
              >
                {t("cart.checkout")}
              </button>
            </Link>
            <Link to="/Cart">
              <button
                onClick={hideFn}
                className="p-2 w-full bg-purple-800 rounded-full text-white hover:bg-purple-600"
              >
                {t("cart.viewcart")}
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </Fragment>
  );
};
