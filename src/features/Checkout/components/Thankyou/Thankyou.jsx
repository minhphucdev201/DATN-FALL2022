import React from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { Badge, Box, Button, Grid, Typography } from "@mui/material";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItemsSelector, cartTotalSelector } from "../../../Cart/selector";
import { formatPrice } from "./../../../../utils/common";
Thankyou.propTypes = {};

function Thankyou(props) {
  const history = useHistory();
  const checkout = useSelector((state) => state.checkout.current);
  const customer = useSelector((state) => state.user.current);
  const listProductCart = useSelector(cartItemsSelector);
  const totalPrices = useSelector(cartTotalSelector);
  //   console.log("checkout:", checkout);
  return (
    <Container className="thankyou">
      <Typography component="h4" variant="h5" px={12}>
        HERBAL OIL
      </Typography>
      <Grid container spacing={4} px={12} pt={6}>
        <Grid item xs={12} md={4} sm={6} lg={7}>
          <div className="thankyou__left">
            <div className="thankyou__headling">
              <div className="thankyou__headling--img">
                <img src="https://freepngimg.com/save/18343-success-png-image/1200x1200" alt="" />
              </div>
              <div className="thankyou__headling--message">
                <Typography variant="body1">Cảm ơn bạn đã đặt hàng</Typography>
                <p className="thankyou__headling--txt">
                  Một email xác nhận đã được gửi tới{" "}
                  <strong> {customer._id ? customer.email : checkout.email} </strong>
                  &nbsp; <span>Xin vui lòng kiểm tra email của bạn</span>
                </p>
              </div>
            </div>
            <div className="thankyou__content">
              <div className="thankyou__box">
                <div className="thankyou__item">
                  <h2>Thông tin mua hàng</h2>
                  <p> {customer._id ? customer.fullName : checkout.fullName}</p>
                  <p> {customer._id ? customer.email : checkout.email}</p>
                  <p>{checkout.phone}</p>
                </div>
                <div className="thankyou__item">
                  <h2>Địa chỉ nhận hàng</h2>
                  <p>{customer._id ? customer.fullName : checkout.fullName}</p>
                  <p>{customer._id ? customer.address : checkout.address}</p>
                  <p>{customer._id ? customer.phone : checkout.phone}</p>
                </div>
              </div>
              <div className="thankyou__box">
                <div className="thankyou__item">
                  <h2>Phương thức thanh toán</h2>
                  <p>Chuyển khoản qua ngân hàng</p>
                </div>
                <div className="thankyou__item">
                  <h2>Phương thức vận chuyển</h2>
                  <p>Giao hàng tận nơi</p>
                </div>
              </div>
            </div>
          </div>
          <Box sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "12px" }}>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                history.push("/products");
              }}
            >
              Tiếp tục mua hàng
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sm={6} lg={5}>
          <div className="thankyou__right">
            <Box
              sx={{
                borderBottom: "1px solid #f5f5f5",
                paddingBottom: "12px",
                paddingTop: "12px",
              }}
            >
              <Typography>Đơn hàng #{checkout._id}</Typography>
            </Box>
            <Box sx={{ borderBottom: "1px solid #f5f5f5", paddingTop: "16px" }}>
              {listProductCart.map((product) => (
                <Grid className="cart__items" key={product.id}>
                  <Badge badgeContent={product.quantity} color="success">
                    <div className="cart__items--thumbnail">
                      <img src={product.product.thumbnail[0].imageUrl} alt="" />
                    </div>
                  </Badge>
                  <div className="cart__items--name">
                    <p
                      className="cart__items--link"
                      onClick={() => {
                        history.push(`/products/${product.id}`);
                      }}
                    >
                      {product.product.name}
                    </p>
                  </div>
                  <div>
                    <span>{formatPrice(product.product.salePrice)}</span>
                  </div>
                </Grid>
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
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Thankyou;
