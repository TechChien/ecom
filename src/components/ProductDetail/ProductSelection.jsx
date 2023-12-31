import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/reducer/cartSlice";

import { Stars } from "../Trending/Stars";
import { ProductPrice } from "../Trending/ProductPrice";

import { NumberPicker } from "./NumberPicker";
import { Accordion } from "./Accordion";
import { TableDisplay } from "./TableDisplay";
import { Reviews } from "./Reviews";
import { ReviewForm } from "./ReviewForm";

import { useTranslation } from "react-i18next";

const headerItem = ["Size", "Bust", "Walst", "Hip"];

const dataItems = [
  ["XS", "82.5", "62", "87.5"],
  ["S", "85", "63.5", "89"],
  ["M", "87.5", "67.5", "93"],
  ["L", "90", "72.5", "98"],
  ["XL", "93", "77.5", "10.3"],
];

import { useReducer } from "react";
import { produce } from "immer";
import selctContext from "./selectContext";

const selectReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "color":
      return produce(state, (draft) => {
        draft.color = action.payload;
      });
      break;
    case "size":
      return produce(state, (draft) => {
        draft.size = action.payload;
      });
      break;
    case "number":
      return produce(state, (draft) => {
        draft.amount = action.payload;
      });

    default:
      return state;
  }
};

export const ProductSelection = ({ children, ...props }) => {
  const { t } = useTranslation();

  const [selectState, selectDispatch] = useReducer(selectReducer, {
    color: "",
    size: "",
    amount: 1,
  });

  const dispatch = useDispatch();

  const {
    productId,
    title,
    comments,
    score,
    price,
    originalPrice,
    information: { brands, activity, material, gender },
  } = props;

  const handleAddToCart = (e) => {
    const { color, size, amount } = selectState;
    let subtitle = "";

    if (color != "") {
      subtitle += `Color in ${color}`;
    }

    if (size != "") {
      subtitle += ` size in ${size}`;
    }

    dispatch(addCart({ productId, amount, subtitle }));
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl  lg:text-4xl font-extrabold">{t(title)}</h1>
      <Stars {...{ score, comments }} />
      <span className="bg-slate-300 text-green-500 p-2 font-bold inline-block mt-4 rounded-md">
        {t("productDetail.instock")}
      </span>
      <ProductPrice {...{ price, originalPrice }} />
      <selctContext.Provider value={{ selectState, selectDispatch }}>
        {children}

        <div className="flex gap-4 items-center mt-6">
          <div className="p-2 md:p-4 border-slate-300 flex justify-center items-center gap-3 md:gap-2 lg:gap-4 border rounded-xl w-2/5 sm:w-1/5 md:w-2/5  ">
            <NumberPicker />
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full p-4 md:py-4 bg-red-500 rounded-full md:text-2xl text-white hover:bg-red-400 "
          >
            {t("productDetail.addCart")}
          </button>
        </div>
      </selctContext.Provider>
      <div className="flex gap-6 mt-12">
        <div className="flex gap-2 cursor-pointer">
          <FontAwesomeIcon className="md:text-3xl  text-xl" icon={faHeart} />
          <span className="text-xl md:text-2xl font-extrabold">
            {t("productDetail.WISHLIST")}
          </span>
        </div>
        <div className="flex gap-2  cursor-pointer">
          <FontAwesomeIcon
            className="md:text-3xl  text-xl"
            icon={faShareNodes}
          />
          <span className="text-xl md:text-2xl font-extrabold">
            {t("productDetail.SHARE")}
          </span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-6 mt-12">
        <Accordion title={t("productDetail.Info")}>
          <div className="flex mt-4 gap-4 ps-6">
            <ul className="md:text-xl flex flex-col gap-2">
              <li>{t("productDetail.brands")}</li>
              <li>{t("productDetail.activity")}</li>
              <li>{t("productDetail.material")}</li>
              <li>{t("productDetail.gender")}</li>
            </ul>
            <ul className="md:text-xl  flex flex-col gap-2">
              <li>{t(brands)}</li>
              <li>{t(activity)}</li>
              <li>{t(material)}</li>
              <li>{t(gender)}</li>
            </ul>
          </div>
        </Accordion>
        <hr />
        <Accordion title={t("productDetail.DETAILS")}>
          <div className="mt-4 ps-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            repellendus nam eligendi adipisci sapiente voluptatum laudantium,
            delectus nemo molestiae blanditiis quo dolor saepe aspernatur
            assumenda hic doloremque dignissimos, asperiores deserunt.
          </div>
        </Accordion>
        <hr />
        <Accordion title={t("productDetail.CUSTOMS")}>
          <div className=" mt-4  ps-2">
            <TableDisplay header={headerItem} data={dataItems} />
          </div>
        </Accordion>
        <hr />
        <Accordion title={t("productDetail.REVIEWS")}>
          <div className="mt-4 ps-6 w-full">
            <div className="flex items-center">
              <span className="pe-0 text-3xl md:text-6xl font-extrabold ">
                4.9 <span className="font-thin text-slate-200">/</span>
              </span>
              <span className="px-2">2,251 reviews</span>
            </div>
            <button className="w-full p-2 md:p-4 rounded-full text-white text-lg md:text-2xl bg-blue-800 hover:bg-blue-700 my-6">
              Write review
            </button>

            <Reviews
              {...{
                author: "SARAH",
                timestamp: "7/7/22",
                title: "WORKS LIKE CHARM",
              }}
            />
            <Reviews
              {...{
                author: "FAIZAL",
                timestamp: "1/7/22",
                title: "AWESOME PRODUCT!",
              }}
            />
          </div>
          <div className="hover:text-slate-400 my-4 ms-auto text-end">
            view all Reviews
            <span className="ms-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <hr />
          <ReviewForm />
        </Accordion>
      </div>
    </div>
  );
};
