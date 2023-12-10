import axiosConfig from "../../axios/axios";

const getCategory = async (id: string) => {
  const response = await axiosConfig.instance.get(`/category/${id}`);
  return response.data;
};

export default getCategory;
