import { Stars } from "../Trending/Stars";

export const Reviews = ({ timestamp, title, author }) => {
  return (
    <div className="mt-2">
      <hr />
      <h1 className="text-lg md:text-xl mt-4">REVIEW BY {author}</h1>
      <p className="text-sm md:text-md text-slate-400">On {timestamp}</p>
      <Stars score={5} />
      <h1 className="font-bold text-xl md:text-2xl mt-4">{title}</h1>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus animi
        eaque perferendis quo soluta fugiat accusantium aut aspernatur. Sunt
        rerum dignissimos vero ut repudiandae quae necessitatibus autem esse,
        maxime sequi!
      </p>
    </div>
  );
};
