import axios from "axios";
import { API_URL } from "../utils/endPoint";
import { getToken } from "../utils/token";

const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

export { customAxios, authAxios };
