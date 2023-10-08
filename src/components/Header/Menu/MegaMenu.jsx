import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ImageWindow } from "../../Trending/ImageWindow";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const MegaMenu = ({ show, hideFn }) => {
  const megaItems = useSelector((state) => state.category.popupMenu);
  const { t } = useTranslation();

  const [enter, setEnter] = useState(false);

  useEffect(() => {
    let timerId = null;
    if (show && !enter) {
      timerId = setTimeout(() => hideFn(), 1000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [show, enter, setEnter, hideFn]);

  let content = null;
  if (show) {
    content = (
      <div
        onMouseEnter={() => setEnter(true)}
        onMouseLeave={() => {
          setEnter(false);
          hideFn();
        }}
        className="py-8 z-20 bg-slate-200 absolute top-[7rem] w-screen"
      >
        <div className="container mx-auto flex gap-12 sm:text-xs  md:text-sm xl:text-lg">
          <div className="">
            <div className="font-bold ">
              {t(`${megaItems[0].subcategory[0].title}`)}
            </div>
            <ul className="flex flex-col gap-y-3 mt-4">
              {megaItems[0].subcategory[0].items.map((item) => (
                <li key={item} className="whitespace-nowrap hover:text-white">
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="font-bold ">
              {t(`${megaItems[0].subcategory[1].title}`)}
            </div>
            <ul className="flex flex-col gap-y-3 mt-4">
              {megaItems[0].subcategory[1].items.map((item) => (
                <li key={item} className="whitespace-nowrap hover:text-white">
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <div className="font-bold ">
              {t(`${megaItems[0].subcategory[2].title}`)}
            </div>
            <ul className="flex flex-col gap-y-3 mt-4">
              {megaItems[0].subcategory[2].items.map((item) => (
                <li key={item} className="whitespace-nowrap hover:text-white">
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold ">
              {t("popupMenu.Women.TOPBRANDS.title")}
            </div>
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
              {t("popupMenu.Women.TOPBRANDS.seemorebrand")}
              <span className="ms-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
          <div>
            <div className="h-full w-[16rem] hidden lg:block">
              <div className="w-10/12 mx-auto relative mt-6 md:mt-8 overflow-hidden">
                <ImageWindow bgImg="apparel4" heart={false} hover={false}>
                  <div className="font-bold text-violet-900 text-2xl translate-y-[13rem] translate-x-[10%] absolute inset-0">
                    MOST WANTED
                  </div>
                  <div className=" text-sm font-bold w-[8rem] h-[3rem] flex justify-center items-center px-4 py-2 bg-orange-500 translate-y-[16rem] translate-x-[45%]  rounded-full hover:bg-orange-300 text-white absolute inset-0">
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
