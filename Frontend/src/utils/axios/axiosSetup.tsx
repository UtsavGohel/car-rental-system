import axios from "axios";

const token = import.meta.env.VITE_API_TOKEN; // static token as authentication part is remaining

export const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: token,
  },
});
