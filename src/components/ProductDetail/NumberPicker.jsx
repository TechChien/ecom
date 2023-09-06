import { useContext, Fragment } from "react";
import selectContext from "./selectContext";

export const NumberPicker = () => {
  const {
    selectState: { amount },
    selectDispatch,
  } = useContext(selectContext);

  const handleClick = (e) => {
    switch (e.target.name) {
      case "minus":
        selectDispatch({ type: "number", payload: amount - 1 });
        break;
      case "plus":
        selectDispatch({ type: "number", payload: amount + 1 });
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
        className="w-5 h-5 md:w-8 md:h-8 md:text-3xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={amount === 1}
      >
        -
      </button>
      <span className="font-bold text-lg md:text-2xl">{amount}</span>
      <button
        onClick={handleClick}
        name="plus"
        className="w-5 h-5 md:w-8 md:h-8 md:text-3xl font-bold bg-slate-300 rounded-full flex justify-center items-center"
        disabled={amount === 10}
      >
        +
      </button>
    </Fragment>
  );
};
