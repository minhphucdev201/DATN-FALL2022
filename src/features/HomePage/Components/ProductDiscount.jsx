import { Box } from "@material-ui/core";
import { Container, Grid } from "@mui/material";
// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";
import { PropTypes } from "prop-types";
import { formatPrice } from "./../../../utils/common";
ProductDiscount.propTypes = {
  data: PropTypes.array,
};
ProductDiscount.defaultProps = {
  data: [],
};

function ProductDiscount({ data }) {
  return (
    <div className="sectionNew">
      <Container>
        <Box sx={{ height: "400px" }}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
        </Box>
        <div className="sectionNew__head">
          <h3 className="sectionNew__head--title">GIẢM GIÁ - KHUYẾN MÃI</h3>
        </div>
        <Grid container spacing={2} className="sectionNew__blocks">
          {data.map((product) => (
            <Grid key={product.id} item xs={12} md={4} sm={6} lg={3}>
              <div className="single-product-wrapper">
                <div className="product-img">
                  <img src={product.thumbnail[0].imageUrl} alt="" />
                  <img className="hover-img" src={product.thumbnail[0].img2} alt="" />

                  <div className="product-badge offer-badge">
                    <span>{product.promotionPercent}%</span>
                  </div>
                </div>
                <div className="product-description">
                  <a href="">
                    <h5>{product.name}</h5>
                  </a>
                  <p className="product-price">
                    <p>{formatPrice(product.salePrice)}</p>
                    <p className="old-price">{formatPrice(product.originalPrice)}</p>
                  </p>
                </div>
                <div className="product-addtocart">
                  <a href="" className="product-btn">
                    Thêm giỏ hàng
                  </a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        <div className="sectionNew__viewmore">
          <button className="sectionNew__viewmore--btn sectionNew__viewmore--btn1">
            Xem tất cả
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ProductDiscount;
