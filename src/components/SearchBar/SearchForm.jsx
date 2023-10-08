import { useTranslation } from "react-i18next";

export const SearchForm = () => {
  const { t } = useTranslation();

  const placeholder = "🔎" + t("searchBar.placeholder");

  return (
    <form className="mt-4 lg:mt-2 flex w-full mx-auto">
      <input
        className="py-2 px-3 rounded-md lg:text-xl w-full text-slate-950 outline-none"
        placeholder={placeholder}
      />
      <button className="bg-red-500 whitespace-nowrap text-white -translate-x-2 rounded-r-md rounded-d-md lg:text-xl px-4 hover:bg-red-300">
        {t("searchBar.btn_text")}
      </button>
    </form>
  );
};
