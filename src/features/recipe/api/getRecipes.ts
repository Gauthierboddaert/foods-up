import axiosConfig from "../../axios/axios";

const getRecipes = async (offset: number) => {
  return await axiosConfig.instance.get(`recipe?offset=${offset}`).then((response) => response.data);
};

export default getRecipes;
