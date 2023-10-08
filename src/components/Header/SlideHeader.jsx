import { useSelector } from "react-redux";

import { Accordion } from "../ProductDetail/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { Fragment } from "react";

import { useTranslation } from "react-i18next";

export const SlideHeader = ({ open, hideFn }) => {
  const category = useSelector((state) => state.category.categories);

  const popmenu = useSelector((state) => state.category.popupMenu);

  const { t } = useTranslation();

  const visibleClass = open ? "translate-x-0" : "-translate-x-full";

  const renderIcon = (title, arrow, icon = null) => {
    return (
      <span className="text-xl flex">
        {icon ? <FontAwesomeIcon icon={icon} /> : null}
        <span className="ps-2">{t(title)}</span>
        {arrow ? (
          <span className="ms-auto pe-2">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        ) : null}
      </span>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 ${visibleClass} w-2/3 sm:w-1/2 z-30 bg-white shadow-md transition-all duration-300 h-screen overflow-auto md:hidden `}
    >
      <h1 className="flex text-white px-2 py-4 bg-blue-400 rounded-br-[50px]">
        <span className="">{t("searchBar.allmenu")}</span>
        <span onClick={hideFn} className="ms-auto pe-4 text-xl">
          x
        </span>
      </h1>
      <div className="mt-2 w-full ps-2">
        {category.map((cate, index) => (
          <Accordion
            key={index}
            {...{
              title: renderIcon(
                t(cate.title),
                cate.subcategory.length > 0,
                cate.icon
              ),
              hasSign: false,
            }}
          >
            {cate.subcategory.length > 0 ? (
              <ul className="flex flex-col gap-3 mt-2">
                {cate.subcategory.map((subcate, index) => (
                  <li key={index} className="flex flex-col">
                    <Fragment>
                      {subcate.title ? (
                        <h1 className="ps-6 font-bold text-md">
                          {t(subcate.title)}
                        </h1>
                      ) : null}
                      <ul className="ps-8">
                        {subcate.items.map((item) => (
                          <li key={item}>{t(item)}</li>
                        ))}
                      </ul>
                    </Fragment>
                  </li>
                ))}
              </ul>
            ) : null}
          </Accordion>
        ))}
      </div>
      <hr className="my-2" />
      <div className="mt-2 w-full ps-2">
        {popmenu.map((pop, index) => (
          <Accordion
            key={index}
            {...{
              title: renderIcon(pop.title, pop.subcategory.length > 0),
              hasSign: false,
            }}
          >
            {pop.subcategory.length > 0 ? (
              <ul className="text-sm flex flex-col gap-3 mt-2">
                {pop.subcategory.map((subcate, index) => (
                  <li key={index} className="flex flex-col">
                    <Fragment>
                      {subcate.title ? (
                        <h1 className="ps-4 font-bold ">{t(subcate.title)}</h1>
                      ) : null}
                      <ul className="ps-6">
                        {subcate.items.map((item) => (
                          <li key={item}>{t(item)}</li>
                        ))}
                      </ul>
                    </Fragment>
                  </li>
                ))}
              </ul>
            ) : null}
          </Accordion>
        ))}
      </div>
    </div>
  );
};
