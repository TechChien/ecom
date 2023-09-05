import { Breadcrumbs } from "./Breadcrumbs";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { RelatedProduct } from "./ProductDetail/RelatedProduct";
import { Banner } from "./Banner/Banner";

export const ProductPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <ProductDetail />
      <RelatedProduct />
      <Banner />
    </div>
  );
};
