import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Heading } from "../Heading";
import { FeaturingItem } from "../Featuring/FeaturingItem";

const relatedItems = [
  {
    score: 5,
    comments: 2251,
    title: "Men Slip On Shoes Casual with Arch Support Insoles",
    price: "79.90",
    originalPrice: "119.90",
    bgImg: "shoe1_2",
  },
  {
    score: 4,
    comments: 1237,
    title: "Skechers Women's Go Joy Walking Shoe Sneaker",
    price: "45.90",
    originalPrice: "64.95",
    bgImg: "shoe3",
  },
  {
    score: 4,
    comments: 106,
    title: "Walking Shoe Sneaker Womens",
    price: "139.99",
    originalPrice: "189.99",
    bgImg: "shoe2",
  },
  {
    score: 5,
    comments: 25,
    title: "Women Summer Tosca Shoe",
    price: "104.90",
    originalPrice: "189.90",
    bgImg: "shoe4",
  },
];

export const RelatedProduct = () => {
  return (
    <div className="mt-6">
      <div className="flex w-full my-4">
        <Heading title="Related Products" />
        <div className="hover:text-white mt-4 ms-auto ">
          view all
          <span className="ms-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-4 grid-flow-col gap-3 mt-4">
        <FeaturingItem {...relatedItems[0]} />
        <FeaturingItem {...relatedItems[1]} />
        <FeaturingItem {...relatedItems[2]} />
        <FeaturingItem {...relatedItems[3]} />
      </div>
    </div>
  );
};
