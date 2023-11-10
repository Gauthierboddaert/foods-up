import CardRecipeLoader from "./CardRecipeLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useState } from "react";
import Loader from "../../loader/component/Loader";

const CardRecipeList = () => {

  const [offset, setOffset] = useState<number>(0);
  const { isLoading, recipeIds } = useRecipes(offset);

  if(isLoading) {
    return <CardRecipeLoader />
  }

  return (
    <>
     {recipeIds ? (
        <InfiniteScroll
          dataLength={recipeIds.length}
          height="100vh"
          children={
            <div
              style={{ height: `calc(100vh)` }}
              className="w-full flex flex-col items-center overflow-scroll"
            >
              {recipeIds.map((recipeId: RecipeId) => (
                <CardRecipe key={recipeId.id} recipeId={recipeId} />
              ))}
            </div>
          }
          loader={<Loader />}
          hasMore={true}
          next={() => setOffset(offset + 10)}
        />
      ) : (
        <p>No recipes found.</p>
      )}
    </>
  );
};

export default CardRecipeList;
