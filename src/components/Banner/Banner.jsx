import { UpperBanner } from "./UpperBanner";
import { LowerBanner } from "./LowerBanner";

const upperBannerItems = [
  {
    category: "Brutal Sale",
    title: "Get the deal in here",
    subtitle: "Living Room Chair",
    srcImg: "banner1",
  },
  {
    category: "Brutal Sale",
    title: "Discount everyday",
    subtitle: "Office Outfit",
    srcImg: "banner2",
  },
];

const lowerBannerItems = [
  {
    srcImg: "procat1",
    title: "Beauty",
    list: ["Makeup", "Skin Care", "Hair Care", "Fragrance", "Foot & Hand Care"],
  },
  {
    srcImg: "procat2",
    title: "Gatdets",
    list: [
      "Camera",
      "Cell Phones",
      "Computers",
      "GPS & Navigation",
      "Headphones",
    ],
  },
  {
    srcImg: "procat3",
    title: "Home Decor",
    list: ["Kitchen", "Dining Room", "Pantry", "Great Room", "Breakfast Nook"],
  },
];

export const Banner = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-6  gap-3">
      <UpperBanner {...upperBannerItems[0]} />
      <UpperBanner {...upperBannerItems[1]} />
      <LowerBanner {...lowerBannerItems[0]} />
      <LowerBanner {...lowerBannerItems[1]} />
      <LowerBanner {...lowerBannerItems[2]} />
    </div>
  );
};
