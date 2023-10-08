import { PopupContent } from "./PopupContent";
import { CART } from "./items";

export const MenuPopup = ({ top, hideFn, parentImg = CART }) => {
  return (
    <div
      style={{ top: top, zIndex: 21, right: 0 }}
      className="hidden sm:block sm:absolute py-2 px-4  sm:w-[30rem] bg-white boder-white border shadow-xl"
    >
      <PopupContent hideFn={hideFn} parentImg={parentImg} />
    </div>
  );
};
