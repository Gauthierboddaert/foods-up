import axiosConfig from "../../axios/axios";
import Recipe from "../type/Recipe";

const getRecipe = async (recipeId: number): Promise<Recipe> => {
    return await axiosConfig.instance.get(`recipe/${recipeId}`).then((response) => response.data)
}

export default getRecipe;