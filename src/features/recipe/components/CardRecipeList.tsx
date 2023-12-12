import CardRecipeLoader from "./CardRecipeLoader";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const CardRecipeList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { recipeIds } = useRecipes(offset);

  if (recipeIds === undefined) {
    return <CardRecipeLoader />;
  }

  return (
    <>
      {recipeIds ? (
        <InView threshold={0.1}>
          {({ inView, ref }) => (
            console.log(inView),
            <div ref={ref} className="w-full flex flex-col items-center">
              {recipeIds.map((recipeId: RecipeId) => (
                <CardRecipe key={recipeId.id} recipeId={recipeId} />
              ))}
            </div>
          )}
        </InView>
      ) : (
        <p>No recipes found.</p>
      )}
    </>
  );
};

export default CardRecipeList;
