import { Breadcrumbs, Container, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
// Import Swiper styles
import * as React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import { PropTypes } from "prop-types";
import { formatPrice } from "../../../utils/common";
ProductBestSell.propTypes = {
  data: PropTypes.array,
};

function ProductBestSell({ data = [] }) {
  const history = useHistory();
  return (
    <div className="sectionNew">
      <Container>
        <div className="sectionNew__banner">
          <img src="https://cf.shopee.vn/file/5e0c9d0b3b598e0b646b6403e2079805" alt="" />
        </div>
        <div className="sectionNew__head">
          <h3 className="sectionNew__head--title">SẢN PHẨM bán chạy</h3>
          <div className="sectionNew__head--allcat">
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Sản phẩm mới
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Tinh dầu
                </Link>
                <Typography color="text.primary">Tinh dầu thiên nhiên</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <Grid container spacing={2} className="sectionNew__blocks">
          {data.map((product) => (
            <Grid
              className="sectionNew__item"
              key={product._id}
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
                    <p>{formatPrice(product.salePrice)}</p>{" "}
                    <p className="old-price">{formatPrice(product.originalPrice)}</p>
                  </p>
                </div>
                <div className="product-addtocart">
                  <a href={`/products/${product._id}`} className="product-btn">
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

export default ProductBestSell;
