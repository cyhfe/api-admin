import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { request };
