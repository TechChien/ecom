import { PopupContent } from "./PopupContent";

export const CartSidePopup = ({ open, hideFn }) => {
  const activeClass = open ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className={`fixed top-0 right-0 md:hidden bg-white w-screen h-screen overflow-auto p-4 z-20 ${activeClass} duration-300`}
    >
      <div className="w-full">
        <PopupContent parentImg="cart" hideFn={hideFn} />
      </div>
    </div>
  );
};
