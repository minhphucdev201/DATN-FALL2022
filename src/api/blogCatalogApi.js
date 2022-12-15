import axiosClient from "./axiosClient";

const blogCatalogApi = {
  getAll() {
    const url = "/catalogs-blog";
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/catalogs-blog/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/catalogs-blog/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/catalogs-blog/${data.id}`;
    return axiosClient.push(url, data);
  },
  remove(id) {
    const url = `/catalogs-blog/${id}`;
    return axiosClient.delete(url);
  },
};

export default blogCatalogApi;
