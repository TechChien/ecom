import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import home2 from "../../../assets/products/home2.jpg";
import home3 from "../../../assets/products/home3.jpg";
import home4 from "../../../assets/products/home4.jpg";
import home5 from "../../../assets/products/home5.jpg";

const buyItems = [
  {
    title: "Dimamble Ceiling Light Modern",
    price: "279.99",
    amount: 2,
    imgSrc: home2,
  },
  {
    title: "Modern Storage Cabinet with Deer & 3 Drawers",
    price: "129.99",
    amount: 1,
    imgSrc: home3,
  },
  {
    title: "Vonanfa Welvet Sofa Couch",
    price: "352.99",
    amount: 1,
    imgSrc: home4,
  },
  {
    title: "Awesome Bed for a Couple",
    price: "579.99",
    amount: 1,
    imgSrc: home5,
  },
];

export const MenuPopup = ({ top, hideFn, parentImg = "cart" }) => {
  if (parentImg !== "cart") return null;

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
        {buyItems.map((b, index) => (
          <li key={index} className="flex gap-2">
            <div className="w-1/3">
              <img className="w-full h-[12rem] object-fit" src={b.imgSrc} />
            </div>
            <div className="w-2/3">
              <div className="text-black font-bold ">
                <h2>{b.title}</h2>
                <blockquote className="mt-2">${b.price}</blockquote>
                <p className="mt-2">Amount: {b.amount}</p>
              </div>
            </div>
            <FontAwesomeIcon className="cursor-pointer" icon={faX} />
          </li>
        ))}
      </ul>
      <hr className="mt-2" />
      <div className="mt-2">
        <h2 className="text-3xl text-slate-600 font-bold">Subtotal</h2>
        <h3 className="mt-2 text-2xl text-slate-500">
          ${buyItems.reduce((acc, b) => acc + +b.price, 0)}
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
