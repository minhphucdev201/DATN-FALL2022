import axiosClient from "./axiosClient";

const blogApi = {
  async getAll(params) {
    const blogList = await axiosClient.get("/blogs", { params: params });
    return blogList;
  },
  getBlogNewest(params) {
    const url = "/blogs?column=title&type=desc";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/blogs/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/blogs/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/blogs/${data.id}`;
    return axiosClient.push(url, data);
  },
  remove(id) {
    const url = `/blogs/del/${id}`;
    return axiosClient.delete(url);
  },
};
export default blogApi;
