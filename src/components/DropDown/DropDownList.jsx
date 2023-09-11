import { useEffect, useState } from "react";
export const DropDownList = ({ options, onChange, firstChose }) => {
  const [open, setOpen] = useState(false);
  const [enter, setEnter] = useState(false);
  useEffect(() => {
    let timerId = null;
    if (open && !enter) {
      timerId = setTimeout(() => setOpen(false), 800);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [open, enter, setOpen]);

  const handleChange = (e) => {
    if (!e.target.dataset.option || !e.target.dataset.value) {
      return;
    }
    onChange({
      title: e.target.dataset.option,
      value: e.target.dataset.value,
    });
  };

  const handleOpen = (e) => setOpen((o) => !o);

  const handleMouseLeave = (e) => {
    setEnter(false);
    setOpen(false);
  };

  const handleMouseEnter = (e) => {
    setEnter(true);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="focus:outline-none font-bold rounded-sm text-sm px-2 py-1 pe-1 text-center inline-flex items-center "
        type="button"
      >
        {firstChose.title}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          ari-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="z-10 absolute right-0 top-8 bg-white divide-y divide-gray-100 rounded-lg shadow-2xl w-44 "
        >
          <ul onClick={handleChange} className="py-2 text-sm text-gray-700 ">
            {options.map((option) => (
              <li key={option.title}>
                <a
                  data-option={`${option.title}`}
                  data-value={`${option.value}`}
                  className="block px-4 py-2 hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
                >
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
