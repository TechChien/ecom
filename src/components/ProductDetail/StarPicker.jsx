import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarFullStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState, createRef } from "react";
// import { useMousePosition } from "../utils/useMousePosition";

export const StarPicker = () => {
  const [start, setStart] = useState(0);
  const [width, setWidth] = useState(0);
  // const { x, y } = useMousePosition();
  const [score, setScore] = useState({
    full: 0,
    empty: 5,
    half: 0,
  });
  const starRef = createRef();

  useEffect(() => {
    setWidth(starRef.current.offsetWidth);
    setStart(starRef.current.offsetLeft);
  }, [starRef]);

  const handleClick = (e) => {
    const x = e.pageX;
    const diff = x - start;
    const result = diff / width;
    const full = Math.round(result);
    const half = result - full > 0 ? 1 : 0;
    const empty = 5 - full - half;

    setScore({
      full,
      half,
      empty,
    });
  };

  const render = () => {
    let firstStar;
    const { full, half, empty } = score;

    if (!full && !half && !empty) return;

    let f = full,
      h = half,
      e = empty;

    if (f) {
      firstStar = <Star ref={starRef} icon={faStar} />;
      f = f - 1;
    } else if (h) {
      firstStar = <Star ref={starRef} icon={faStarHalfStroke} />;
      h = h - 1;
    } else {
      firstStar = <Star ref={starRef} icon={faStarFullStroke} />;
      e = e - 1;
    }

    return (
      <>
        {firstStar}
        {Array.from(Array(f)).map((_, index) => (
          <Star key={index} icon={faStar} />
        ))}
        {Array.from(Array(h)).map((_, index) => (
          <Star key={100 + index} icon={faStarHalfStroke} />
        ))}
        {Array.from(Array(e)).map((_, index) => (
          <Star key={200 + index} icon={faStarFullStroke} />
        ))}
      </>
    );
  };

  return (
    <div className="flex" onClick={handleClick}>
      {render()}
    </div>
  );
};

const Star = forwardRef((props, ref) => {
  const { icon } = props;
  return (
    <div ref={ref}>
      <FontAwesomeIcon
        className="text-3xl text-yellow-400"
        ref={ref}
        icon={icon}
      />
    </div>
  );
});
