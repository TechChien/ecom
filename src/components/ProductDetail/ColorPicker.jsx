import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ColorPicker = ({ color, chosen = false }) => {
  // const [pick, setPick] = useState(false);

  const colorChoice = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "slate",
    "gray",
    "yellow",
  ];

  if (!color || !colorChoice.includes(color)) return null;

  const colorPicker =
    "bg-red-500 bg-blue-500 bg-green-500 bg-purple-500 bg-orange-500 bg-slate-500 bg-gray-500 bg-yellow-500";

  return (
    <button
      name={color}
      className={`w-8 h-8 bg-${color}-500 text-2xl rounded-full ${
        chosen ? "scale-110" : ""
      } `}
    >
      {chosen ? "✔" : null}
    </button>
  );
};
