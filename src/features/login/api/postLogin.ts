import axiosConfig from "../../axios/axios";
import User from "../../profil/type/User";

const postLogin = async (email: string, password: string): Promise<User> => {
  const response = await axiosConfig.instance.post("/login", { email, password });
  return response.data;
};


export default postLogin;