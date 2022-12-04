import React from "react";
import { Outlet } from "react-router-dom";

ProductFeature.propTypes = {};
ProductFeature.defaultProps = {};
function ProductFeature(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProductFeature;
