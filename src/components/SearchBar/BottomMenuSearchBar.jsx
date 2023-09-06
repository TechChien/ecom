import { SearchForm } from "./SearchForm";

export const BottomMenuSearchBar = ({ open, height }) => {
  return (
    <div
      className="fixed w-full"
      style={{ left: 0, bottom: height, zIndex: 10 }}
    >
      <div className="w-full">
        <SearchForm />
      </div>
    </div>
  );
};
