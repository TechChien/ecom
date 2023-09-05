import { Heart } from "./Heart";
import { useState } from "react";

export const ImageWindow = ({
  children,
  bgImg,
  heart = true,
  hover = true,
  imageSrcPath = "/src/assets/products/",
}) => {
  const [load, setLoad] = useState(false);

  const handleLoad = (e) => {
    if (!load) {
      setLoad(true);
    }
  };

  const realImg = `${imageSrcPath}${bgImg}.jpg`;

  return (
    <>
      <div
        className={`w-full h-full  bg-${bgImg} bg-center bg-no-repeat bg-cover`}
      >
        <img
          src={realImg}
          className={`w-full h-full ${
            load ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 ease-in-out ${
            hover ? "hover:scale-110" : ""
          }`}
          loading="lazy"
          onLoad={handleLoad}
        />
      </div>
      {heart ? <Heart /> : null}
      {children}
    </>
  );
};
