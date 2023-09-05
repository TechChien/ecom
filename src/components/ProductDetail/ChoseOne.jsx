import { useState } from "react";

export const ChoseOne = ({ render }) => {
  const [name, setName] = useState(null);

  const handleClick = (e) => {
    if (e.target.name) setName(e.target.name);
  };

  return (
    <div onClick={handleClick} className="flex gap-3 mt-2">
      {render(name)}
    </div>
  );
};
