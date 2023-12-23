import { useQuery } from "react-query";
import getSearchRecipe from "../api/getSearchRecipe";
import { IFormRecipeSearch } from "../../Form/type/FormType";


const useSearchRecipe = (form: IFormRecipeSearch) => {
 
  const { data, isLoading } = useQuery({
    queryKey: ["searchRecipe"],
    queryFn: () => getSearchRecipe(form),
  });

  return { data, isLoading };
};

export default useSearchRecipe;
