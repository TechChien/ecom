import { Fragment } from "react";

const context = {
  ["Beauty"]: {
    bg: "/src/assets/menu/menu_bg1.jpg",
    subcategory: [
      {
        items: [
          "Makeup",
          "Skin Care",
          "Hair Care",
          "Fragrance",
          "Foot & Hand Care",
          "Tools & Accessories",
          "Shave & Hair Removal",
          "Personal Care",
        ],
      },
    ],
  },
  ["Eletronic"]: {
    bg: "/src/assets/menu/menu_bg2.jpg",
    subcategory: [
      {
        items: [
          "Camera",
          "Cell Phones",
          "Computers",
          "GPS & Navigation",
          "Headphones",
          "Home Audio",
          "Vedio Projectors",
          "Wearable Technology",
        ],
      },
    ],
  },
  ["Women's Fashion"]: {
    bg: "/src/assets/menu/menu_bg3.jpg",
    subcategory: [
      {
        items: [
          "Clothing",
          "Shoes",
          "Jewelry",
          "Watches",
          "Handbags",
          "Accessories",
        ],
      },
    ],
  },
  ["Home & Kitchen"]: {
    bg: "/src/assets/menu/menu_bg4.jpg",
    subcategory: [
      {
        title: "Kitchen & Dining",
        items: [
          "Kitchen",
          "Dining Room",
          "Pantry",
          "Great Room",
          "Breakfast Nook",
        ],
      },
      {
        title: "Living",
        items: ["Living Room", "Family Room", "Sunroom"],
      },
      {
        title: "Bed & Bath",
        items: [
          "Bathroom Room",
          "Powder Room",
          "Bedroom",
          "Storage & Closet",
          "Baby & Kids",
        ],
      },
      {
        title: "Utility",
        items: ["Laundry", "Garage", "Mudroom"],
      },
      {
        title: "Outdoor",
        items: [
          "Landscape",
          "Patio",
          "Deck",
          "Pool",
          "Backyard",
          "Porch",
          "Exterior",
          "Outdoor Kitchen",
          "Front Yard",
          "Driveway",
          "Poolhouse",
        ],
      },
    ],
  },
};

export const CategoriesPopMenu = ({ hoverEl, open, xp, parentH, hideFn }) => {
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
          backgroundImage: `url(${bg})`,
          left: `${xp - 1}px`,
          top: 0,
          opacity: 1,
          width: `${width}rem`,
          zIndex: 10,
          minHeight: `${parentH}px`,
        }}
        className={`absolute bg-cover bg-right-top`}
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
                    <li className="font-bold whitespace-nowrap">{title}</li>
                  ) : null}
                  {items.map((item) => (
                    <li key={item} className="hover:text-white">
                      {item}
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
