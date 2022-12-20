import axiosClient from "./axiosClient";

const commentApi = {
  getIdProduct(id, params) {
    const url = `/comment/idProduct/${id}?column=_id&type=desc`;
    return axiosClient.get(url, { params: params });
  },
  create(data) {
    const url = "/comment/create";
    return axiosClient.post(url, data);
  },
};

export default commentApi;
