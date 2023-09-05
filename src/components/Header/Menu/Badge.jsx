import { useSelector } from "react-redux";

export const Badge = ({ parentImg = "cart" }) => {
  const items = useSelector((state) => state[parentImg]?.items);

  if (!items) return null;

  return (
    <>
      {items.length ? (
        <span className="absolute top-0 -right-2  w-4 h-4  rounded-full bg-red-400 text-sm flex justify-center items-center">
          {items.length}
        </span>
      ) : null}
    </>
  );
};
