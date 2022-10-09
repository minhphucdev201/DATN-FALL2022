import React from "react";
import PropTypes from "prop-types";
import ProductNew from "./Components/ProductNew";
import ProductBestSell from "./Components/ProductBestSell";
import ProductDiscount from "./Components/ProductDiscount";
import NewsPage from "./Components/NewsPage";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <ProductNew />
      <ProductBestSell />
      <ProductDiscount />
      <NewsPage />
    </div>
  );
}

export default HomePage;
