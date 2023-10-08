import { Link } from "react-router-dom";

import { Breadcrumbs } from "./Breadcrumbs";
// import { NumberPicker } from "./ProductDetail/NumberPicker";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItemAmount, deleteCart } from "../redux/reducer/cartSlice";

import { ImageWindow } from "./Trending/ImageWindow";

import { useTranslation } from "react-i18next";

export const CartPage = () => {
  const items = useSelector((state) => state["cart"]?.items);
  const products = useSelector((state) => state.product.data);
  const { t } = useTranslation();
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
      <h1 className="font-extrabold text-2xl lg:text-3xl">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row  gap-4 mt-6">
        <div className="md:hidden w-full flex flex-col gap-2">
          {buyItems.map((item) => (
            <div key={item.productId} className="flex flex-col border-b-2">
              <div className="flex items-center gap-3">
                <div className="md:w-1/5 h-[10rem] overflow-hidden">
                  <ImageWindow heart={false} hover={false} bgImg={item.bgImg} />
                </div>
                <p className="w-3/5 text-sm lg:text-md font-bold">
                  {t(item.title)}
                </p>
                <div
                  onClick={handleRemove(item.productId)}
                  className="cursor-pointer text-sm lg:text-xl ms-auto pe-2"
                >
                  x
                </div>
              </div>
              <div className="flex justify-evenly mt-2">
                <span>{item.price}</span>
                <div className="h-full flex gap-2 items-center border-slate-500 rounded-md border p-1 lg:p-2">
                  <NumberChanger
                    {...{
                      amount: item.amount,
                      productId: item.productId,
                      handleClick,
                    }}
                  />
                </div>
                <span className="py-2 text-center font-bold lg:text-xl">
                  ${item.price * item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>

        <table className="hidden md:table w-4/5">
          <thead className="bg-slate-300">
            <tr className="lg:text-2xl md:text-xl text-slate-600">
              <th className="lg:p-6 w-3/5">Item</th>
              <th className="lg:p-6 ">Price</th>
              <th className="lg:p-6 w-1/5">Qty</th>
              <th className="lg:p-6">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {buyItems.map((b, index) => (
              <tr key={index}>
                <td className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="md:w-1/5 h-[10rem] overflow-hidden">
                      <ImageWindow
                        heart={false}
                        hover={false}
                        bgImg={b.bgImg}
                      />
                    </div>
                    <p className="w-3/5 text-sm lg:text-md font-bold">
                      {t(b.title)}
                    </p>
                  </div>
                </td>
                <td className="py-2 text-center font-bold lg:text-xl">
                  ${b.price}
                </td>
                <td className="py-2 mx-auto h-full">
                  <div className="w-full flex  items-center justify-center">
                    <div className="h-full flex gap-2 items-center border-slate-500 rounded-md border p-1 lg:p-2">
                      <NumberChanger
                        {...{
                          amount: b.amount,
                          productId: b.productId,
                          handleClick,
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="py-2 text-center font-bold lg:text-xl">
                  ${b.price * b.amount}
                </td>
                <td
                  onClick={handleRemove(b.productId)}
                  className="cursor-pointer text-sm lg:text-xl"
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full md:w-1/5">
          <div className="flex flex-col lg:flex-row  gap-3 lg:gap-0 items-start  lg:items-stretch  rounded-t-md ">
            <input
              className="py-2 px-3 rounded-md lg:rounded-none lg:rounded-tl-md   lg:text-md text-slate-950 outline-none w-full border-2 border-black"
              placeholder="coupoun"
            />

            <button className="bg-black  text-white lg:text-md rounded-full lg:rounded-none lg:rounded-tr-md lg:px-2 lg:py-0 px-6 py-2 hover:bg-slate-900">
              Apply
            </button>
          </div>
          <div className="w-full bg-slate-300 p-4 rounded-b-md mt-2 lg:mt-0">
            <h1 className="md:text-lg lg:text-2xl text-black font-bold">
              SUMMARY
            </h1>
            <ul className="flex flex-col gap-3 lg:text-xl font-bold mt-4">
              <li className="w-full flex flex-col xl:flex-row">
                <h2 className="md:text-lg">Subtotal</h2>
                <span className="ms-auto md:text-lg">${subTotal}</span>
              </li>
              <li className="w-full flex  flex-col xl:flex-row">
                <h2 className="md:text-lg">Discount</h2>
                <span className="ms-auto md:text-lg">
                  -${Math.abs(discount)}
                </span>
              </li>
              <li className="w-full flex  flex-col xl:flex-row">
                <h2 className="md:text-lg">Total</h2>
                <span className="ms-auto md:text-lg">
                  ${subTotal + discount}
                </span>
              </li>
              <li>
                <Link to="/Checkout">
                  <button className="p-2 lg:p-4 w-full bg-blue-950 rounded-full text-white hover:bg-blue-800">
                    Checkout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const NumberChanger = ({ productId, amount, handleClick }) => {
  return (
    <Fragment>
      <button
        onClick={handleClick(productId)}
        name="minus"
        className="w-3 h-3 lg:w-6 lg:h-6 lg:text-xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={amount === 1}
      >
        -
      </button>
      <span className="font-bold lg:text-xl">{amount}</span>
      <button
        onClick={handleClick(productId)}
        name="plus"
        className="w-3 h-3 lg:w-6 lg:h-6 lg:text-xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={amount === 10}
      >
        +
      </button>
    </Fragment>
  );
};
