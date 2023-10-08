import { forwardRef } from "react";

import { ImageWord } from "./ImageWord";

import slider0 from "../../assets/slider/slider0.jpg";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";

import { TouchedSlider } from "../TouchedSlider";
import { useTranslation } from "react-i18next";

const imageContext = [
  {
    category: "slider.image1.category",
    title: "slider.image1.title",
    subtitle: "slider.image1.subtitle",
  },
  {
    category: "slider.image2.category",
    title: "slider.image2.title",
    subtitle: "slider.image2.subtitle",
  },
  {
    category: "slider.image3.category",
    title: "slider.image3.title",
    subtitle: "slider.image3.subtitle",
  },
  {
    category: "slider.image4.category",
    title: "slider.image4.title",
    subtitle: "slider.image4.subtitle",
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

  return <TouchedSlider images={images} render={renderFn(images)} dotDisplay />;
};

const DisplayFrame = forwardRef((props, ref) => {
  const { t } = useTranslation();
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
        category={t(imageContext[index].category)}
        title={t(imageContext[index].title)}
        subtitle={t(imageContext[index].subtitle)}
        t={t}
      />
    </div>
  );
});
