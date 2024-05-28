import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;