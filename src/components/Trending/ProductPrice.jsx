export const ProductPrice = ({ price, originalPrice }) => {
  return (
    <div className="mt-4">
      <span className="lg:text-2xl text-red-500 font-bold me-3">${price}</span>
      <span className="text-sm text-salte-200 line-through">
        ${originalPrice}
      </span>
    </div>
  );
};
