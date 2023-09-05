import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { DropDownList } from "../DropDown/DropDownList";

const ENG = "ENG";
const SPA = "SPA";
const JAP = "JAP";
const TW = "TW";

const CURNAME = "CUR";
const LANNAME = "LAN";

const languagelist = [
  { title: "ENG", value: ENG },
  { title: "SPA", value: SPA },
  { title: "JAP", value: JAP },
  { title: "TW", value: TW },
];

const currencylist = [
  { title: "USD", value: "$" },
  { title: "YEN", value: "¥" },
  { title: "EU", value: "€" },
  { title: "UK", value: "£" },
];

export const Header = () => {
  const [CUR, setCUR] = useState(currencylist[0].value);
  const [LAN, setLAN] = useState(languagelist[0].value);

  const handleDropdownListChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case CURNAME:
        setCUR(e.target.value);
        break;
      case LANNAME:
        setLAN(e.target.value);
        break;
      default:
        console.log("Could not recognize the name of the drop down list");
        break;
    }
  };

  return (
    <header className="min-w-full  text-slate-700 text-xl mt-2">
      <nav className="flex gap-8">
        <div className="ms-auto">
          <NavLink to="/">Sign Up</NavLink>
        </div>
        <NavLink to="about">My Account</NavLink>
        <NavLink to="help">Order Tracking</NavLink>
        <DropDownList
          name={CURNAME}
          options={currencylist}
          onChange={handleDropdownListChange}
        >
          {CUR}
        </DropDownList>
        <DropDownList
          name={LANNAME}
          options={languagelist}
          onChange={handleDropdownListChange}
        >
          {LAN}
        </DropDownList>
      </nav>
      <Menu />
    </header>
  );
};
