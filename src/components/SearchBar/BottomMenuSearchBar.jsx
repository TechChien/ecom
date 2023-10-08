import { SearchForm } from "./SearchForm";

export const BottomMenuSearchBar = () => {
  return (
    <div
      className="fixed w-full md:hidden"
      style={{ left: 0, bottom: "3rem", zIndex: 10 }}
    >
      <div className="w-full">
        <SearchForm />
      </div>
    </div>
  );
};
