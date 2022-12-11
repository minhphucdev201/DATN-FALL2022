import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { PropTypes } from "prop-types";
import { React } from "react";
import { formatPrice } from "./../../../utils/common";
// Import Swiper styles

ProductNew.propTypes = {
  data: PropTypes.array,
};
ProductNew.defaultProps = {
  data: [],
};
function ProductNew({ data }) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div className="sectionNew">
      <Container>
        <div className="banner">
          <img
            alt=""
            src="https://haeva.com.vn/wwwroot/resources/upload/img/banner/8-2022/778x233.jpg"
          />
        </div>
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
                  Tinh Dầu
                </Link>
                <Typography color="text.primary">Tinh Dầu Thiên Nhiên</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <Grid container spacing={2} className="sectionNew__blocks">
          {data.map((product) => (
            <Grid key={product.id} className="sectionNew__item" item xs={12} md={4} sm={6} lg={3}>
              <div className="single-product-wrapper">
                <div className="product-img">
                  <img src={product.thumbnail[0].imageUrl} alt="" />
                  <img src={product.thumbnail[1].img2} className="hover-img" alt="" />
                  <div className="product-badge offer-badge">
                    <span>{product.promotionPercent}%</span>
                  </div>
                </div>
                <div className="product-description">
                  <a href="">
                    <h5>{product.name}</h5>
                  </a>
                  <p className="product-price">
                    <p>{formatPrice(product.salePrice)}</p>{" "}
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

export default ProductNew;
