import { createSlice } from "@reduxjs/toolkit";

import {
  faRocket,
  faDesktop,
  faPersonDress,
  faLeaf,
  faHammer,
  faCrown,
  faPlane,
  faMagnet,
  faLemon,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const initialState = {
  categories: [
    {
      icon: faRocket,
      title: "Beauty",
      imgSrc: "/src/assets/menu/menu_bg1.jpg",
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
    {
      icon: faDesktop,
      title: "Eletronic",
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
    {
      icon: faPersonDress,
      title: "Women's Fashion",
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
    { icon: faLeaf, title: "Men's Fashion", subcategory: [] },
    { icon: faHammer, title: "Girl Fashion", subcategory: [] },
    { icon: faCrown, title: "Boy's Fashion", subcategory: [] },
    { icon: faPlane, title: "Health & Household", subcategory: [] },
    {
      icon: faMagnet,
      title: "Home & Kitchen",
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
    { icon: faLemon, title: "Pet Supplies", subcategory: [] },
    { icon: faShield, title: "Sports", subcategory: [] },
  ],
  popupMenu: [
    {
      title: "Women",
      subcategory: [
        {
          title: "WOMEN'S CLOTHING",
          items: [
            "Dresses",
            "Tops & Tees",
            "Jackets & Coats",
            "Pants & Capris",
            "Sweaters",
            "Costumes",
            "Hoodies & Sweatshirts",
            "Pajamas & Robes",
            "Shorts",
            "Swimwear",
          ],
        },
        {
          title: "JEWELRY",
          items: [
            "Accessories",
            "Bags & Purses",
            "Necklaces",
            "Rings",
            "Earrings",
            "Bracelets",
            "Body Jewelry",
          ],
        },
        {
          title: "BEAUTY",
          items: [
            "Bath Accessories",
            "Makeup & Cosmetics",
            "Skin Care",
            "Hair Care",
            "Essential Oils",
            "Fragrances",
            "Soaps & Bath Bombs",
            "Face Masks & Coverings",
            "Spa Kits & Gifts",
          ],
        },
      ],
    },
    {
      title: "Men",
      subcategory: [],
    },
    {
      title: "Sports",
      subcategory: [],
    },
  ],
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
