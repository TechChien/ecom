import { Heart } from "./Heart";

export const ImageWindow = ({ children, bgImg }) => {
  return (
    <div className="w-10/12 mx-auto relative mt-6 md:mt-8">
      <div
        className={`w-full aspect-[10/12]  bg-${bgImg} bg-center bg-no-repeat bg-cover`}
      ></div>
      <Heart />
      {children}
    </div>
  );
};
