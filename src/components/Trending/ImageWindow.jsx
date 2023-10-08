import { Heart } from "./Heart";
import { useState, useEffect } from "react";

const modules = import.meta.glob([
  "/src/assets/products/*.jpg",
  "/src/assets/banner/*.jpg",
]);

export const ImageWindow = ({
  children,
  bgImg,
  heart = true,
  hover = true,
  imageSrcPath = "/src/assets/products/",
}) => {
  const [load, setLoad] = useState(false);
  const [image, setImage] = useState("");
  const realImg = `${imageSrcPath}${bgImg}.jpg`;

  useEffect(() => {
    if (!load && image === "") {
      if (typeof modules[realImg] === "function") {
        modules[realImg]().then((mod) => {
          setImage(mod.default);
          setLoad(true);
        });
      }
    }
  }, [load, setLoad, image, setImage]);

  return (
    <>
      <div
        className={`w-full h-full  bg-${bgImg} bg-center bg-no-repeat bg-cover`}
      >
        <img
          src={image}
          className={`w-full h-full ${
            load ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 object-fit ease-in-out ${
            hover ? "hover:scale-110" : ""
          }`}
          loading="lazy"
        />
      </div>
      {heart ? <Heart /> : null}
      {children}
    </>
  );
};
