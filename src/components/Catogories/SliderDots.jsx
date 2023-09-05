export const SliderDots = ({ index, active, onClick }) => {
  const color = active ? "bg-slate-500" : "bg-slate-300";

  return (
    <button
      // style={{ backgroundColor: color }}
      onClick={onClick}
      name={index}
      className={`${color}  h-4 w-4 rounded-full cursor-pointer`}
    ></button>
  );
};
