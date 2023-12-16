import useSearchRecipe from "../hooks/useSearchRecipe";
import CardSearchResult from "./CardSearchResult";
import SearchCard from "./SearchCard";
const CardSearchList = () => {
  const { data, isFetched } = useSearchRecipe("");

  console.log(data, isFetched);
//   if(isLoading) {
    // return <div>loading...</div>
//   }

  return (
    <div>
      <SearchCard />
      {data?.map((recipe) => (
        <CardSearchResult key={recipe.id} recipeId={recipe} />
      ))}
    </div>
  );
};

export default CardSearchList;
