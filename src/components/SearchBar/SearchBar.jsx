import { AllMenu } from "./AllMenu";
import { SearchForm } from "./SearchForm";
export const SearchBar = () => {
  return (
    <div className="bg-purple-950 pt-8 mt-2 hidden md:block">
      <div className="container mx-auto">
        <div className="flex w-full justify-end">
          <AllMenu />
          <div className="ms-auto w-1/2">
            <div className="w-full">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
