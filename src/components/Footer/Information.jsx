const infoItems = [
  {
    title: "Help & Contact",
    list: [
      "Your Account",
      "Your Orders",
      "Shipping Rates",
      "Returns",
      "Assistant",
      "Help",
      "Contact us",
    ],
  },
  {
    title: "All Categories",
    list: [
      "Beauty",
      "Electronic",
      "Women's Fashion",
      "Men's Fashion",
      "Girl Fashion",
      "Boy's Fashion",
      "Health & Household",
      "Home & Kitchen",
      "Pet Supplies",
      "Sports",
    ],
  },
  {
    title: "Payment Info",
    list: [
      "Business Card",
      "Shop with Points",
      "Reload Your Balance",
      "Paypal",
    ],
  },
  {
    title: "About Us",
    list: [
      "Company Info",
      "News",
      "Investors",
      "Careers",
      "Policies",
      "Customer reviews",
    ],
  },
];

export const Information = () => {
  return (
    <div className="bg-slate-200 text-slate-500 pt-4 md:pt-16 pb-8">
      <div className="container mx-auto flex flex-col">
        <div className="w-full flex flex-col gap-6 md:gap-3 md:flex-row">
          {infoItems.map((info) => (
            <div className="w-1/4" key={info.title}>
              <h1 className="text-xl whitespace-nowrap font-bold text-black">
                {info.title}
              </h1>
              <ul className="flex flex-col text-sm gap-3 mt-3">
                {info.list.map((item) => (
                  <li className="hover:text-white whitespace-nowrap" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col  items-center gap-4 mt-4">
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 relative before:content-[''] before:w-10 before:h-10 before:absolute before:border-2 before:-left-2 before:-top-2 before:rounded-full before:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 512 512"
                fill="rgb(100,116,139)"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-slate-500 relative before:content-[''] before:w-10 before:h-10 before:absolute before:border-2 before:-left-2 before:-top-2 before:rounded-full before:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 448 512"
                fill="rgb(100,116,139)"
              >
                <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-slate-500 relative before:content-[''] before:w-10 before:h-10 before:absolute before:border-2 before:-left-[10px] before:-top-2 before:rounded-full before:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 448 512"
                fill="rgb(100,116,139)"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-slate-500 relative before:content-[''] before:w-10 before:h-10 before:absolute before:border-2 before:-left-[10px] before:-top-2 before:rounded-full before:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 448 512"
                fill="rgb(100,116,139)"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-slate-500 relative before:content-[''] before:w-10 before:h-10 before:absolute before:border-2 before:-left-[7px] before:-top-2 before:rounded-full before:border-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5rem"
                viewBox="0 0 576 512"
                fill="rgb(100,116,139)"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
          <p className="text-slate-500">
            Copyright 2023 &#xA9; All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
