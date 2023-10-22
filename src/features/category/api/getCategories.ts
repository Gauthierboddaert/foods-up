import axiosConfig from "../../axios/axios";

const getCategories =  async () => {
 return await axiosConfig.instance.get("categories").then((response) => response.data);
};

export default getCategories;
