import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CONNECTION_STRING,
  headers: { "Content-Type": "application/json" },
});
