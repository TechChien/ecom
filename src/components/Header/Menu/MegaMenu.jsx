import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ImageWindow } from "../../Trending/ImageWindow";

export const MegaMenu = ({ show, hideFn }) => {
  let content = null;
  if (show) {
    content = (
      <div
        onMouseLeave={hideFn}
        className="py-8 bg-slate-200 absolute top-[7rem] w-screen"
      >
        <div className="container mx-auto flex gap-20 sm:text-sm  md:text-md xl:text-xl">
          <div className="">
            <div className="font-bold ">WOMEN'S CLOTHING</div>
            <ul className="flex flex-col gap-y-3 mt-4">
              <li className="hover:text-white">Dresses</li>
              <li className="hover:text-white">Tops & Tees</li>
              <li className="hover:text-white">Jackets & Coats</li>
              <li className="hover:text-white">Pants & Capris</li>
              <li className="hover:text-white">Sweaters</li>
              <li className="hover:text-white">Costumes</li>
              <li className="hover:text-white">Hoodies & Sweatshirts</li>
              <li className="hover:text-white">Pajamas & Robes</li>
              <li className="hover:text-white">Shorts</li>
              <li className="hover:text-white">Swimwear</li>
            </ul>
          </div>
          <div className="">
            <div className="font-bold ">JEWELRY</div>
            <ul className="flex flex-col gap-y-3 mt-4">
              <li className="hover:text-white">Accessories</li>
              <li className="hover:text-white">Bags & Purses</li>
              <li className="hover:text-white">Necklaces</li>
              <li className="hover:text-white">Rings</li>
              <li className="hover:text-white">Earrings</li>
              <li className="hover:text-white">Bracelets</li>
              <li className="hover:text-white">Body Jewelry</li>
            </ul>
          </div>
          <div className="">
            <div className="font-bold ">BEAUTY</div>
            <ul className="flex flex-col gap-y-3 mt-4">
              <li className="hover:text-white">Bath Accessories</li>
              <li className="hover:text-white">Makeup & Cosmetics</li>
              <li className="hover:text-white">Skin Care</li>
              <li className="hover:text-white">Hair Care</li>
              <li className="hover:text-white">Essential Oils</li>
              <li className="hover:text-white">Fragrances</li>
              <li className="hover:text-white">Soaps & Bath Bombs</li>
              <li className="hover:text-white">Face Masks & Coverings</li>
              <li className="hover:text-white">Spa Kits & Gifts</li>
            </ul>
          </div>
          <div>
            <div className="font-bold ">TOP BRANDS</div>
            <div className="flex gap-6 mt-4">
              <ul className="flex flex-col space-y-3">
                <li className="hover:text-white">Nike</li>
                <li className="hover:text-white">Hermes</li>
                <li className="hover:text-white">Zalando</li>
                <li className="hover:text-white">Zara</li>
                <li className="hover:text-white">Cartier</li>
                <li className="hover:text-white">Hurley</li>
              </ul>
              <ul className="flex flex-col space-y-3">
                <li className="hover:text-white">Louis Vuitton</li>
                <li className="hover:text-white">Gucci</li>
                <li className="hover:text-white">Tiffany & Co.</li>
                <li className="hover:text-white">H&M</li>
                <li className="hover:text-white">Chanel</li>
              </ul>
            </div>
            <div className="hover:text-white mt-4">
              View all brands{"   "}
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          <div>
            {/* <div className="h-full w-[20rem] aspect-[2/3] relative md:hidden lg:block bg-center bg-no-repeat bg-cover  bg-apparel4 text-center">
              <div className="font-bold text-violet-900 text-4xl translate-y-[18rem]">
                MOST WANTED
              </div>
              <div className="inline-block text-md font-bold w-3/5 px-4 py-4 bg-orange-500 translate-y-[20rem] rounded-full hover:bg-orange-300 text-white">
                Order Now
              </div>
            </div> */}
            <div className="h-full w-[25rem]">
              <div className="w-10/12 mx-auto relative mt-6 md:mt-8 overflow-hidden">
                <ImageWindow bgImg="apparel4" heart={false} hover={false}>
                  <div className="font-bold text-violet-900 text-4xl translate-y-[15rem] translate-x-[10%] absolute inset-0">
                    MOST WANTED
                  </div>
                  <div className=" text-md font-bold w-[10rem] h-[4rem] flex justify-center items-center px-4 py-4 bg-orange-500 translate-y-[18rem] translate-x-[60%]  rounded-full hover:bg-orange-300 text-white absolute inset-0">
                    Order Now
                  </div>
                </ImageWindow>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(
    <>{content}</>,
    document.getElementById("protal")
  );
};
