import { Link } from "react-router-dom";

import { Breadcrumbs } from "./Breadcrumbs";
// import { NumberPicker } from "./ProductDetail/NumberPicker";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItemAmount, deleteCart } from "../redux/reducer/cartSlice";

import { ImageWindow } from "./Trending/ImageWindow";

export const CartPage = () => {
  const items = useSelector((state) => state["cart"]?.items);
  const products = useSelector((state) => state.product.data);

  const dispatch = useDispatch();

  const buyItems = items.map((item) => {
    const ret = item.subtitle ? { subtitle: item.subtitle } : {};

    return {
      amount: item.amount,
      ...ret,
      ...products[item.productId - 1],
    };
  });

  const subTotal = buyItems.reduce((acc, b) => acc + +b.price * +b.amount, 0);

  const discount = subTotal ? -100 : 0;

  const handleClick = (productId) => (e) => {
    const findItem = buyItems.find((item) => item.productId === productId);
    if (findItem) {
      switch (e.target.name) {
        case "minus":
          dispatch(
            updateCartItemAmount({
              productId: productId,
              amount: findItem.amount - 1,
            })
          );
          break;
        case "plus":
          dispatch(
            updateCartItemAmount({
              productId: productId,
              amount: findItem.amount + 1,
            })
          );
          break;
        default:
          break;
      }
    }
  };

  const handleRemove = (productId) => (e) => {
    dispatch(deleteCart(productId));
  };

  return (
    <div>
      <Breadcrumbs />
      <h1 className="font-extrabold text-3xl">Shopping Cart</h1>
      <div className="flex gap-4 mt-6">
        <table className="w-4/5">
          <thead className="bg-slate-300">
            <tr className="text-2xl text-slate-600">
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
                    <div className="w-1/5 h-[10rem]">
                      <ImageWindow
                        heart={false}
                        hover={false}
                        bgImg={b.bgImg}
                      />
                    </div>
                    <blockquote className="text-md font-bold">
                      {b.title}
                    </blockquote>
                  </div>
                </td>
                <td className="py-2 text-center font-bold text-xl">
                  ${b.price}
                </td>
                <td className="py-2 mx-auto h-full">
                  <div className="w-full flex  items-center justify-center">
                    <div className="h-full flex gap-2 items-center border-slate-500 rounded-md border p-2">
                      <Fragment>
                        <button
                          onClick={handleClick(b.productId)}
                          name="minus"
                          className="w-6 h-6 text-xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
                          disabled={b.amount === 1}
                        >
                          -
                        </button>
                        <span className="font-bold text-xl">{b.amount}</span>
                        <button
                          onClick={handleClick(b.productId)}
                          name="plus"
                          className="w-6 h-6 text-xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
                          disabled={b.amount === 10}
                        >
                          +
                        </button>
                      </Fragment>
                    </div>
                  </div>
                </td>
                <td className="py-2 text-center font-bold text-xl">
                  ${b.price * b.amount}
                </td>
                <td
                  onClick={handleRemove(b.productId)}
                  className="cursor-pointer text-xl"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-1/5">
          <form>
            <div className="flex w-full border-2 border-black rounded-t-md ">
              <input
                className="py-2 px-3 rounded-md text-lg text-slate-950 outline-none w-full"
                placeholder="Enter coupoun"
              />
              <button className="bg-black text-white  text-lg px-4 hover:bg-slate-900">
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
