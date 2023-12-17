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
      <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap mt-12">
        {data?.map((recipe) => (
          <CardSearchResult key={recipe.id} recipeId={recipe} />
        ))}
      </div>
    </div>
  );
};

export default CardSearchList;
