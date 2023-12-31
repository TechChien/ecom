import { useTranslation } from "react-i18next";

export const ProductStock = ({ stock = 1, sold = 1 }) => {
  const { t } = useTranslation();

  const s = parseInt(stock);
  const so = parseInt(sold);

  const sum = s + so;
  let full = Math.floor((so / sum) * 20);

  return (
    <>
      <div className="flex w-full lg:mt-4">
        {stock ? (
          <span className="text-slate-300">
            {t("stock.sold")} {so}
          </span>
        ) : null}
        <span className="text-slate-300 ms-auto">
          {t("stock.stock")} {s}
        </span>
      </div>
      <div className="flex mt-2  bg-slate-200">
        {Array.from(Array(full)).map((_, index) => (
          <span key={index} className="w-[5%] h-3 bg-slate-400"></span>
        ))}
      </div>
    </>
  );
};
