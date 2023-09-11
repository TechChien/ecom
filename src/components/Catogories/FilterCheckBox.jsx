import { useState } from "react";

export const FilterCheckBox = ({ title, count }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className="w-full flex">
      <label className="relative cursor-pointer select-none ps-6">
        {title}
        <input
          className=" peer absolute cursor-pointer opacity-0"
          checked={checked}
          type="checkbox"
          onChange={handleChecked}
        />
        <span
          className="absolute top-1 left-0 h-4 w-4 rounded-full bg-slate-200 hover:bg-slate-300
          peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden after:peer-checked:block after:top-1 after:left-1 after:h-2 after:w-2 after:rounded-full after:bg-white
        "
        ></span>
      </label>
      <span className="ms-auto pe-3">{count}</span>
    </div>
  );
};
