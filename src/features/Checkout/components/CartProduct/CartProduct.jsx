import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  cartItemsCountSelector,
  cartItemsSelector,
  cartTotalSelector,
} from "../../../Cart/selector";
import "./styles.scss";
import { formatPrice } from "./../../../../utils/common";
import { useHistory } from "react-router-dom";
CartProduct.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
};

function CartProduct({ product = {}, quantity = 1 }) {
  const countItem = useSelector(cartItemsCountSelector);
  const history = useHistory();
  return (
    <Grid className="cart__items">
      <Badge badgeContent={quantity} color="success">
        <div className="cart__items--thumbnail">
          <img src={product.thumbnail[0].imageUrl} alt="" />
        </div>
      </Badge>
      <div className="cart__items--name">
        <p
          className="cart__items--link"
          onClick={() => {
            history.push(`/products/${product._id}`);
          }}
        >
          {product.name}
        </p>
      </div>
      <div>
        <span>{formatPrice(product.salePrice)}</span>
      </div>
    </Grid>
  );
}

export default CartProduct;
