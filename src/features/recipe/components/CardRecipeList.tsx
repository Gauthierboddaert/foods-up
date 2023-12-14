import CardRecipeLoader from "./CardRecipeLoader";
import useRecipes from "../hooks/useRecipes";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useTotalRecipe from "../hooks/useTotalRecipe";

const CardRecipeList = () => {
  const [offset, setOffset] = useState<number>(0);
  const { recipeIds, isLoading } = useRecipes(offset);
  const totalRecipe = useTotalRecipe();
  const [isMaxRecipe, setIsMaxRecipe] = useState<boolean>(false);

  const { ref, inView } = useInView({
    // threshold: 0,
    rootMargin: "3000px",
  });

  useEffect(() => {
    if (undefined !== recipeIds && undefined !== totalRecipe) {
      if (recipeIds?.length === totalRecipe?.data) {
        setIsMaxRecipe(true);
      }
    }
  
    if (inView && false === isMaxRecipe && !isLoading) {
      setOffset((offset) => offset + 20);
    }
  }, [inView, recipeIds, totalRecipe, isMaxRecipe, isLoading]);

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
