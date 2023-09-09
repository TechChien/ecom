import { useState } from "react";

export const Accordion = ({ title, children, hasSign = true }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((o) => !o);
  };

  const openClass = open ? "scale-y-100" : "scale-y-0";

  return (
    <div className="w-full">
      <h3
        onClick={handleClick}
        className="text-xl md:text-3xl font-bold mt-6 w-full"
      >
        {hasSign ? (open ? "-" : "+") : null} {title}
      </h3>
      {open ? (
        <div className={`transition-all origin-top duration-300  ${openClass}`}>
          {children || null}
        </div>
      ) : null}
    </div>
  );
};
