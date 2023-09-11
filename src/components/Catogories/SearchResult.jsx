import { FeaturingItem } from "../Featuring/FeaturingItem";

const featureItems = [
  {
    score: 5,
    comments: 1955,
    title: "Under Armour Men's Tech",
    price: "56.50",
    originalPrice: "75.50",
    bgImg: "apparel1",
  },
  {
    score: 4,
    comments: 994,
    title: "Women's Lightweight knit Hoodie Sweater Pullover",
    price: "37.5",
    originalPrice: "45.5",
    bgImg: "apparel2",
  },
  {
    score: 5,
    comments: 3459,
    title: "Happy Sailed Womens Summer Boho Floral",
    price: "129.99",
    originalPrice: "189.99",
    bgImg: "apparel3",
  },
  {
    score: 5,
    comments: 10,
    title: "Womens Summer Boho Floral",
    price: "118.9",
    originalPrice: "189.9",
    bgImg: "apparel4",
  },
  {
    score: 5,
    comments: 2251,
    title: "Men Slip On Shoes Casual with Arch Support Insoles",
    price: "80.90",
    originalPrice: "75.5",
    bgImg: "shoe1",
  },
  {
    score: 5,
    comments: 1237,
    title: "Skecgers Women's Go Joy Walking Shoe Sneaker",
    price: "45.95",
    originalPrice: "64.95",
    bgImg: "shoe2",
  },
  {
    score: 5,
    comments: 106,
    title: "Walking Shoe Sneaker Womens",
    price: "139.99",
    originalPrice: "189.98",
    bgImg: "shoe3",
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

export const SearchResult = () => {
  return (
    <div className="mt-3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2  grid-flow-row">
        <FeaturingItem {...featureItems[0]} />
        <FeaturingItem {...featureItems[1]} />
        <FeaturingItem {...featureItems[2]} />
        <FeaturingItem {...featureItems[3]} />
        <FeaturingItem {...featureItems[4]} />
        <FeaturingItem {...featureItems[5]} />
        <FeaturingItem {...featureItems[6]} />
        <FeaturingItem {...featureItems[7]} />
      </div>
    </div>
  );
};
