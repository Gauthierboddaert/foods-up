import { useEffect, useState } from "react";
import getRecipes from "../api/getRecipes";
import { useQuery } from "react-query";
import { RecipeId } from "../type/Recipe";

const useRecipes = (offset: number) => {

  const [recipeIds, setRecipeIds] = useState<RecipeId[]>()
  
  useEffect(() => {
    getRecipes(offset).then((res) => {
      setRecipeIds(previsous => {
        return [...(previsous || []), ...res]
      })
    })
  }, [offset])

  return recipeIds;
};

export default useRecipes;
