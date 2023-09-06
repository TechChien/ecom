export const ImageWord = ({ category, title, subtitle }) => {
  return (
    <div className="absolute z-20 bottom-6 left-4 sm:bottom-14 sm:left-14  md:bottom-[6rem] md:left-[6rem]">
      <button className="bg-blue-900 md:text-xl text-sm text-white py-2 px-4 rounded-md hover:bg-blue-700 font-bold">
        {category}
      </button>
      <h1 className="text-3xl md:text-5xl text-slate-500 font-bold mt-2 md:mt-6">
        {title}
      </h1>
      <h2 className="text-2xl md:text-4xl text-purple-950 font-extrabold mt-2 md:mt-6">
        {subtitle}
      </h2>
      <button className="text-white font-bold rounded-full text-sm md:text-xl px-4 py-2 md:px-8 md:py-4 bg-orange-600 mt-2 md:mt-6 hover:bg-orange-400">
        Shop Now
      </button>
    </div>
  );
};
