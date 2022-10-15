import React from "react";
import PropTypes from "prop-types";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      {/* <ListPage /> */}
      <DetailPage />
    </div>
  );
}

export default ProductFeature;
