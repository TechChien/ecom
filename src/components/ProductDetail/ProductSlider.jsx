import { useState } from "react";

import { SliderItem } from "../Catogories/SliderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleRight,
  faCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

// import shoe1 from "../../assets/products/shoe1.jpg";
// import shoe2 from "../../assets/products/shoe1-1.jpg";
// import shoe3 from "../../assets/products/shoe5.jpg";
// import shoe4 from "../../assets/products/shoe1-3.jpg";

const calculateCentralImage = (totalImageCount, curPos) => {
  if (curPos === 0) {
    return 1;
  } else if (curPos === totalImageCount - 1) {
    return totalImageCount - 2;
  }
  return curPos;
};

export const ProductSlider = ({ images }) => {
  const [curPostion, setCurPostion] = useState(0);

  const centralImagePostion = calculateCentralImage(images.length, curPostion);

  const handleLeftClick = (e) => {
    setCurPostion((c) => {
      if (c === 0) {
        return c;
      }
      return c - 1;
    });
  };

  const handleRightClick = (e) => {
    setCurPostion((c) => {
      if (c === images.length - 1) {
        return c;
      }
      return c + 1;
    });
  };

  return (
    <div className="w-full md:w-1/2 min-h-[20rem]">
      <div className=" relative overflow-hidden h-[50rem] ">
        {images.map((image, index) => {
          return (
            <SliderItem
              key={index}
              imgSrc={image}
              index={index}
              curPostion={curPostion}
            />
          );
        })}
        {curPostion !== 0 ? (
          <FontAwesomeIcon
            onClick={handleLeftClick}
            className="absolute text-white text-xl lg:text-3xl translate-y-[25rem] left-2 hover:-translate-x-1 hover:scale-125 cursor-pointer hover:opacity-100 opacity-40 "
            icon={faCircleLeft}
          />
        ) : null}
        {curPostion !== 3 ? (
          <FontAwesomeIcon
            onClick={handleRightClick}
            className="absolute text-white text-xl lg:text-3xl translate-y-[25rem] right-2 hover:translate-x-1 hover:scale-125 hover:opacity-100 opacity-40  cursor-pointer "
            icon={faCircleRight}
          />
        ) : null}
      </div>
      <div className="mt-4 flex gap-3 justify-center overflow-hidden">
        {Array.from(Array(3)).map((_, index) => {
          switch (index) {
            case 0:
              return (
                <img
                  key={index}
                  className="w-1/3 h-80 object-cover "
                  src={images[centralImagePostion - 1]}
                />
              );
            case 1:
              return (
                <img
                  key={index}
                  className="w-1/3 h-80 object-cover "
                  src={images[centralImagePostion]}
                />
              );
            case 2:
              return (
                <img
                  key={index}
                  className="w-1/3 h-80 object-cover "
                  src={images[centralImagePostion + 1]}
                />
              );
          }
        })}
      </div>
    </div>
  );
};
