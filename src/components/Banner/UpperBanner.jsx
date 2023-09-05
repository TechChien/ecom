import { ImageWindow } from "../Trending/ImageWindow";

export const UpperBanner = ({ ...props }) => {
  const { category, title, subtitle, srcImg } = props;
  return (
    <div className="col-span-3 border border-slate-300">
      <div className="w-full h-full flex justify-between">
        <div className="w-2/5 p-4 z-[1]">
          <h1 className="text-3xl text-slate-500 font-bold mt-12">
            {category}
          </h1>
          <h1 className="text-2xl text-slate-500 font-bold mt-6 whitespace-nowrap">
            {title}
          </h1>
          <h2 className="text-4xl text-purple-950 font-extrabold whitespace-nowrap">
            {subtitle}
          </h2>
          <button className="text-white font-bold rounded-full px-8 py-4 bg-orange-600 mt-6 hover:bg-orange-400">
            Shop Now
          </button>
        </div>
        <div></div>
        <div className=" h-full">
          <ImageWindow
            bgImg={srcImg}
            heart={false}
            hover={false}
            imageSrcPath="/src/assets/banner/"
          />
        </div>
      </div>
    </div>
  );
};
