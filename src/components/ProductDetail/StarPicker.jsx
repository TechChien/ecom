import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarFullStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";

export const StarPicker = () => {
  const [score, setScore] = useState({
    full: 0,
    empty: 5,
    half: 0,
  });

  const handleClick = (e) => {
    const startleft = document
      .querySelector("#starcontainer")
      .getBoundingClientRect().left;
    const starWidth =
      document.querySelector("#starcontainer").getBoundingClientRect().width /
      5;
    const x = e.pageX;
    const diff = x - startleft;
    const result = diff / starWidth;
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

    return (
      <>
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
    <div id="starcontainer" className="flex" onClick={handleClick}>
      {render()}
    </div>
  );
};

const Star = forwardRef((props, ref) => {
  const { icon } = props;
  return (
    <div ref={ref}>
      <FontAwesomeIcon
        className="text-2xl md:text-3xl text-yellow-400"
        ref={ref}
        icon={icon}
      />
    </div>
  );
});
