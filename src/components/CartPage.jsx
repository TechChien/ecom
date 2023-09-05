import { Link } from "react-router-dom";

import { Breadcrumbs } from "./Breadcrumbs";
import { NumberPicker } from "./ProductDetail/NumberPicker";

import home2 from "../assets/products/home2.jpg";
import home3 from "../assets/products/home3.jpg";
import home4 from "../assets/products/home4.jpg";
import home5 from "../assets/products/home5.jpg";

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

export const CartPage = () => {
  const subTotal = buyItems.reduce((acc, b) => acc + +b.price, 0);

  const discount = -100;

  return (
    <div>
      <Breadcrumbs />
      <h1 className="font-extrabold text-6xl">Shopping Cart</h1>
      <div className="flex gap-4 mt-6">
        <table className="w-4/5">
          <thead className="bg-slate-300">
            <tr className="text-3xl text-slate-600">
              <th className="p-6 w-3/5">Item</th>
              <th className="p-6 ">Price</th>
              <th className="p-6 w-1/5">Qty</th>
              <th className="p-6">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {buyItems.map((b, index) => (
              <tr key={index}>
                <td className="py-2">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-1/5 h-[10rem] object-fit"
                      src={b.imgSrc}
                    />
                    <blockquote className="text-2xl font-bold">
                      {b.title}
                    </blockquote>
                  </div>
                </td>
                <td className="py-2 text-center font-bold text-2xl">
                  ${b.price}
                </td>
                <td className="py-2 mx-auto h-full">
                  <div className="w-full flex  items-center justify-center">
                    <div className="h-full flex gap-2 items-center border-slate-500 rounded-md border p-2">
                      <NumberPicker initialNum={b.amount} />
                    </div>
                  </div>
                </td>
                <td className="py-2 text-center font-bold text-2xl">
                  ${b.price * b.amount}
                </td>
                <td className="cursor-pointer text-xl">x</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-1/5">
          <form>
            <div className="flex w-full border-2 border-black rounded-t-md ">
              <input
                className="py-2 px-3 rounded-md text-xl text-slate-950 outline-none w-full"
                placeholder="Enter coupoun"
              />
              <button className="bg-black text-white  text-xl px-4 hover:bg-slate-900">
                Apply
              </button>
            </div>
            <div className="w-full bg-slate-300 p-4 rounded-b-md">
              <h1 className="text-2xl text-black font-bold">&bull; SUMMARY</h1>
              <ul className="flex flex-col gap-3 text-xl font-bold mt-4">
                <li className="w-full flex">
                  <h2>Subtotal</h2>
                  <span className="ms-auto">${subTotal}</span>
                </li>
                <li className="w-full flex">
                  <h2>Discount</h2>
                  <span className="ms-auto">-${Math.abs(discount)}</span>
                </li>
                <li className="w-full flex">
                  <h2>Total</h2>
                  <span className="ms-auto">${subTotal + discount}</span>
                </li>
                <li>
                  <Link to="/Checkout">
                    <button className="p-4 w-full bg-blue-950 rounded-full text-white hover:bg-blue-800">
                      Checkout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
