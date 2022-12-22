import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import "./styles.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useHistory } from "react-router-dom";
import CartProduct from "./components/CartProduct/CartProduct";
import { useSelector } from "react-redux";
import { cartItemsCountSelector, cartItemsSelector, cartTotalSelector } from "../Cart/selector";
import { formatPrice } from "../../utils";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";

CheckoutFeature.propTypes = {};

function CheckoutFeature(props) {
  const countItem = useSelector(cartItemsCountSelector);
  const totalPrices = useSelector(cartTotalSelector);
  const listProductCart = useSelector(cartItemsSelector);
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      console.log("values ==>", values);
      // close dialog

      // hien thi thong bao
    } catch (error) {
      console.log("Failed to checkout:", error);
    }
  };
  return (
    <Box>
      <Container className="checkout">
        <Grid container px={12}>
          <DeliveryInfo onSubmit={handleSubmit} />
          <Grid item xs={12} md={6} sm={4} lg={4}>
            <Box sx={{ borderBottom: "1px solid #f5f5f5" }}>
              {listProductCart.map(({ product, quantity }) => (
                <CartProduct product={product} quantity={quantity} key={product._id} />
              ))}
            </Box>
            <Box sx={{ textAlign: "left" }} className="order">
              <div className="order__box">
                <p className="order__box--item">
                  <p>Tạm tính:</p> <strong>{formatPrice(totalPrices)}</strong>
                </p>
                <p className="order__box--item">
                  <p>Phí vận chuyển:</p> <strong>-</strong>
                </p>
              </div>
              <div className="order__totalprice">
                <p>Tổng cộng:</p> <strong>{formatPrice(totalPrices)}</strong>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CheckoutFeature;
