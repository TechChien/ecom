import { useState, Fragment } from "react";

export const NumberPicker = ({ initialNum = 1 }) => {
  const [num, setNum] = useState(initialNum);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "minus":
        setNum((n) => {
          return n - 1;
        });
        break;
      case "plus":
        setNum((n) => {
          return n + 1;
        });
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <button
        onClick={handleClick}
        name="minus"
        className="w-10 h-10 text-3xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={num === 1}
      >
        -
      </button>
      <span className="font-bold text-2xl">{num}</span>
      <button
        onClick={handleClick}
        name="plus"
        className="w-10 h-10 text-3xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={num === 10}
      >
        +
      </button>
    </Fragment>
  );
};
