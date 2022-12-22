import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "./../../../utils/common";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};
Product.defaultProps = {};
function Product({ product }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/products/${product._id}`);
  };
  // const percentProduct = [(product.originalPrice - product.salePrice) / 100000] * (100%)

  return (
    <div className="single-product-wrapper" onClick={handleClick}>
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
  );
}
export default Product;
