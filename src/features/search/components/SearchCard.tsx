import { useState } from "react";
import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";
import CardFilterModal from "./CardFilterModal";


const SearchCard = () => {
  const [displayFilter, setDisplayFilter] = useState(false);

  const handleModalStatus = () => {
    if (displayFilter) {
      setDisplayFilter(false);
    } else {
      setDisplayFilter(true);
    }
  };

  return (
    <div className="w-full">
      <SearchBar />
      <div onClick={() => handleModalStatus()} className="w-min">
        <FilterIcon className="w-[20px] h-[20px] fill-current" />
      </div>
      <CardFilterModal handleModalStatus={handleModalStatus} displayFilter={displayFilter} />
    </div>
  );
};

export default SearchCard;
