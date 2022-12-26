import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://tan-store.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log("error message", error.response);
    const { config, status, data } = error.response;
    if (config.url === "/customers/register" && status === 500) {
      const errorList = data.message || [];
      throw new Error(errorList);
    }
    if (config.url === "/customers/login" && status === 404) {
      const errorList = data.message || [];
      throw new Error(errorList);
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
