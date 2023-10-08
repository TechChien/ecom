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
      title: "category.Beauty.title",
      imgSrc: "/src/assets/menu/menu_bg1.jpg",
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
    {
      icon: faDesktop,
      title: "category.Electronic.title",
      bg: "/src/assets/menu/menu_bg2.jpg",
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
    {
      icon: faPersonDress,
      title: "category.WomenFashion.title",
      bg: "/src/assets/menu/menu_bg3.jpg",
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
    { icon: faLeaf, title: "category.MenFashion.title", subcategory: [] },
    { icon: faHammer, title: "category.GirlFashion.title", subcategory: [] },
    { icon: faCrown, title: "category.BoyFashion.title", subcategory: [] },
    { icon: faPlane, title: "category.HealthHousehold.title", subcategory: [] },
    {
      icon: faMagnet,
      title: "category.HomeKitchen.title",
      bg: "/src/assets/menu/menu_bg4.jpg",
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
    { icon: faLemon, title: "category.PetSupplies.title", subcategory: [] },
    { icon: faShield, title: "category.Sports.title", subcategory: [] },
  ],
  popupMenu: [
    {
      title: "popupMenu.Women.title",
      subcategory: [
        {
          title: "popupMenu.Women.WOMENCLOTHING.title",
          items: [
            "popupMenu.Women.WOMENCLOTHING.Dresses",
            "popupMenu.Women.WOMENCLOTHING.TopsTees",
            "popupMenu.Women.WOMENCLOTHING.JacketsCoats",
            "popupMenu.Women.WOMENCLOTHING.PantsCapris",
            "popupMenu.Women.WOMENCLOTHING.Sweaters",
            "popupMenu.Women.WOMENCLOTHING.Costumes",
            "popupMenu.Women.WOMENCLOTHING.HoodiesSweatshirts",
            "popupMenu.Women.WOMENCLOTHING.PajamasRobes",
            "popupMenu.Women.WOMENCLOTHING.Shorts",
            "popupMenu.Women.WOMENCLOTHING.Swimwear",
          ],
        },
        {
          title: "popupMenu.Women.JEWELRY.title",
          items: [
            "popupMenu.Women.JEWELRY.Accessories",
            "popupMenu.Women.JEWELRY.BagsPurses",
            "popupMenu.Women.JEWELRY.Necklaces",
            "popupMenu.Women.JEWELRY.Rings",
            "popupMenu.Women.JEWELRY.Earrings",
            "popupMenu.Women.JEWELRY.Bracelets",
            "popupMenu.Women.JEWELRY.BodyJewelry",
          ],
        },
        {
          title: "popupMenu.Women.BEAUTY.title",
          items: [
            "popupMenu.Women.BEAUTY.BathAccessories",
            "popupMenu.Women.BEAUTY.MakeupCosmetics",
            "popupMenu.Women.BEAUTY.SkinCare",
            "popupMenu.Women.BEAUTY.HairCare",
            "popupMenu.Women.BEAUTY.EssentialOils",
            "popupMenu.Women.BEAUTY.Fragrances",
            "popupMenu.Women.BEAUTY.SoapsBathBombs",
            "popupMenu.Women.BEAUTY.FaceMasksCoverings",
            "popupMenu.Women.BEAUTY.SpaKitsGifts",
          ],
        },
      ],
    },
    {
      title: "header.men",
      subcategory: [],
    },
    {
      title: "header.sport",
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
