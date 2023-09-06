import { ProductSlider } from "./ProductDetail/ProductSlider";
import { ProductSelection } from "./ProductDetail/ProductSelection";
import { Breadcrumbs } from "./Breadcrumbs";
import { RelatedProduct } from "./ProductDetail/RelatedProduct";
import { Banner } from "./Banner/Banner";

import { SizePicker } from "./ProductDetail/SizePicker";
import { ChoseOne } from "./ProductDetail/ChoseOne";

import { CountDown } from "./Trending/CountDown";
import { ProductStock } from "./Trending/ProductStock";

import apparel4 from "../assets/products/apparel4.jpg";
import apparel5 from "../assets/products/apparel5.jpg";
import apparel6 from "../assets/products/apparel6.jpg";

export const ProductOnSale = () => {
  const images = [apparel4, apparel5, apparel6];

  const product = {
    productId: 4,
    score: 5,
    comments: 10,
    title: "Womens Summer Boho Floral",
    price: "118.9",
    originalPrice: "189.9",
    sold: 2109,
    stock: 179,
    bgImg: "apparel4",
    information: {
      brands: "Zara",
      activity: "Formal",
      material: "Cotton",
      gender: "Women",
    },
  };

  const renderSizeFn = (name) => {
    return (
      <>
        <SizePicker size={"S"} chosen={name === "S"} />
        <SizePicker size={"M"} chosen={name === "M"} />
        <SizePicker size={"L"} chosen={name === "L"} />
        <SizePicker size={"XL"} chosen={name === "XL"} />
      </>
    );
  };

  return (
    <div>
      <Breadcrumbs />
      <div className="flex flex-col  md:flex-row w-full gap-4">
        <ProductSlider images={images} />
        <ProductSelection {...product}>
          <ProductStock stock={107} sold={3459} />
          <CountDown />
          <h3 className=" md:text-xl lg:text-2xl font-bold mt-4">Size</h3>
          <ChoseOne render={renderSizeFn} type="size" />
        </ProductSelection>
      </div>
      <RelatedProduct />
      <Banner />
    </div>
  );
};
