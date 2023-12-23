import { IFormRecipeSearch } from "../../Form/type/FormType";
import axiosConfig from "../../axios/axios";
import { RecipeId } from "../../recipe/type/Recipe";

const getSearchRecipe = async (
  form: IFormRecipeSearch
): Promise<RecipeId[]> => {
  return await axiosConfig.instance
    .post("/search", {
      name: form.name,
    })
    .then((response) => response.data);
};

export default getSearchRecipe;
