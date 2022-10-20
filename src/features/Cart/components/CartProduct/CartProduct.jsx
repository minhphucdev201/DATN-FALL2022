import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs, Container, Grid, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={9} sm={10} lg={8} sx={{ background: "red" }}>
              1
            </Grid>
            <Grid item xs={12} md={3} sm={2} lg={4} sx={{ background: "blue" }}>
              1
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default CartProduct;
