import useSearchRecipe from "../hooks/useSearchRecipe";
import CardSearchResult from "./CardSearchResult";
import CardSearchResultLoader from "./CardSearchResultLoader";

import SearchCard from "./SearchCard";
const CardSearchList = () => {
  const { data, isLoading } = useSearchRecipe("");

  if (isLoading) {
    return (
      <div className="w-full">
        <SearchCard />
        <div className="flex flex-col md:flex-row md:justify-center">
          <CardSearchResultLoader className="justify-center" />
          <CardSearchResultLoader className="justify-center" />
          <CardSearchResultLoader className="justify-center" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <SearchCard />
      <div className="lg:flex lg:flex-row lg:justify-center">
        <div className="w-full flex flex-col md:flex-row md:justify-center md:flex-wrap mt-12 lg:w-3/4">
          {data?.map((recipe) => (
            <CardSearchResult key={recipe.id} recipeId={recipe} />
          ))}
        </div>
        <div className="hidden lg:w-1/4 lg:flex lg:bg-foods-orange lg:h-screen"></div>
      </div>
    </div>
  );
};

export default CardSearchList;
