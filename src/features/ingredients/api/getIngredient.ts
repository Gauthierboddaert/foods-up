import axiosConfig from "../../axios/axios";
import Ingredient from "../type/Ingredient";
import IngredientId from "../type/IngredientId";

const getIngredient = async (id: IngredientId): Promise<Ingredient[]> => {
  return axiosConfig.instance
    .get(`ingredient/${id}`)
    .then((response) => response.data);
};

export default getIngredient;
