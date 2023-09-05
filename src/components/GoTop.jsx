// import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const GoTop = () => {
  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-5 right-5 flex flex-col gap-1 bg-slate-200 p-2 rounded-md"
    >
      <FontAwesomeIcon className="text-slate-500" icon={faArrowUp} />
      <h2 className="text-slate-600">Go top</h2>
    </div>
  );
};
