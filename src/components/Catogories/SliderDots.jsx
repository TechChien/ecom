export const SliderDots = ({ index, active, onClick }) => {
  const color = active ? "bg-slate-500" : "bg-slate-300";

  return (
    <button
      // style={{ backgroundColor: color }}
      onClick={onClick}
      name={index}
      className={`${color}  h-2 w-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer`}
    ></button>
  );
};
