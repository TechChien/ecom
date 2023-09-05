import { useState } from "react";

export const Heart = () => {
  const [like, setLike] = useState(false);

  const likeColor = "text-red-500";
  const normalColor = "text-slate-300";

  const borderlikeColor = "border-red-500";
  const bordernormalColor = "border-slate-300";

  const handleLike = () => {
    setLike((l) => !l);
  };

  return (
    <div className="absolute top-1.5 right-3" onClick={handleLike}>
      <span
        className={`text-4xl ${
          like ? likeColor : normalColor
        } hover:text-red-500 relative after:content-['']  after:w-12 after:h-12 after:bg-transparent after:border-4 after:${
          like ? borderlikeColor : bordernormalColor
        } after:rounded-full after:absolute after:inline-block after:align-middle after:hover:border-red-500  after:-top-0.5 after:-left-[0.75rem]`}
      >
        &hearts;
      </span>
    </div>
  );
};
