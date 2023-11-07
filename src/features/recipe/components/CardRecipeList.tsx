import CardRecipeLoader from "./CardRecipeLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useState } from "react";

const CardRecipeList = () => {

  const [offset, setOffset] = useState<number>(0);
  const { isLoading, data } = useRecipes(offset);

  return (
    <>
      {isLoading ? (
        <CardRecipeLoader />
      ) : data ? (
        <InfiniteScroll
          dataLength={data.length}
          children={
            <div
              style={{ height: `calc(100vh)` }}
              className="w-full flex flex-col items-center overflow-scroll"
            >
              {data.map((recipeId: RecipeId) => (
                <CardRecipe key={recipeId.id} recipeId={recipeId} />
              ))}
            </div>
          }
          loader={""}
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
