import { forwardRef } from "react";

import { ImageWord } from "./ImageWord";

import slider0 from "../../assets/slider/slider0.jpg";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";

import { TouchedSlider } from "../TouchedSlider";

const imageContext = [
  {
    category: "Shoes Fashion",
    title: "Come and Get it",
    subtitle: "BRAND NEW SHOES",
  },
  {
    category: "Quick Fashion",
    title: "Fit your wardrobe",
    subtitle: "WITH LUXURY ITEMS",
  },
  {
    category: "Quick Offer",
    title: "Wooden Minimal Sofa",
    subtitle: "Extra 50% OFF",
  },
  {
    category: "Best Deals",
    title: "Home Workout Accessories",
    subtitle: "PUSH THE LIMIT",
  },
];

export const Slider = () => {
  const images = [slider0, slider1, slider2, slider3];

  const renderFn = (images) => (handlers, index, ref, children) => {
    return (
      <DisplayFrame index={index} ref={ref} handlers={handlers} images={images}>
        {children}
      </DisplayFrame>
    );
  };

  return (
    <TouchedSlider images={images} render={renderFn(images)} dotDisplay />
    // <div className="min-w-full h-[15rem] sm:h-[25rem] md:min-w-[75%] md:h-[650px] relative mt-4 md:mt-0 md:flex justify-center items-end overflow-hidden">
    //   {images.map((image, index) => {
    //     return (
    //       <SliderItem
    //         key={index}
    //         imgSrc={image}
    //         index={index}
    //         curPostion={curPostion}
    //         mode="landscape"
    //       >
    //         <ImageWord
    //           category={imageContext[index].category}
    //           title={imageContext[index].title}
    //           subtitle={imageContext[index].subtitle}
    //         />
    //       </SliderItem>
    //     );
    //   })}

    // </div>
  );
};

const DisplayFrame = forwardRef((props, ref) => {
  const {
    handlers: {
      touchStartHandler,
      touchMoveHandler,
      touchEndHandler,
      mouseStartHandler,
      mouseMoveHandler,
      mouseEndHandler,
    },
    children,
    index,
  } = props;

  return (
    <div
      ref={ref}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      onMouseDown={mouseStartHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseEndHandler}
      onMouseLeave={mouseEndHandler}
      className="touch-none min-w-full h-[15rem] sm:h-[25rem] md:min-w-[75%] md:h-[650px] whitespace-nowrap relative  overflow-x-hidden"
    >
      {children}
      <ImageWord
        category={imageContext[index].category}
        title={imageContext[index].title}
        subtitle={imageContext[index].subtitle}
      />
    </div>
  );
});
