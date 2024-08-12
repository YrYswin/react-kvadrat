import axios from "axios";

const BASE_URL = "http://167.172.74.113/";

const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};
const jsonHeaders = {
  "Content-Type": "application/json",
};

export const apiRoot = axios.create({
  baseURL: BASE_URL,
  headers: jsonHeaders,
});

export const axiosWithFile = axios.create({
  baseURL: BASE_URL,
  headers: formDataHeaders,
});
