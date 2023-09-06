import { useState, useRef, useEffect } from "react";
import { MenuPopup } from "./MenuPopup";
import { Badge } from "./Badge";
import { MenuSummary } from "./MenuSummary";

export const MenuImage = ({ src, alt, css, item }) => {
  const [height, setHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  const handleClick = (e) => setOpen((o) => !o);

  const closePop = (e) => setOpen(false);

  return (
    <li ref={ref}>
      <div className="flex gap-4 md:gap-8 relative" onClick={handleClick}>
        <div className="relative">
          <img className={css} src={src} alt={alt} />
          <Badge parentImg={item} />
        </div>
        {item === "cart" ? <MenuSummary /> : null}
        {open ? (
          <MenuPopup top={height} parentImg={item} hideFn={closePop} />
        ) : null}
      </div>
    </li>
  );
};
