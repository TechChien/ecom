import { useState } from "react";

export const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  return (
    <div className="w-full">
      <hr />
      <h3 onClick={handleClick} className="text-3xl font-bold mt-6 w-full">
        {open ? "-" : "+"} {title}
      </h3>
      <div className={`duration-300 ease-in`}>
        {open ? children || null : null}
      </div>
    </div>
  );
};
