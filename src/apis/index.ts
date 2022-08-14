import axios from "axios";
import { API_URL } from "../utills/endPoint";

const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export { customAxios };
