import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { DropDownList } from "../DropDown/DropDownList";

const ENG = "ENG";
const SPA = "SPA";
const JAP = "JAP";
const TW = "TW";

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
  const [CUR, setCUR] = useState(currencylist[0]);
  const [LAN, setLAN] = useState(languagelist[0]);

  const getCurrencyListValue = (value) => {
    setCUR(value);
  };

  const getLanguageListValue = (value) => {
    setLAN(value);
  };

  return (
    <header className="min-w-full  text-slate-700 mt-2 ">
      <nav className="md:flex gap-2  hidden">
        <div className="ms-auto px-2 font-bold ">
          <NavLink to="about">My Account</NavLink>
        </div>
        <NavLink className="px-2 font-bold " to="help">
          Order Tracking
        </NavLink>
        <DropDownList
          options={currencylist}
          onChange={getCurrencyListValue}
          firstChose={CUR}
        />
        <DropDownList
          options={languagelist}
          onChange={getLanguageListValue}
          firstChose={LAN}
        />
      </nav>
      <Menu />
    </header>
  );
};
