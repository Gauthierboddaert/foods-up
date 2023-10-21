import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND;

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
      }
}) 

const axiosConfig = {
    instance
}

export default axiosConfig;