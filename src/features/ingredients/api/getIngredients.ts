import axiosConfig from "../../axios/axios";
import IngredientId from "../type/IngredientId";

const getIngredients = async (offset: number): Promise<IngredientId[]> => {
  return await axiosConfig.instance
    .get("ingredients?offset=" + offset)
    .then((response) => response.data);
};

export default getIngredients;
