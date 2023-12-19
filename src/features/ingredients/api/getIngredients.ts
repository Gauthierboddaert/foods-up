import axiosConfig from "../../axios/axios";
import Ingredient from "../type/Ingredient";

const getIngredients = async (): Promise<Ingredient[]> => {
  return await axiosConfig.instance
    .get("ingredients")
    .then((response) => response.data);
};

export default getIngredients;
