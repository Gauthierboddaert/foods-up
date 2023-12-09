import axiosConfig from "../../axios/axios";

const getTotalRecipe = async (): Promise<number> => {
  return await axiosConfig.instance.get("totalRecipe").then((res) => res.data);
};

export default getTotalRecipe;
