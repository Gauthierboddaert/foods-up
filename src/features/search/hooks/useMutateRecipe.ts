import { useMutation, useQueryClient } from "react-query";
import { IFormRecipeSearch } from "../../Form/type/FormType";
import getSearchRecipe from "../api/getSearchRecipe";

const useMutateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IFormRecipeSearch) => getSearchRecipe(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["searchRecipe"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useMutateRecipe;
