import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: "http://10.150.149.25:3000",
  withCredentials: true,
});

CustomAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

CustomAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.data.message);
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default CustomAxios;
