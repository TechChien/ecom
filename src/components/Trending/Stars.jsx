import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarFullStroke } from "@fortawesome/free-regular-svg-icons";

function calcStar(score) {
  const full = parseInt(score);
  const half = Math.ceil(score - full);
  let empty = 0;
  if (score < 5) {
    empty = Math.floor(5 - score);
  }
  return { empty, full, half };
}

export const Stars = ({ score, comments }) => {
  if (!score) {
    return null;
  }

  const { empty, full, half } = calcStar(score);

  return (
    <div className="flex mt-4  text-sm lg:text-md">
      {Array.from(Array(full)).map((_, index) => (
        <span key={10 + index} className="text-yellow-400">
          <FontAwesomeIcon icon={faStar} />
        </span>
      ))}
      {Array.from(Array(half)).map((_, index) => (
        <span key={20 + index} className="text-yellow-400">
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </span>
      ))}
      {Array.from(Array(empty)).map((_, index) => (
        <span key={30 + index} className="text-yellow-400">
          <FontAwesomeIcon icon={faStarFullStroke} />
        </span>
      ))}
      {comments ? (
        <span className="text-slate-300 ms-3">({comments})</span>
      ) : null}
    </div>
  );
};
