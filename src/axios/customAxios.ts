import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: "http://ec2-43-202-10-202.ap-northeast-2.compute.amazonaws.com/",
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
