import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs, Container, Grid, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./styles.scss";
CartProduct.propTypes = {};

function CartProduct(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "550" }}>
      GIỎ HÀNG
    </Typography>,
  ];
  return (
    <div className="cart">
      <div className="cart__breadcrumb">
        <Container>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ color: "#5C5757" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>
      </div>
      <div className="cart__head">
        <Container>
          <Typography variant="body1" sx={{ fontSize: "22px", letterSpacing: "1px" }}>
            <strong>GIỎ HÀNG</strong> (2 sản phẩm)
          </Typography>
        </Container>
      </div>
      <div className="cart__shopping">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={9} sm={10} lg={8} className="cart__left">
              <Grid container spacing={2} className="cart__item">
                <Grid item xs={12} md={9} sm={10} lg={3}>
                  <div className="cart__item--thumbnail">
                    <img src="https://cf.shopee.vn/file/68b09e1f6e49c58c2e339e6e9c06b536" alt="" />
                  </div>
                </Grid>
                <Grid item xs={12} md={9} sm={10} lg={9} className="cart__box">
                  <div className="cart__item--info">
                    <p className="cart__item--name">TINH DẦU XÁ XỊ THIÊN NHIÊN</p>
                    <DeleteIcon color="success" sx={{ marginTop: "4px" }} />
                  </div>
                  <p className="cart__item--price">149.000đ</p>
                  <div className="cart__item--quantity">
                    <div class="qty-input">
                      <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                      >
                        -
                      </button>
                      <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        min="0"
                        max="10"
                        value="1"
                      />
                      <button className="qty-count qty-count--add" data-action="add" type="button">
                        +
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={2} className="cart__item">
                <Grid item xs={12} md={9} sm={10} lg={3}>
                  <div className="cart__item--thumbnail">
                    <img src="https://cf.shopee.vn/file/f8b0ddb31bac2aa4b1892932e3d5f7fe" alt="" />
                  </div>
                </Grid>
                <Grid item xs={12} md={9} sm={10} lg={9} className="cart__box">
                  <div className="cart__item--info">
                    <p className="cart__item--name">TINH DẦU XÁ XỊ THIÊN NHIÊN</p>
                    <DeleteIcon color="success" sx={{ marginTop: "4px" }} />
                  </div>
                  <p className="cart__item--price">149.000đ</p>
                  <div className="cart__item--quantity">
                    <div class="qty-input">
                      <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                      >
                        -
                      </button>
                      <input
                        className="product-qty"
                        type="number"
                        name="product-qty"
                        min="0"
                        max="10"
                        value="1"
                      />
                      <button className="qty-count qty-count--add" data-action="add" type="button">
                        +
                      </button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sm={2} lg={4} className="cart__right">
              <div className="cart__right--box">
                <p className="cart__right--total">
                  <p>Tạm tính:</p> <strong>288.000đ</strong>
                </p>
                <p className="cart__right--totalprice">
                  <p>Thành tiền:</p> <strong>699.000đ</strong>
                </p>
              </div>
              <div className="cart__right--btn" style={{ marginTop: "30px" }}>
                <div className="cart__checkout">
                  <button className="cart__checkout--btn cart__checkout--btn1">
                    THANH TOÁN NGAY
                  </button>
                </div>
                <div className="cart__proceed">
                  <button className="cart__proceed--btn cart__proceed--btn1">
                    TIẾP TỤC MUA HÀNG
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default CartProduct;
