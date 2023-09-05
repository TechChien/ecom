import { AllMenu } from "./AllMenu";

export const SearchBar = () => {
  return (
    <div className="bg-purple-950 pt-8 mt-2">
      <div className="container mx-auto">
        <div className="flex w-full justify-end">
          <AllMenu />
          <div className="ms-auto w-1/2">
            <form className="flex w-full mx-auto">
              <input
                className="py-2 px-3 rounded-md text-xl w-full text-slate-950 outline-none"
                placeholder="&#128269;    Search for products"
              />
              <button className="bg-red-500 text-white -translate-x-2 rounded-r-md rounded-d-md text-xl px-4 hover:bg-red-300">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
