import { Container, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import * as React from "react";
import "./styles.scss";
import { ShoppingCart } from "@mui/icons-material";

export default function Header() {
  return (
    <div>
      <Container className="header">
        <Grid container spacing={2} className="header__top">
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__item">
            <Typography variant="h3">
              <p className="header__item--hotline">HOTLINE : 028 7308 8800</p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <Typography variant="h3">
              <p className="header__item--name">HERBAL OIL</p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="header__icon">
              <div className="header__search">
                <input className="header__search--txt" type="text" placeholder="Nhập để tìm kiếm" />
                <a href="#" className="header__search--btn">
                  <SearchIcon />
                </a>
              </div>
              <div className="header__user">
                <span>
                  <PersonIcon color="success" />
                </span>
              </div>
              <div className="header__cart">
                <span>
                  <ShoppingCart color="success" />
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2} className="header__bottom" pt={2}>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link header__box--active">
                Trang chủ
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link">
                sản phẩm
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link">
                Giảm giá
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="left">
              <a href="#" className="header__box--link">
                chính sách - hướng dẫn
              </a>
            </Typography>
          </Grid>
        </Grid>
        <div className="banner">
          <img
            alt=""
            src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/778x233.jpg"
          />
        </div>
      </Container>
    </div>
  );
}
