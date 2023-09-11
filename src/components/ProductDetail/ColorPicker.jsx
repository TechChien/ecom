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
      className={`w-6 h-6 relative bg-${color}-500 text-md rounded-full ${
        chosen
          ? `scale-110 after:content-[''] after:absolute after:w-5  after:h-5 after:top-0.5 after:left-0.5 after:bg-${color}-500  after:rounded-full after:border-2 after:border-white`
          : ""
      } `}
    ></button>
  );
};
