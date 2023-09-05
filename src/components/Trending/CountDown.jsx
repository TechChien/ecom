import { useEffect, useState } from "react";

function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

export const CountDown = ({ curCount = 4500 }) => {
  // 4500s
  const [count, setCount] = useState(curCount);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => {
        if (c > 0) {
          return c - 1;
        }
        return c;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  const date = toDateTime(count);

  return (
    <div className="flex flex-col items-center mx-auto mt-4">
      <h2 className="text-xl font-bold">OFFER ENDS AT</h2>
      <div className="flex items-center gap-1 mt-2">
        <span className="w-10 h-10 bg-gray-300 inline-flex justify-center items-center text-xl font-bold text-slate-800">
          {Math.floor(count / (24 * 3600))}
        </span>
        :
        <span className="w-10 h-10 bg-gray-300 inline-flex justify-center items-center text-xl font-bold text-slate-800">
          {date.getHours()}
        </span>
        :
        <span className="w-10 h-10 bg-gray-300 inline-flex justify-center items-center text-xl font-bold text-slate-800">
          {date.getMinutes()}
        </span>
        :
        <span className="w-10 h-10 bg-gray-300 inline-flex justify-center items-center text-xl font-bold text-slate-800">
          {date.getSeconds()}
        </span>
      </div>
    </div>
  );
};
