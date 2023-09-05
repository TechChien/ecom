import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";

import slider0 from "../assets/slider/slider0.jpg";
import slider1 from "../assets/slider/slider1.jpg";
import slider2 from "../assets/slider/slider2.jpg";
import slider3 from "../assets/slider/slider3.jpg";

const images = [slider1, slider0, slider2, slider3];
const cardSize = 960;
const carouselWidth = 960;

const SliderContainer = (props) => {
  if (!Object.hasOwnProperty.call(props, "cursor")) {
    return null;
  }

  const {
    cursor,
    carouselState: { active, dragging },
    ...rest
  } = props;

  const translateX = cursor * cardSize;
  return (
    <div className="w-[960px] aspect-video  relative overflow-hidden touch-pan-x ">
      <div
        className="w-full h-full"
        style={{ transform: `translateX(${translateX}px)` }}
        {...rest}
      >
        {props.children}
      </div>
    </div>
  );
};

const Container = touchWithMouseHOC(SliderContainer);

export const TouchedSlider = () => {
  const renderCard = (index, modIndex) => {
    const item = images[modIndex];

    return (
      <div
        key={index}
        style={{ transform: `translateX(${100 * modIndex}%)` }}
        className="absolute w-full h-full"
      >
        <img className="object-cover w-full" src={item} />
      </div>
    );
  };

  return (
    <TouchCarousel
      component={Container}
      cardSize={960}
      cardCount={images.length}
      renderCard={renderCard}
      // onRest={(index) => console.log(`rest at index ${index}`)}
      // onDragStart={() => console.log("dragStart")}
      // onDragEnd={() => console.log("dragEnd")}
      // onDragCancel={() => console.log("dragCancel")}
      loop={false}
    />
  );
};
