export const SizePicker = ({ size, chosen = false }) => {
  const bgColorNormal = "bg-slate-300 text-black";
  const bgColorChosen = "bg-black text-white";

  return (
    <button
      name={size}
      className={`rounded-full text-xl font-bold w-8 h-8 flex justify-center items-center ${
        chosen ? bgColorChosen : bgColorNormal
      }`}
    >
      {size}
    </button>
  );
};
