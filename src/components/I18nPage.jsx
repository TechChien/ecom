import { useTranslation } from "react-i18next";

export const I18nPage = () => {
  const { t, i18n } = useTranslation();

  const changeLNG = (lng) => {
    return (e) => {
      i18n.changeLanguage(lng);
    };
  };

  return (
    <div>
      <p>{t("header.test", { name: "Red" })}</p>

      <button onClick={changeLNG("en")}>EN</button>
      <button onClick={changeLNG("zh")}>ZH</button>
    </div>
  );
};
