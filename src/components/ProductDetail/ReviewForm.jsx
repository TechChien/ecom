import { StarPicker } from "./StarPicker";

export const ReviewForm = () => {
  return (
    <div>
      <h1 className="text-slate-400 text-2xl md:text-3xl font-bold mt-4">
        Write a review
      </h1>
      <form className="flex flex-col gap-3 mt-4">
        <div className="flex flex-col md:flex-row gap-3">
          <span className="text-xl font-bold">Are you satisfied enough?</span>
          <StarPicker />
        </div>
        <label className="font-bold text-xl md:text-2xl" htmlFor="name">
          NAME
        </label>
        <input
          id="name"
          className="text-xl p-2 border rounded-md outline-none"
        />
        <label className="font-bold text-xl md:text-2xl" htmlFor="summary">
          SUMMARY
        </label>
        <input
          id="summary"
          className="text-xl p-2 border rounded-md outline-none"
        />
        <label className="font-bold text-xl md:text-2xl" htmlFor="review">
          REVIEW
        </label>
        <textarea className="border rounded-md  outline-none p-2" rows={5} />
        <div>
          <button
            type="submit"
            className="px-6 py-4 rounded-full  md:text-xl text-white bg-red-500 hover:bg-red-400 mt-4"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};
