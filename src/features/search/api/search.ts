import { IFormRecipeSearch } from "../../Form/type/FormType";
import axiosConfig from "../../axios/axios";
import { RecipeId } from "../../recipe/type/Recipe";

const search = async (
  form: IFormRecipeSearch,
  type: string
): Promise<RecipeId[]> => {
  console.log("form", form);
  return await axiosConfig.instance
    .post("/search", {
      name: form.name,
      type: type,
      categoryName: form.categoryName,
    })
    .then((response) => {
      return response.data;
    });
};

export default search;
