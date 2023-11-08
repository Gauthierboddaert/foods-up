import axiosConfig from "../../axios/axios";

const getTotalRecipe = (): Promise<number> => {
  return axiosConfig.instance.get("totalRecipe").then((res) => res.data);
};

export default getTotalRecipe;
