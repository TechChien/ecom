import { useRef, useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router";

import { CategoriesMenu } from "../Catogories/CategoriesMenu";
import { Hamburger } from "./Hamburger";

export const AllMenu = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const location = useLocation();

  const ref = useRef();

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
          <h2 className="px-2 text-xl font-bold ">All Departments</h2>
          <p className="px-2">Total 1059 Products</p>
        </div>

        <Hamburger open={open} onClick={handleClick} />
      </div>
      {render && open ? (
        <div
          style={{ left: 0, top: height, width, zIndex: 10 }}
          className="bg-slate-300 absolute"
        >
          <CategoriesMenu />
        </div>
      ) : null}
    </div>
  );
};
