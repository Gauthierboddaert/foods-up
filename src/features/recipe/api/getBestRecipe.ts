import axiosConfig from "../../axios/axios";
import Recipe from "../type/Recipe";

const getBestRecipe = async (): Promise<Recipe> => {
    return await axiosConfig.instance.get('user/bestChef').then((res) => res.data)
}

export default getBestRecipe;