import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { roundToTwo } from "../../utils/roundTwo";

export const MenuSummary = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => state["cart"]?.items);
  const products = useSelector((state) => state.product.data);

  const buyItems = items.map((item) => {
    return {
      amount: item.amount,
      ...products[item.productId - 1],
    };
  });

  return (
    <div className="flex flex-col">
      <span className="text-sm">{t("header.total")}</span>
      <span className="text-xl">
        $
        {roundToTwo(buyItems.reduce((acc, b) => acc + +b.price * +b.amount, 0))}
      </span>
    </div>
  );
};
