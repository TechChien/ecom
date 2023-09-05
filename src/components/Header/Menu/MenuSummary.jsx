import { useSelector } from "react-redux";

export const MenuSummary = () => {
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
      <span className="text-sm">Total</span>
      <span className="text-xl">
        ${buyItems.reduce((acc, b) => acc + +b.price * +b.amount, 0)}
      </span>
    </div>
  );
};
