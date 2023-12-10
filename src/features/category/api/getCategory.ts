import axiosConfig from "../../axios/axios";
import Category from "../type/Category";

const getCategory = async (name: string|undefined): Promise<Category> => {
  const response = await axiosConfig.instance.get(`/category/${name}`);
  return response.data;
};

export default getCategory;
