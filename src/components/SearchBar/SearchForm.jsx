export const SearchForm = () => {
  return (
    <form className="mt-4 lg:mt-2 flex w-full mx-auto">
      <input
        className="py-2 px-3 rounded-md lg:text-xl w-full text-slate-950 outline-none"
        placeholder="&#128269;    Search for products"
      />
      <button className="bg-red-500 text-white -translate-x-2 rounded-r-md rounded-d-md lg:text-xl px-4 hover:bg-red-300">
        Search
      </button>
    </form>
  );
};
