import { ProductCard } from "./ProductCard";

const CardItems = [
  {
    title: "Men Slip On Shoes Casual with Arch Support Insoles",
    score: 5,
    comments: 2251,
    price: "80.90",
    originalPrice: "149.90",
    sold: 2975,
    stock: 453,
    bgImage: "shoe1",
    linkTo: "/Shoes/shoe1",
  },
  {
    title: "Umder Armour Men's Tech",
    score: 4,
    comments: 1955,
    price: "56.50",
    originalPrice: "75.50",
    sold: 2584,
    stock: 727,
    bgImage: "apparel1",
  },
  {
    title: "Vonanda Velvet Sofa Couch, Mid Century Modern...",
    score: 4,
    comments: 1559,
    price: "469.99",
    originalPrice: "560.99",
    sold: 2151,
    stock: 904,
    bgImage: "home1",
  },
  {
    title: "Wireless Headphones Over Ear, Bluetooth Headphones with...",
    score: 5,
    comments: 1411,
    price: "99.98",
    originalPrice: "120.99",
    sold: 1845,
    stock: 370,
    bgImage: "electronic3",
  },
  {
    title: "Black Women's Coat Dress",
    score: 5,
    comments: 1237,
    price: "49.95",
    originalPrice: "130.85",
    sold: 5429,
    stock: 311,
    bgImage: "apparel3",
  },
  {
    title: "Women's Lightweight knit Hoodie Sweater Pullover",
    score: 4,
    comments: 994,
    price: "37.50",
    originalPrice: "45.50",
    sold: 1257,
    stock: 127,
    bgImage: "apparel2",
  },
  {
    title: "Dimmable Ceiling Light Modern",
    score: 4,
    comments: 545,
    price: "279.99",
    originalPrice: "499.99",
    sold: 995,
    stock: 269,
    bgImage: "home2",
  },
  {
    title: "Modern Storage Cabinet with Door & 3 Drawers",
    score: 4.5,
    comments: 336,
    price: "129.99",
    originalPrice: "159.99",
    sold: 756,
    stock: 148,
    bgImage: "home3",
  },
];

export const TrendingRight = () => {
  return (
    <div className="w-2/3 grid grid-rows-4 grid-flow-col gap-2">
      <ProductCard {...CardItems[0]} />
      <ProductCard {...CardItems[1]} />
      <ProductCard {...CardItems[2]} />
      <ProductCard {...CardItems[3]} />
      <ProductCard {...CardItems[4]} />
      <ProductCard {...CardItems[5]} />
      <ProductCard {...CardItems[6]} />
      <ProductCard {...CardItems[7]} />
    </div>
  );
};
