import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";
import DialogSearch from "../../Dialog/Components/DialogSearch";

const SearchCard = () => {
  return (
    <div className="w-full">
      <SearchBar
        placeHolder="Rechercher une recette ..."
        className="mt-12"
        nameInput="name"
      />
      <DialogSearch
        button={<FilterIcon className="w-[20px] h-[20px] fill-current" />}
      />
    </div>
  );
};

export default SearchCard;
