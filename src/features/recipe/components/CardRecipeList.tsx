import CardRecipeLoader from "./CardRecipeLoader";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useState } from "react";

const CardRecipeList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { recipeIds } = useRecipes(offset);


  if (recipeIds === undefined) {
    return <CardRecipeLoader />;
  }

  return (
    <>
      {recipeIds ? (
        <div
          style={{ height: `calc(100vh)` }}
          className="w-full flex flex-col items-center"
        >
          {recipeIds.map((recipeId: RecipeId) => (
            <CardRecipe key={recipeId.id} recipeId={recipeId} />
          ))}
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </>
  );
};

export default CardRecipeList;
