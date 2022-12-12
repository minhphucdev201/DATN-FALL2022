import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductNew from "./Components/ProductNew";
import ProductBestSell from "./Components/ProductBestSell";
import ProductDiscount from "./Components/ProductDiscount";
import NewsPage from "./Components/NewsPage";
import productApi from "./../../api/productApi";

HomePage.propTypes = {};

function HomePage(props) {
  const [productNew, setProductNew] = useState([]);
  const [productDiscount, setProductDiscount] = useState([]);
  const [productList, setProductList] = useState({});

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
  return (
    <div>
      <ProductNew data={productNew} />
      <ProductBestSell />
      <ProductDiscount data={productDiscount} />
      <NewsPage />
    </div>
  );
}

export default HomePage;
