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
import { useHistory } from "react-router-dom";
ProductDiscount.propTypes = {
  data: PropTypes.array,
};
ProductDiscount.defaultProps = {
  data: [],
};

function ProductDiscount({ data }) {
  const history = useHistory();
  return (
    <div className="sectionNew">
      <Container>
        <Box sx={{ height: "400px" }} pb={6}>
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
              <img
                src="https://cf.shopee.vn/file/6b52c31f443f2ca721e9f3db13fb9d25
"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cf.shopee.vn/file/e54aa510d2bba94e99af191448597a47" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://cf.shopee.vn/file/629b633d28fee62e7d793e711202de87" alt="" />
            </SwiperSlide>
          </Swiper>
        </Box>
        <div className="sectionNew__head">
          <h3 className="sectionNew__head--title">GIẢM GIÁ - KHUYẾN MÃI</h3>
        </div>
        <Grid container spacing={2} pt={2} className="sectionNew__blocks">
          {data.map((product) => (
            <Grid
              key={product.id}
              item
              xs={12}
              md={4}
              sm={6}
              lg={3}
              onClick={() => {
                history.push(`/products/${product._id}`);
              }}
            >
              <div className="single-product-wrapper">
                <div className="product-img">
                  <img src={product.thumbnail[0].imageUrl} alt="" />
                  <img className="hover-img" src={product.thumbnail[1].img2} alt="" />

                  <div className="product-badge offer-badge">
                    <span>-{product.promotionPercent}%</span>
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
          <button
            onClick={() => {
              history.push("/products");
            }}
            className="sectionNew__viewmore--btn sectionNew__viewmore--btn1"
          >
            Xem tất cả
          </button>
        </div>
      </Container>
    </div>
  );
}

export default ProductDiscount;
