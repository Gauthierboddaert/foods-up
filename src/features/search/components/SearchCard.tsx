import FilterIcon from "../../Icon/FilterIcon";
import CardRecipe from "../../recipe/components/CardRecipe";
import { RecipeId } from "../../recipe/type/Recipe";
import SearchBar from "./SearchBar";

const SearchCard = () => {

  const recipeId: RecipeId = {
    id: 1,
  };
  
  return (
    <div className="w-full h-screen">
      <SearchBar />
      <div className="">
        <FilterIcon className="w-[20px] h-[20px] fill-current" />
      </div>
      <div className="w-full flex bg-red-100 h-screen mt-12">
        
      </div>
    </div>
  );
};

export default SearchCard;
