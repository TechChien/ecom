import { useState, useRef, useEffect } from "react";
import { MenuPopup } from "./MenuPopup";
import { Badge } from "./Badge";

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
    <li ref={ref} className="relative">
      <img onClick={handleClick} className={css} src={src} alt={alt} />
      <Badge parentImg={item} />
      {open ? (
        <MenuPopup top={height} parentImg={item} hideFn={closePop} />
      ) : null}
    </li>
  );
};
