import { useQuery } from "react-query";
import getSearchRecipe from "../api/getSearchRecipe";
import { IFormRecipeSearch } from "../../Form/type/FormType";
import { useEffect, useState } from "react";
import { RecipeId } from "../../recipe/type/Recipe";


const useSearchRecipe = (form: IFormRecipeSearch) => {
  const [recipeIds, setRecipeIds] = useState<RecipeId[]>();

  const { data, isLoading } = useQuery({
    queryKey: ["searchRecipe", form],
    queryFn: () => getSearchRecipe(form),
  });

  useEffect(() => {
    if (data !== undefined) {
      console.log(data, 'trigge s');
      setRecipeIds(data);
    }
  }, [data, form]);


  return { recipeIds, isLoading };
};

export default useSearchRecipe;
