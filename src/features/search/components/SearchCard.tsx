import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";

const SearchCard = () => {
  
  return (
    <div className="w-full">
      <SearchBar />
      <div className="">
        <FilterIcon className="w-[20px] h-[20px] fill-current" />
      </div>
    </div>
  );
};

export default SearchCard;
