import { useContext } from "react";
import selectContext from "./selectContext";

export const ChoseOne = ({ render, type }) => {
  const { selectState, selectDispatch } = useContext(selectContext);

  const handleClick = (e) => {
    if (e.target.name) selectDispatch({ type: type, payload: e.target.name });
  };

  return (
    <div onClick={handleClick} className="flex gap-3 mt-2">
      {render(selectState[type])}
    </div>
  );
};
