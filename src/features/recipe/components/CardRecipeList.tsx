import { useQuery } from "react-query";
import CardRecipeLoader from "./CardRecipeLoader";
import getRecipes from "../api/getRecipes";
import { useState } from "react";
import CardRecipe from "./CardRecipe";
import { RecipeId } from "../type/Recipe";

const CardRecipeList = () => {
  const [offset, setOffset] = useState<number>(0);

  const { isLoading, data } = useQuery({
    queryKey: [`recipesId_${offset}`],
    queryFn: () => getRecipes(offset),
  });


  return <>{isLoading ? <CardRecipeLoader /> : (
    data.map((recipeId: RecipeId) => (
          <CardRecipe key={recipeId.id} recipeId={recipeId}  />
    ))

  )}</>;
};

export default CardRecipeList;
