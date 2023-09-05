import { useState, useEffect } from "react";
import { MegaMenu } from "./MegaMenu";

export const MenuItem = ({ children, istrigger, name }) => {
  const [displayMega, setDisplay] = useState(false);

  const attachMouseEnterHandler = () => {
    if (!displayMega) {
      setDisplay((d) => !d);
    }
  };

  const attachMouseLeaveHandler = () => {
    setDisplay(false);
  };

  const onMouseHandler = istrigger ? attachMouseEnterHandler : null;

  return (
    <li name={name} onMouseEnter={onMouseHandler}>
      {children}
      <MegaMenu show={displayMega} hideFn={attachMouseLeaveHandler} />
    </li>
  );
};
