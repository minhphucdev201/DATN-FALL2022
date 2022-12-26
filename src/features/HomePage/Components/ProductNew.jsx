import { Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { PropTypes } from "prop-types";
import { React } from "react";
import { useHistory } from "react-router-dom";
import { formatPrice } from "./../../../utils/common";
// Import Swiper styles

ProductNew.propTypes = {
  data: PropTypes.array,
};
ProductNew.defaultProps = {
  data: [],
};
function ProductNew({ data }) {
  const history = useHistory();
  return (
    <div className="sectionNew">
      <Container>
        <div className="banner">
          <img
            style={{ height: "400px", objectFit: "fill" }}
            alt=""
            src="https://cf.shopee.vn/file/ce6990931063310baf90f73758be3fa6"
          />
        </div>
        <div className="sectionNew__head">
          <h3 className="sectionNew__head--title">SẢN PHẨM MỚI</h3>
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
                  Tinh Dầu
                </Link>
                <Typography
                  sx={{ cursor: "pointer" }}
                  color="text.primary"
                  onClick={() => {
                    history.push(
                      "/products?column=salePrice&idCatalog=63a310108975bf54b69118ca&limit=9&page=1&type=ASC"
                    );
                  }}
                >
                  Tinh Dầu Thiên Nhiên
                </Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <Grid container spacing={2} className="sectionNew__blocks">
          {data.map((product) => (
            <Grid
              key={product._id}
              className="sectionNew__item"
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
                  <img src={product.thumbnail[1].img2} className="hover-img" alt="" />
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

export default ProductNew;
