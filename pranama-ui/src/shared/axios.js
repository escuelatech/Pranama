import axios from "axios";
import { API } from "@/shared/index.js";

const apiClient = axios.create({
  baseURL: `${API}`,
  withCredentials: false,
  headers: {
     Accept: "application/json",
    "Content-Type": "application/json",
    }
});

apiClient.interceptors.request.use(function (config) {
  let token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});

export default apiClient;