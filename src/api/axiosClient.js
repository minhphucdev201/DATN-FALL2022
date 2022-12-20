import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
    token: "Bearer " + localStorage.getItem("access_token"),
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
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
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
