import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductNew from "./Components/ProductNew";
import ProductBestSell from "./Components/ProductBestSell";
import ProductDiscount from "./Components/ProductDiscount";
import NewsPage from "./Components/NewsPage";
import productApi from "./../../api/productApi";
import blogApi from "./../../api/blogApi";

HomePage.propTypes = {};

function HomePage(props) {
  const [productNew, setProductNew] = useState([]);
  const [productDiscount, setProductDiscount] = useState([]);
  const [productList, setProductList] = useState({});
  const [blogList, setBlogList] = useState([]);
  // productList
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({});
        setProductList(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch productList", error);
      }
    })();
  }, []);
  // product new
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getProductNew({ page: 1, limit: 4 });
        setProductNew(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  // product discount
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getProductDiscount({ page: 1, limit: 4 });
        setProductDiscount(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  // blog list
  useEffect(() => {
    (async () => {
      try {
        const { data } = await blogApi.getAll({ page: 1, limit: 4 });
        setBlogList(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  return (
    <div>
      <ProductNew data={productNew} />
      <ProductBestSell />
      <ProductDiscount data={productDiscount} />
      <NewsPage data={blogList} />
    </div>
  );
}

export default HomePage;
