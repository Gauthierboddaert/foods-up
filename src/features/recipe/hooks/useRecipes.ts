import { useEffect, useState } from "react";
import getRecipes from "../api/getRecipes";
import { useQuery } from "react-query";
import { RecipeId } from "../type/Recipe";

const useRecipes = (offset: number) => {

  const [recipeIds, setRecipeIds] = useState<RecipeId[]>()

  const { isLoading, data } = useQuery({
    queryKey: [`recipesId_${offset}`],
    queryFn: () => getRecipes(offset),
  });

  useEffect(() => {
    if(data !== undefined) {      
      // setRecipeIds(previousRecipe => {
      //   if (Array.isArray(previousRecipe)) {
      //     return [...previousRecipe, ...data]
      //   }
      // })
      setRecipeIds(data)    
    }
  
  }, [data,recipeIds])

  return { offset, isLoading, recipeIds };
};

export default useRecipes;
