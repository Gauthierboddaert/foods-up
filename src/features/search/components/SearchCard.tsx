import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";

const SearchCard = () => {
  
  return (
    <div className="w-full h-screen">
      <SearchBar />
      <div className="">
        <FilterIcon className="w-[20px] h-[20px] fill-current" />
      </div>
      <div className="w-full flex bg-red-100 mt-12">
        
      </div>
    </div>
  );
};

export default SearchCard;
