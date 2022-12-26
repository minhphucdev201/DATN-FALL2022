import DeleteIcon from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartItemsCountSelector, cartItemsSelector, cartTotalSelector } from "../selector";
import CartProduct from "./CartProduct/CartProduct";
import FormSetQuantity from "./FormSetQuantity/FormSetQuantity";
import { formatPrice } from "../../../utils";
import "./styles.scss";
Cart.propTypes = {};

function Cart(props) {
  function handleClick(event) {}
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "550" }}>
      GIỎ HÀNG
    </Typography>,
  ];
  const countItem = useSelector(cartItemsCountSelector);
  const totalPrices = useSelector(cartTotalSelector);
  const listProductCart = useSelector((state) => state.cart.cartItems);

  const history = useHistory();
  const onClickShopping = () => {
    history.push({
      pathname: "/products",
    });
  };
  return (
    <div className="cartheader">
      <div className="row cartheader__row">
        {listProductCart.length < 1 ? (
          <div className="cartheader__empty">
            <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="iphone" />
            <p>không có sản phẩm nào trong giỏ hàng của bạn</p>
            <button className="cartheader__btn" onClick={onClickShopping}>
              tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <>
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
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "22px", color: "#2D7D32", letterSpacing: "1px" }}
                  >
                    Giỏ Hàng: ({countItem} sản phẩm)
                  </Typography>
                </Container>
              </div>
              <div className="cart__shopping">
                <Container>
                  <Grid container spacing={3}>
                    {/* product item */}
                    <Grid item xs={12} md={9} sm={10} lg={9} className="cart__left">
                      {listProductCart.map(({ product, quantity }) => (
                        <CartProduct product={product} quantity={quantity} key={product._id} />
                      ))}
                    </Grid>
                    <Grid item xs={12} md={3} sm={2} lg={3} className="cart__right">
                      <div className="cart__right--box">
                        <p className="cart__right--total">
                          <p>Tạm tính:</p> <strong>{formatPrice(totalPrices)}</strong>
                        </p>
                        <p className="cart__right--totalprice">
                          <p>Thành tiền:</p> <strong>{formatPrice(totalPrices)}</strong>
                        </p>
                      </div>
                      <div className="cart__right--btn" style={{ marginTop: "30px" }}>
                        <div className="cart__checkout">
                          <button
                            className="cart__checkout--btn cart__checkout--btn1"
                            onClick={() => {
                              history.push("/checkout");
                            }}
                          >
                            THANH TOÁN NGAY
                          </button>
                        </div>
                        <div className="cart__proceed">
                          <button
                            className="cart__proceed--btn cart__proceed--btn1"
                            onClick={() => {
                              history.push("/products");
                            }}
                          >
                            TIẾP TỤC MUA HÀNG
                          </button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    // <CartProductDemo />
  );
}

export default Cart;
