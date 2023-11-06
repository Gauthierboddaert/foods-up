import axiosConfig from "../../axios/axios";

const getRecipe = async (recipeId: number) => {
    return await axiosConfig.instance.get(`recipe/${recipeId}`).then((response) => response.data)
}

export default getRecipe;