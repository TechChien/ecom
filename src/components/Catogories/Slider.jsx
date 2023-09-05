import { useState } from "react";

import { SliderItem } from "./SliderItem";
import { SliderDots } from "./SliderDots";

import { ImageWord } from "./ImageWord";

import slider0 from "../../assets/slider/slider0.jpg";
import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";

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
  const [curPostion, setCurPostion] = useState(0);
  const images = [slider0, slider1, slider2, slider3];

  const onDotsClick = (index) => (e) => setCurPostion(index);

  return (
    <div className="min-w-full md:min-w-[75%] md:h-[650px] relative flex justify-center items-end overflow-hidden">
      {images.map((image, index) => {
        return (
          <SliderItem
            key={index}
            imgSrc={image}
            index={index}
            curPostion={curPostion}
            mode="landscape"
          >
            <ImageWord
              category={imageContext[index].category}
              title={imageContext[index].title}
              subtitle={imageContext[index].subtitle}
            />
          </SliderItem>
        );
      })}
      <div className="absolute flex gap-3 -translate-y-4">
        {Array.from(Array(4)).map((_, index) => (
          <SliderDots
            onClick={onDotsClick(index)}
            key={index}
            active={curPostion === index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
