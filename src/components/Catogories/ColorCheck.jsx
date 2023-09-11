import { useState } from "react";
import { ColorPicker } from "../ProductDetail/ColorPicker";

export const ColorCheck = ({ color }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked((s) => !s);
  };

  return (
    <div onClick={handleChange} className="flex">
      <ColorPicker chosen={checked} color={color} />
    </div>
  );
};
