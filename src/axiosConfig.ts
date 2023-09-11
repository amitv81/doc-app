import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "https://randomuser.me/api/",
  baseURL: "http://localhost:8080/",
});

export default axiosInstance;
