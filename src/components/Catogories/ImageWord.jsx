export const ImageWord = ({ category, title, subtitle, t }) => {
  return (
    <div className="absolute z-20 bottom-14 left-4 sm:bottom-20 sm:left-14 lg:bottom-[6rem] lg:left-[6rem]  ">
      <button className="bg-blue-900 text-xs lg:text-xl  text-white py-2 px-4 rounded-md hover:bg-blue-700 font-bold">
        {category}
      </button>
      <h1 className="text-lg lg:text-4xl text-slate-500 font-bold mt-1 lg:mt-6">
        {title}
      </h1>
      <h2 className="text-xl lg:text-3xl text-purple-950 font-extrabold mt-1 lg:mt-6">
        {subtitle}
      </h2>
      <button className="text-white font-bold rounded-full text-xs sm:text-base  lg:text-xl px-3 py-2 lg:px-8 lg:py-4 bg-orange-600 mt-1 lg:mt-6 hover:bg-orange-400">
        {t("banner.upper.Shop")}
      </button>
    </div>
  );
};
