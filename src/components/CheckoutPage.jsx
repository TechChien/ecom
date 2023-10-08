import { useSelector } from "react-redux";
import { ImageWindow } from "./Trending/ImageWindow";
import { useTranslation } from "react-i18next";
export const CheckoutPage = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => state["cart"]?.items);
  const products = useSelector((state) => state.product.data);

  const buyItems = items.map((item) => {
    const ret = item.subtitle ? { subtitle: item.subtitle } : {};

    return {
      amount: item.amount,
      ...ret,
      ...products[item.productId - 1],
    };
  });
  const subTotal = buyItems.reduce((acc, b) => acc + +b.price, 0);
  const discount = subTotal ? -100 : 0;

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <div className="w-full  md:w-1/2 drop-shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-bold">Shipping Information</h1>
        <form className="border bg-slate-50 flex flex-col gap-3 mt-4 p-4">
          <label className="font-bold text-xl md:text-2xl" htmlFor="email">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Email Address
            </span>
          </label>
          <input
            id="email"
            name="email"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-xl md:text-2xl" htmlFor="firstname">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              First Name
            </span>
          </label>
          <input
            id="firstname"
            name="firstname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-xl md:text-2xl" htmlFor="lastname">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Last Name
            </span>
          </label>
          <input
            id="lastname"
            name="lastname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label
            className="font-bold text-xl md:text-2xl"
            htmlFor="streetaddress"
          >
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Shipping Address
            </span>
          </label>
          <input
            id="streetaddress"
            name="streetaddress"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-xl md:text-2xl" htmlFor="name">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Phone Number
            </span>
          </label>
          <input
            id="companyname"
            name="companyname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-xl md:text-2xl" htmlFor="name">
            Order Notes (optional)
          </label>
          <textarea
            id="companyname"
            name="companyname"
            rows={5}
            className="text-lg md:text-xl p-2 border rounded-md outline-none"
            placeholder="Notes about your order, e.g special notes for delivery"
          />
          <button className="bg-red-500 hover:bg-red-400 p-4 text-xl md:text-2xl text-white rounded-full">
            Place Order
          </button>
        </form>
      </div>
      <div className="w-full  md:w-1/2">
        <div className="w-full md:w-1/2  p-4 rounded-md md:mt-14">
          <h1 className="text-lg md:text-2xl text-black font-bold">
            &bull; {t("cart.summary")}
          </h1>
          <ul className="flex flex-col gap-3 md:text-xl font-bold mt-4">
            <li className="w-full flex">
              <h2 className="text-lg">{t("cart.subtotal")}</h2>
              <span className="ms-auto">${subTotal}</span>
            </li>
            <li className="w-full flex">
              <h2 className="text-lg">{t("cart.discount")}</h2>
              <span className="ms-auto">-${Math.abs(discount)}</span>
            </li>
            <li className="w-full flex text-4xl leading-loose">
              <h2 className="text-lg">{t("header.total")}</h2>
              <span className="ms-auto text-lg ">${subTotal + discount}</span>
            </li>
          </ul>
        </div>
        <div className="flex mt-2 flex-col gap-3">
          {buyItems.map((b, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-1/5 h-[10rem]">
                <ImageWindow heart={false} hover={false} bgImg={b.bgImg} />
              </div>
              <div className="w-4/5">
                <blockquote className="text-xl font-bold">
                  {t(b.title)}
                </blockquote>
                <blockquote className="text-xl font-bold">
                  x{b.amount}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
