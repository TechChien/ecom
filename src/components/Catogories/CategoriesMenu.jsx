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

import { CategoriesItem } from "./CategoriesItem";
import { CategoriesPopMenu } from "./CategoriesPopMenu";

// todo: fetch list of catogory from the backend
// but now still static list
export const listOfCatogory = [
  { icon: faRocket, title: "Beauty" },
  { icon: faDesktop, title: "Eletronic" },
  { icon: faPersonDress, title: "Women's Fashion" },
  { icon: faLeaf, title: "Men's Fashion" },
  { icon: faHammer, title: "Girl Fashion" },
  { icon: faCrown, title: "Boy's Fashion" },
  { icon: faPlane, title: "Health & Household" },
  { icon: faMagnet, title: "Home & Kitchen" },
  { icon: faLemon, title: "Pet Supplies" },
  { icon: faShield, title: "Sports" },
];

export const renderContext = {
  ["Home & Kitchen"]: {},
  ["Beauty"]: {},
  ["Eletronic"]: {},
  ["Women's Fashion"]: {},
};

export const CategoriesMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [itemTitle, setItem] = useState(null);
  const [xp, setXp] = useState(0);
  const [parentH, setParentH] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef) {
      setXp(parentRef.current.offsetWidth);
      setParentH(parentRef.current.offsetHeight);
    }
  }, [parentRef]);

  const clickHandler = (title) => (e) => {
    setItem(() => title);
    if (title == itemTitle) {
      setOpen((o) => !o);
    } else {
      setOpen(true);
    }
  };
  const closePopup = () => {
    if (itemTitle) setItem(() => null);
    if (open) setOpen(false);
  };

  return (
    <>
      <ul ref={parentRef} className="w-full">
        {listOfCatogory.map((item) => (
          <CategoriesItem
            key={item.icon.iconName}
            icon={item.icon}
            title={item.title}
            renderPopup={Object.prototype.hasOwnProperty.call(
              renderContext,
              item.title
            )}
            clickHandler={clickHandler(item.title)}
          />
        ))}
      </ul>

      <CategoriesPopMenu
        {...{ xp, parentH, open, hoverEl: itemTitle, hideFn: closePopup }}
      />
    </>
  );
};
