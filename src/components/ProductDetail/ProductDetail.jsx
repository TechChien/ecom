import { ProductSlider } from "./ProductSlider";
import { ProductSelection } from "./ProductSelection";
import { ChoseOne } from "./ChoseOne";
import { ColorPicker } from "./ColorPicker";
import { SizePicker } from "./SizePicker";

import shoe1 from "../../assets/products/shoe1.jpg";
import shoe2 from "../../assets/products/shoe1_1.jpg";
import shoe3 from "../../assets/products/shoe5.jpg";
import shoe4 from "../../assets/products/shoe1_3.jpg";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const ProductDetail = () => {
  const products = useSelector((state) => state.product.data);
  const { t } = useTranslation();
  const images = [shoe1, shoe2, shoe3, shoe4];

  const product = {
    ...products[4],
    information: {
      brands: "Nike",
      activity: "productDetail.running",
      material: "productDetail.fleece",
      gender: "productDetail.men",
    },
  };

  const renderColorFn = (name) => {
    return (
      <>
        <ColorPicker color={"red"} chosen={name === "red"} />
        <ColorPicker color={"green"} chosen={name === "green"} />
        <ColorPicker color={"gray"} chosen={name === "gray"} />
        <ColorPicker color={"yellow"} chosen={name === "yellow"} />
      </>
    );
  };

  const renderSizeFn = (name) => {
    return (
      <>
        <SizePicker size={41} chosen={name === "41"} />
        <SizePicker size={42} chosen={name === "42"} />
        <SizePicker size={43} chosen={name === "43"} />
        <SizePicker size={44} chosen={name === "44"} />
      </>
    );
  };

  return (
    <div className="flex flex-col  md:flex-row w-full gap-4">
      <ProductSlider images={images} />
      <ProductSelection {...product}>
        <h3 className="md:text-xl lg:text-2xl font-bold mt-4">
          {t("productDetail.color")}
        </h3>
        <ChoseOne render={renderColorFn} type="color" />
        <h3 className="md:text-xl lg:text-2xl font-bold mt-4">
          {t("productDetail.size")}
        </h3>
        <ChoseOne render={renderSizeFn} type="size" />
      </ProductSelection>
    </div>
  );
};
