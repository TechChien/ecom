import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const context = {
  ["Beauty"]: {
    bg: "bg-menubg1",
    subcategory: [
      {
        items: [
          "category.Beauty.subcategory.Makeup",
          "category.Beauty.subcategory.SkinCare",
          "category.Beauty.subcategory.HairCare",
          "category.Beauty.subcategory.Fragrance",
          "category.Beauty.subcategory.FootHandCare",
          "category.Beauty.subcategory.ToolsAccessories",
          "category.Beauty.subcategory.ShaveHairRemoval",
          "category.Beauty.subcategory.PersonalCare",
        ],
      },
    ],
  },
  ["Electronic"]: {
    bg: "bg-menubg2",
    subcategory: [
      {
        items: [
          "category.Electronic.subcategory.Camera",
          "category.Electronic.subcategory.CellPhones",
          "category.Electronic.subcategory.Computers",
          "category.Electronic.subcategory.GPS",
          "category.Electronic.subcategory.Headphones",
          "category.Electronic.subcategory.HomeAudio",
          "category.Electronic.subcategory.VedioProjectors",
          "category.Electronic.subcategory.WearableTechnology",
        ],
      },
    ],
  },
  ["Women's Fashion"]: {
    bg: "bg-menubg3",
    subcategory: [
      {
        items: [
          "category.WomenFashion.subcategory.Clothing",
          "category.WomenFashion.subcategory.Shoes",
          "category.WomenFashion.subcategory.Jewelry",
          "category.WomenFashion.subcategory.Watches",
          "category.WomenFashion.subcategory.Handbags",
          "category.WomenFashion.subcategory.Accessories",
        ],
      },
    ],
  },
  ["Home & Kitchen"]: {
    bg: "bg-menubg4",
    subcategory: [
      {
        title: "category.HomeKitchen.subcategory.KitchenSection",
        items: [
          "category.HomeKitchen.subcategory.Kitchen",
          "category.HomeKitchen.subcategory.DiningRoom",
          "category.HomeKitchen.subcategory.Pantry",
          "category.HomeKitchen.subcategory.GreatRoom",
          "category.HomeKitchen.subcategory.BreakfastNook",
        ],
      },
      {
        title: "category.HomeKitchen.subcategory.LivingSection",
        items: [
          "category.HomeKitchen.subcategory.LivingRoom",
          "category.HomeKitchen.subcategory.FamilyRoom",
          "category.HomeKitchen.subcategory.Sunroom",
        ],
      },
      {
        title: "category.HomeKitchen.subcategory.BedSection",
        items: [
          "category.HomeKitchen.subcategory.BathRoom",
          "category.HomeKitchen.subcategory.PowderRoom",
          "category.HomeKitchen.subcategory.Bedroom",
          "category.HomeKitchen.subcategory.StorageCloset",
          "category.HomeKitchen.subcategory.BabyKids",
        ],
      },
      {
        title: "category.HomeKitchen.subcategory.UtilitySection",
        items: [
          "category.HomeKitchen.subcategory.Laundry",
          "category.HomeKitchen.subcategory.Garage",
          "category.HomeKitchen.subcategory.Mudroom",
        ],
      },
      {
        title: "category.HomeKitchen.subcategory.OutdoorSection",
        items: [
          "category.HomeKitchen.subcategory.Landscape",
          "category.HomeKitchen.subcategory.Patio",
          "category.HomeKitchen.subcategory.Deck",
          "category.HomeKitchen.subcategory.Pool",
          "category.HomeKitchen.subcategory.Backyard",
          "category.HomeKitchen.subcategory.Porch",
          "category.HomeKitchen.subcategory.Exterior",
          "category.HomeKitchen.subcategory.OutdoorKitchen",
          "category.HomeKitchen.subcategory.FrontYard",
          "category.HomeKitchen.subcategory.Driveway",
          "category.HomeKitchen.subcategory.Poolhouse",
        ],
      },
    ],
  },
};

export const CategoriesPopMenu = ({ hoverEl, open, xp, parentH, hideFn }) => {
  const { t } = useTranslation();

  const content = () => {
    if (!open || !hoverEl || !context[hoverEl]) {
      return null;
    }

    const { subcategory, bg } = context[hoverEl];
    // left-[${xp}px] left-[384px]  bg-${bg}
    let width = 12;
    if (subcategory.length > 6) {
      width *= 4;
    } else if (subcategory.length > 4) {
      width *= 3;
    } else if (subcategory.length > 2) {
      width *= 2;
    }

    return (
      <div
        onMouseLeave={hideFn}
        style={{
          left: `${xp - 1}px`,
          top: 0,
          opacity: 1,
          width: `${width}rem`,
          zIndex: 30,
          minHeight: `${parentH}px`,
        }}
        className={`absolute bg-cover bg-right-top ${bg}`}
      >
        <div className="grid grid-rows-2 grid-flow-col gap-x-12">
          {subcategory.map((sub) => {
            const title = sub?.title;
            const items = sub?.items;
            // const { items, title } = sub;
            let cl = "py-2 px-4 ";

            if (items.length >= 8) {
              cl += "row-span-2";
            }
            return (
              <div className={cl} key={title ? title : items[0]}>
                <ul className="flex flex-col gap-6">
                  {title ? (
                    <li className="font-bold whitespace-nowrap">{t(title)}</li>
                  ) : null}
                  {items.map((item) => (
                    <li key={item} className="hover:text-white">
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return <Fragment>{content()}</Fragment>;
};
