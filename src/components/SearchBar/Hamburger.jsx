export const Hamburger = ({ onClick = null, open = false }) => {
  const translate =
    "-rotate-45 rotate-45 -translate-y-[11px] translate-y-[11px] opacity-0";

  return (
    <div onClick={onClick} className="cursor-pointer ms-auto pe-2 text-white ">
      <div
        className={`w-8 h-1 bg-slate-950 my-2 duration-300 ${
          open ? "translate-y-[11px] -rotate-45" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-slate-950 my-2 ms-auto ${
          open ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`w-8 h-1 bg-slate-950 my-2 duration-300 ${
          open ? "-translate-y-[11px] rotate-45" : ""
        }`}
      ></div>
    </div>
  );
};
