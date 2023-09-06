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
        className={`md:text-xl lg:text-4xl ${
          like ? likeColor : normalColor
        } hover:text-red-500 relative after:content-['']  after:lg:w-12 after:lg:h-12 after:md:w-6 after:md:h-6 after:bg-transparent after:lg:border-4 after:md:border-2  after:${
          like ? borderlikeColor : bordernormalColor
        } after:rounded-full after:absolute after:inline-block after:align-middle after:hover:border-red-500  after:lg:-top-0.5 after:lg:-left-[0.75rem] after:md:top-0 after:md:-left-[0.30rem]`}
      >
        &hearts;
      </span>
    </div>
  );
};
