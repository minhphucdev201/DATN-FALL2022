import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as React from "react";
import "./styles.scss";
ProductNew.propTypes = {};

function ProductNew(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div className="sectionNew">
      <Container>
        <div className="sectionNew__head">
          <h3 className="sectionNew__head--title">SẢN PHẨM MỚI</h3>
          <div className="sectionNew__head--allcat">
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Sản phẩm mới
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Tinh dầu thiên nhiên
                </Link>
                <Typography color="text.primary">Tinh dầu xông thơm phòng</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <Grid container spacing={2} className="sectionNew__blocks">
          <Grid className="sectionNew__item" item xs={12} md={4} sm={6} lg={3}>
            <div className="single-product-wrapper">
              <div className="product-img">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/3-Post%20SP-10.jpg"
                  alt=""
                />
                <img
                  className="hover-img"
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/post-sp-03.jpg"
                  alt=""
                />

                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
              </div>
              <div className="product-description">
                <a href="">
                  <h5>TINH DẦU CAFFE</h5>
                </a>
                <p className="product-price">
                  <span className="old-price">599.000đ</span> 990.000đ
                </p>
              </div>
              <div className="product-addtocart">
                <a href="" className="product-btn">
                  Thêm giỏ hàng
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            {" "}
            <div className="single-product-wrapper">
              <div className="product-img">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/3-Post%20SP-10.jpg"
                  alt=""
                />
                <img
                  className="hover-img"
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/post-sp-03.jpg"
                  alt=""
                />

                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
              </div>
              <div className="product-description">
                <a href="">
                  <h5>TINH DẦU CAFFE</h5>
                </a>
                <p className="product-price">
                  <span className="old-price">599.000đ</span> 990.000đ
                </p>
              </div>
              <div className="product-addtocart">
                <a href="" className="product-btn">
                  Thêm giỏ hàng
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            {" "}
            <div className="single-product-wrapper">
              <div className="product-img">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/3-Post%20SP-10.jpg"
                  alt=""
                />
                <img
                  className="hover-img"
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/post-sp-03.jpg"
                  alt=""
                />

                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
              </div>
              <div className="product-description">
                <a href="">
                  <h5>TINH DẦU CAFFE</h5>
                </a>
                <p className="product-price">
                  <span className="old-price">599.000đ</span> 990.000đ
                </p>
              </div>
              <div className="product-addtocart">
                <a href="" className="product-btn">
                  Thêm giỏ hàng
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            {" "}
            <div className="single-product-wrapper">
              <div className="product-img">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/3-Post%20SP-10.jpg"
                  alt=""
                />
                <img
                  className="hover-img"
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/post-sp-03.jpg"
                  alt=""
                />

                <div className="product-badge offer-badge">
                  <span>-30%</span>
                </div>
              </div>
              <div className="product-description">
                <a href="">
                  <h5>TINH DẦU CAFFE</h5>
                </a>
                <p className="product-price">
                  <span className="old-price">599.000đ</span> 990.000đ
                </p>
              </div>
              <div className="product-addtocart">
                <a href="" className="product-btn">
                  Thêm giỏ hàng
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="sectionNew__viewmore">
          <button className="sectionNew__viewmore--btn sectionNew__viewmore--btn1">
            Xem tất cả
          </button>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://cf.shopee.vn/file/94f7e4ab3e707e1dc893480187910e24" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cf.shopee.vn/file/168788478864476ed96c35fdbdad13fb" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cf.shopee.vn/file/3f71ad11cbe105f8b55ca89dadd9073a" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cf.shopee.vn/file/f03fb9081cccbc08595f1289aa6483f5" alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default ProductNew;
