import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center rounded-full border border-orange-500 px-4 py-2">
      <input placeholder="Search Food Items" className="focus:outline-none" />
      <SearchIcon />
    </div>
  );
};

export default Search;
