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

export const CheckoutPage = () => {
  const subTotal = buyItems.reduce((acc, b) => acc + +b.price, 0);

  const discount = -100;

  return (
    <div className="flex gap-4 mt-4">
      <div className="w-1/2 drop-shadow-2xl">
        <h1 className="text-4xl font-bold">Shipping Information</h1>
        <form className="border bg-slate-50 flex flex-col gap-3 mt-4 p-4">
          <label className="font-bold text-2xl" htmlFor="email">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Email Address
            </span>
          </label>
          <input
            id="email"
            name="email"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-2xl" htmlFor="firstname">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              First Name
            </span>
          </label>
          <input
            id="firstname"
            name="firstname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-2xl" htmlFor="lastname">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Last NAME
            </span>
          </label>
          <input
            id="lastname"
            name="lastname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-2xl" htmlFor="streetaddress">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Shipping Address
            </span>
          </label>
          <input
            id="streetaddress"
            name="streetaddress"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-2xl" htmlFor="name">
            <span className="relative before:absolute before:content-['*'] before:text-red-600 before:-right-5 before:top-0">
              Phone Number
            </span>
          </label>
          <input
            id="companyname"
            name="companyname"
            className="text-xl p-2 border rounded-md outline-none"
          />
          <label className="font-bold text-2xl" htmlFor="name">
            Order Notes (optional)
          </label>
          <textarea
            id="companyname"
            name="companyname"
            rows={5}
            className="text-xl p-2 border rounded-md outline-none"
            placeholder="Notes about your order, e.g special notes for delivery"
          />
          <button className="bg-red-500 hover:bg-red-400 p-4 text-2xl text-white rounded-full">
            Place Order
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <div className="w-1/2  p-4 rounded-md mt-14">
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
            <li className="w-full flex text-4xl leading-loose">
              <h2>Total</h2>
              <span className="ms-auto">${subTotal + discount}</span>
            </li>
          </ul>
        </div>
        <div className="flex mt-2 flex-col gap-3">
          {buyItems.map((b, index) => (
            <div key={index} className="flex items-center gap-3">
              <img className="w-1/5 h-[10rem] object-fit" src={b.imgSrc} />
              <div>
                <blockquote className="text-xl font-bold">{b.title}</blockquote>
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
