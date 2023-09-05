import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../../redux/reducer/cartSlice";

import { ImageWindow } from "../../Trending/ImageWindow";

export const MenuPopup = ({ top, hideFn, parentImg = "cart" }) => {
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

  console.log("buyItems", buyItems);

  const handleClick = (productId) => (e) => {
    dispath(deleteCart(productId));
    e.stopPropagation();
  };

  return (
    <div
      style={{ top: top, zIndex: 10, right: 0 }}
      className="absolute py-2 px-4 w-[30rem] bg-white boder-white border shadow-xl"
    >
      <h1 className="font-extrabold text-slate-500 text-2xl p-2 ">
        {buyItems.length} Items In {parentImg}
      </h1>
      <hr />
      <ul className="flex flex-col gap-4 mt-4">
        {buyItems.map((item) => (
          <li key={item.title} className="flex gap-2">
            <div className="w-1/3">
              <div className="w-full h-[12rem]">
                <ImageWindow heart={false} hover={false} bgImg={item.bgImg} />
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-black font-bold ">
                <h2>{item.title}</h2>
                <blockquote className="mt-2">${item.price}</blockquote>
                {Object.prototype.hasOwnProperty.call(item, "subtitle") ? (
                  <p className="mt-2">{item.subtitle}</p>
                ) : null}
                <p className="mt-2">Amount: {item.amount}</p>
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
      <div className="mt-2">
        <h2 className="text-3xl text-slate-600 font-bold">Subtotal</h2>
        <h3 className="mt-2 text-2xl text-slate-500">
          ${buyItems.reduce((acc, b) => acc + +b.price * +b.amount, 0)}
        </h3>
      </div>
      <hr className="mt-2" />
      <div className="flex flex-col gap-3 mt-2">
        {parentImg === "cart" ? (
          <>
            <Link to="/Checkout">
              <button
                onClick={hideFn}
                className="p-2 w-full bg-red-500 rounded-full text-white hover:bg-red-400"
              >
                Checkout
              </button>
            </Link>
            <Link to="/Cart">
              <button
                onClick={hideFn}
                className="p-2 w-full bg-purple-800 rounded-full text-white hover:bg-purple-600"
              >
                View cart
              </button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};
