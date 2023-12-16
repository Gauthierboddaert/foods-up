import axiosConfig from "../../axios/axios";
import { RecipeId } from "../../recipe/type/Recipe";

const getSearchRecipe = async (name:string): Promise<RecipeId[]> => {
    return await axiosConfig.instance.post('/search', {
        name
    }).then((response) => response.data)
}

export default getSearchRecipe;