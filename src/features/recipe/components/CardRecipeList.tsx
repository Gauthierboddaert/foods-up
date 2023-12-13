import CardRecipeLoader from "./CardRecipeLoader";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CardRecipeList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { recipeIds } = useRecipes(offset);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setOffset((offset) => offset + 10);
  } , [inView]);

  if (recipeIds === undefined) {
    return <CardRecipeLoader />;
  }


  return (
    <>
      {recipeIds ? (
        <div className="w-full flex flex-col items-center">
          {recipeIds.map((recipeId: RecipeId) => (
            <CardRecipe key={recipeId.id} recipeId={recipeId} />
          ))}
          <div ref={ref}></div>
        </div>
      ) : (
        <p>No recipes found.</p>
      )}
    </>
  );
};

export default CardRecipeList;
