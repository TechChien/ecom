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

const headerItem = ["Size", "Bust", "Walst", "HIp"];

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

  console.log(selectState);

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
    <div className="w-1/2">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <Stars {...{ score, comments }} />
      <span className="bg-slate-300 text-green-500 p-2 font-bold inline-block mt-4 rounded-md">
        In Stock
      </span>
      <ProductPrice {...{ price, originalPrice }} />
      <selctContext.Provider value={{ selectState, selectDispatch }}>
        {children}

        <div className="flex gap-4 items-center mt-6">
          <div className="p-4 border-slate-300 flex justify-center items-center gap-6 border rounded-xl w-1/3">
            <NumberPicker />
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-red-500 rounded-full text-2xl text-white hover:bg-red-400 "
          >
            Add to Cart
          </button>
        </div>
      </selctContext.Provider>
      <div className="flex gap-6 mt-12">
        <div className="flex gap-2 cursor-pointer">
          <FontAwesomeIcon className="text-3xl " icon={faHeart} />
          <span className="text-2xl font-extrabold">WISHLIST</span>
        </div>
        <div className="flex gap-2  cursor-pointer">
          <FontAwesomeIcon className="text-3xl " icon={faShareNodes} />
          <span className="text-2xl font-extrabold">SHARE</span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-12">
        <Accordion title="INFORMATION">
          <div className="flex mt-4 gap-4 ps-6">
            <ul className="text-xl flex flex-col gap-2">
              <li>BRANDS</li>
              <li>ACTIVITY</li>
              <li>MATERIAL</li>
              <li>GENDER</li>
            </ul>
            <ul className="text-xl  flex flex-col gap-2">
              <li>{brands}</li>
              <li>{activity}</li>
              <li>{material}</li>
              <li>{gender}</li>
            </ul>
          </div>
        </Accordion>
        <Accordion title="DETAILS">
          <div className="mt-4 ps-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
            repellendus nam eligendi adipisci sapiente voluptatum laudantium,
            delectus nemo molestiae blanditiis quo dolor saepe aspernatur
            assumenda hic doloremque dignissimos, asperiores deserunt.
          </div>
        </Accordion>
        <Accordion title="CUSTOMS">
          <div className=" mt-4  ps-2">
            <TableDisplay header={headerItem} data={dataItems} />
          </div>
        </Accordion>
        <Accordion title="REVIEWS">
          <div className="mt-4 ps-6 w-full">
            <div className="flex items-center">
              <span className="pe-0 text-6xl font-extrabold ">
                4.9 <span className="font-thin text-slate-200">/</span>
              </span>
              <span className="px-2">2,251 reviews</span>
            </div>
            <button className="w-full p-4 rounded-full text-white text-2xl bg-blue-800 hover:bg-blue-700 my-6">
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
