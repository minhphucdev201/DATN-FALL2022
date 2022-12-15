import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/customers/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/customers/login";
    return axiosClient.post(url, data);
  },
};
export default userApi;
