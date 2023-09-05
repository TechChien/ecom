export const ImageWord = ({ category, title, subtitle }) => {
  return (
    <div className="absolute z-20 bottom-[6rem] left-[8rem]">
      <button className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-bold">
        {category}
      </button>
      <h1 className="text-5xl text-slate-500 font-bold mt-6">{title}</h1>
      <h2 className="text-6xl text-purple-950 font-extrabold mt-6">
        {subtitle}
      </h2>
      <button className="text-white font-bold rounded-full px-8 py-4 bg-orange-600 mt-6 hover:bg-orange-400">
        Shop Now
      </button>
    </div>
  );
};
