import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    const productList = await axiosClient.get("/products", { params: params });
    return productList;
  },

  getProductNew(params) {
    const url = "/products?column=_id&type=desc&idCatalog=63a310108975bf54b69118ca";
    return axiosClient.get(url, { params });
  },
  getProductTopSeller(params) {
    const url = "/products?column=_id&type=desc&productTopSeller=true";
    return axiosClient.get(url, { params });
  },
  getProductDiscount(params) {
    const url = "/products?column=_id&type=desc&isPromotion=true";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/products/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.push(url, data);
  },
  remove(id) {
    const url = `/products/del/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
