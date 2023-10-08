import { ImageWindow } from "../Trending/ImageWindow";
import { useTranslation } from "react-i18next";
export const UpperBanner = ({ ...props }) => {
  const { category, title, subtitle, srcImg } = props;
  const { t } = useTranslation();
  return (
    <div className="col-span-3 border border-slate-300">
      <div className="w-full h-full flex justify-between">
        <div className="w-2/5 p-4 z-[1]">
          <h1 className="text-2xl lg:text-3xl text-slate-500 font-bold mt-12">
            {t(category)}
          </h1>
          <h1 className="md:text-xl lg:text-2xl text-slate-500 font-bold mt-6 whitespace-nowrap">
            {t(title)}
          </h1>
          <h2 className="lg:text-4xl  md:text-2xl text-purple-950 font-extrabold whitespace-nowrap">
            {t(subtitle)}
          </h2>
          <button className="text-white font-bold rounded-full px-4 md:px-8 md:py-4 py-2 bg-orange-600 mt-6 hover:bg-orange-400 whitespace-nowrap">
            {t("banner.upper.Shop")}
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
