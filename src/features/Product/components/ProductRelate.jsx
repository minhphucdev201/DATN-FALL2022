import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { formatPrice } from "./../../../utils/common";
import { useHistory } from "react-router-dom";

ProductRelate.propTypes = {
  product: PropTypes.object,
};

function ProductRelate({ product = {} }) {
  const history = useHistory();

  return (
    <div>
      <div className="productDetail__related--title">
        <h3>
          SẢN PHẨM <span className="productDetail__related--span">LIÊN QUAN</span>
        </h3>
      </div>
      <Grid container spacing={2} className="">
        {product.map((item) => (
          <Grid key={item._id} item xs={12} md={6} sm={6} lg={3}>
            <div className="single-product-wrapper">
              <div className="product-img">
                <img src={item.thumbnail[0].imageUrl} alt="" />
                <img src={item.thumbnail[0].img2} className="hover-img" alt="" />

                <div className="product-badge offer-badge">
                  <span>{item.promotionPercent}%</span>
                </div>
              </div>
              <div className="product-description">
                <a href="">
                  <h5>{item.name}</h5>
                </a>
                <p className="product-price">
                  <p>{formatPrice(item.salePrice)}</p>{" "}
                  <p className="old-price">{formatPrice(item.originalPrice)}</p>
                </p>
              </div>
              <div className="product-addtocart">
                <a href={`/products/${item._id}`} className="product-btn">
                  Thêm giỏ hàng
                </a>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className="productDetail__viewmore">
        <button className="productDetail__viewmore--btn productDetail__viewmore--btn1">
          Xem tất cả
        </button>
      </div>
    </div>
  );
}

export default ProductRelate;
