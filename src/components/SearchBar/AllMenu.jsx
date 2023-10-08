import { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router";

import { CategoriesMenu } from "../Catogories/CategoriesMenu";
import { Hamburger } from "./Hamburger";
import { useTranslation } from "react-i18next";

export const AllMenu = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const location = useLocation();

  const ref = useRef();

  const { t } = useTranslation();

  useEffect(() => {
    if (ref) {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  useEffect(() => {
    if (location.pathname) {
      // console.log(location.pathname);
      setRender((r) => location.pathname !== "/");
    }
  }, [location.pathname]);

  const handleClick = (event) => {
    setOpen((o) => !o);
  };

  return (
    <div className=" bg-red-500  py-4 w-1/4 relative" ref={ref}>
      <div className="flex">
        <div className="text-white">
          <h2 className="px-2 lg:text-xl font-bold whitespace-nowrap">
            {t("searchBar.allmenu")}
          </h2>
          <p className="px-2 whitespace-nowrap">{t("searchBar.products")}</p>
        </div>

        <Hamburger open={open} onClick={handleClick} />
      </div>
      {render && open ? (
        <div
          style={{ left: 0, top: height, width }}
          className="bg-slate-300 absolute  z-20"
        >
          <CategoriesMenu />
        </div>
      ) : null}
    </div>
  );
};
