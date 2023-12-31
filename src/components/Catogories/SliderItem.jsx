export const SliderItem = ({ curPostion, imgSrc, index, children, mode }) => {
  //${translateX[index][curPostion]}

  const landscape = "w-full md:h-[650px]";
  const protrait = "w-full h-full";

  return (
    <div
      style={{ transform: `translateX(${100 * (index - curPostion)}%)` }}
      className={`${
        mode == "landscape" ? landscape : protrait
      } absolute duration-300 `}
    >
      <div className="relative w-full h-full">
        <img className="object-cover  w-full h-full" src={imgSrc} />
        {children}
      </div>
    </div>
  );
};
