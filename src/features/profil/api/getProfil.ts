import axiosConfig from "../../axios/axios";
import User from "../type/User";

const getProfil = async (username: string | undefined): Promise<User> => {
  return axiosConfig.instance
    .get(`/profil/${username}`)
    .then((response) => response.data);
};

export default getProfil;
