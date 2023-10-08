import { useRef, useState, useEffect } from "react";
import {
  faRocket,
  faDesktop,
  faPersonDress,
  faLeaf,
  faHammer,
  faCrown,
  faPlane,
  faMagnet,
  faLemon,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import { CategoriesItem } from "./CategoriesItem";
import { CategoriesPopMenu } from "./CategoriesPopMenu";

// todo: fetch list of catogory from the backend
// but now still static list
export const listOfCatogory = [
  { icon: faRocket, title: "category.Beauty.title", hasSub: true },
  { icon: faDesktop, title: "category.Electronic.title", hasSub: true },
  { icon: faPersonDress, title: "category.WomenFashion.title", hasSub: true },
  { icon: faLeaf, title: "category.MenFashion.title" },
  { icon: faHammer, title: "category.GirlFashion.title" },
  { icon: faCrown, title: "category.BoyFashion.title" },
  { icon: faPlane, title: "category.HealthHousehold.title" },
  { icon: faMagnet, title: "category.HomeKitchen.title", hasSub: true },
  { icon: faLemon, title: "category.PetSupplies.title" },
  { icon: faShield, title: "category.Sports.title" },
];

export const CategoriesMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [itemTitle, setItem] = useState(null);
  const [xp, setXp] = useState(0);
  const [parentH, setParentH] = useState(0);
  // const parentRef = useRef(null);
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (parentRef) {
  //     setXp(parentRef.current.offsetWidth);
  //     setParentH(parentRef.current.offsetHeight);
  //   }
  // }, [parentRef]);

  const clickHandler = (title) => (e) => {
    const ulDOM = document.querySelector("#categorymenu");
    const p = ulDOM.getBoundingClientRect().width;
    // ulDOM.getBoundingClientRect().left +
    const h = ulDOM.getBoundingClientRect().height;

    setItem(() => title);
    if (title == itemTitle) {
      setOpen((o) => !o);
    } else {
      setOpen(true);
    }

    setXp(p);
    setParentH(h);
  };
  const closePopup = () => {
    if (itemTitle) setItem(() => null);
    if (open) setOpen(false);
  };

  return (
    <>
      <ul id="categorymenu" className="w-full">
        {listOfCatogory.map((item) => (
          <CategoriesItem
            key={item.icon.iconName}
            icon={item.icon}
            title={t(item.title)}
            renderPopup={item.hasSub}
            clickHandler={clickHandler(t(item.title, { lng: "en" }))}
          />
        ))}
      </ul>

      <CategoriesPopMenu
        {...{ xp, parentH, open, hoverEl: itemTitle, hideFn: closePopup }}
      />
    </>
  );
};
