import axiosConfig from "../../axios/axios";
import { RecipeId } from "../type/Recipe";

const getRecipes = async (offset: number): Promise<RecipeId[] | []> => {
  return await axiosConfig.instance
    .get(`recipe?offset=${offset}`)
    .then((response) => response.data);
};

export default getRecipes;
