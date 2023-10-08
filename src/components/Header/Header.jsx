import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Menu } from "./Menu/Menu";
import { DropDownList } from "../DropDown/DropDownList";

const en = "en";
const zh = "zh";

const languagelist = [
  { title: "EN", value: en },
  { title: "ZH", value: zh },
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

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(LAN.value);
  }, [LAN]);

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
          <NavLink to="about">{t("header.myaccount")}</NavLink>
        </div>
        <NavLink className="px-2 font-bold " to="help">
          {t("header.ordertracking")}
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
