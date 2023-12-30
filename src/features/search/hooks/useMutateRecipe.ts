import { useMutation, useQueryClient } from "react-query";
import { IFormRecipeSearch } from "../../Form/type/FormType";
import getSearchRecipe from "../api/search";

const useMutateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IFormRecipeSearch) => getSearchRecipe(data, 'recipe'),
    onSuccess: () => {
      queryClient.invalidateQueries(["searchRecipe"],);
    },
  });
};

export default useMutateRecipe;
