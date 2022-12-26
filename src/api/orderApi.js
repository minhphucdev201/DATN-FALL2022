import axiosClient from "./axiosClient";

const orderApi = {
  getAll(params) {
    const url = "/orders";
    return axiosClient.get(url, { params });
  },
  create(data) {
    const url = "/orders/create";
    return axiosClient.post(url, data);
  },
  getOrderByCustomerId(id) {
    const url = `/orders?customerId=${id}`;
    return axiosClient.get(url);
  },
};

export default orderApi;
