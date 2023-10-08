import { UpperBanner } from "./UpperBanner";
import { LowerBanner } from "./LowerBanner";

const upperBannerItems = [
  {
    category: "banner.upper.title",
    title: "banner.upper.category1.title",
    subtitle: "banner.upper.category1.subtitle",
    srcImg: "banner1",
  },
  {
    category: "banner.upper.title",
    title: "banner.upper.category2.title",
    subtitle: "banner.upper.category2.subtitle",
    srcImg: "banner2",
  },
];

const lowerBannerItems = [
  {
    srcImg: "procat1",
    title: "banner.lower.Beauty",
    list: [
      "category.Beauty.subcategory.Makeup",
      "category.Beauty.subcategory.SkinCare",
      "category.Beauty.subcategory.HairCare",
      "category.Beauty.subcategory.Fragrance",
      "category.Beauty.subcategory.PersonalCare",
    ],
  },
  {
    srcImg: "procat2",
    title: "banner.lower.Gatdets",
    list: [
      "category.Electronic.subcategory.Camera",
      "category.Electronic.subcategory.CellPhones",
      "category.Electronic.subcategory.Computers",
      "category.Electronic.subcategory.GPS",
      "category.Electronic.subcategory.Headphones",
    ],
  },
  {
    srcImg: "procat3",
    title: "banner.lower.HomeDecor",
    list: [
      "category.HomeKitchen.subcategory.Pantry",
      "category.HomeKitchen.subcategory.LivingRoom",
      "category.HomeKitchen.subcategory.Sunroom",
      "category.HomeKitchen.subcategory.Bedroom",
      "category.HomeKitchen.subcategory.PowderRoom",
    ],
  },
];

export const Banner = () => {
  return (
    <div className="grid  md:grid-rows-2 md:grid-cols-6 gap-3">
      <UpperBanner {...upperBannerItems[0]} />
      <UpperBanner {...upperBannerItems[1]} />
      <LowerBanner {...lowerBannerItems[0]} />
      <LowerBanner {...lowerBannerItems[1]} />
      <LowerBanner {...lowerBannerItems[2]} />
    </div>
  );
};
