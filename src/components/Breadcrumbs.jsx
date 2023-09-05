import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";

export const Breadcrumbs = () => {
  const location = useLocation();

  //  /help/contact --> help | contact

  let currentLink = "";

  // console.log(location.pathname);

  const crumbs = location.pathname.split("/").map((crumb) => {
    if (crumb === "") {
      return (
        <div key="Home">
          <Link to={"/"}>Home</Link>
        </div>
      );
    }
    currentLink += `/${crumb}`;
    return (
      <div className="flex gap-3" key={crumb}>
        <span>/</span>
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      </div>
    );
  });

  return <div className="mt-4 py-1 text-salte-400 flex gap-3">{crumbs}</div>;
};
