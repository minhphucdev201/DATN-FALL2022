import axiosClient from "./axiosClient";

const catalogApi = {
  getAll() {
    const url = "/catalogs";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/catalogs/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/catalogs/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/catalogs/${data.id}`;
    return axiosClient.push(url, data);
  },
  remove(id) {
    const url = `/catalogs/${id}`;
    return axiosClient.delete(url);
  },
};
export default catalogApi;
