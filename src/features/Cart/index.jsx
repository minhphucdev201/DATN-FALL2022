import React from "react";
import PropTypes from "prop-types";
import CartProduct from "./components/CartProduct/CartProduct";

CartFeature.propTypes = {};

function CartFeature(props) {
  return (
    <div>
      <CartProduct />
    </div>
  );
}

export default CartFeature;
