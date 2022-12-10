import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { formatPrice } from "./../../../utils/common";
ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  return (
    <div className="productDetail__details--main">
      <h3 className="productDetail__title">{product.name}</h3>
      <div className="productDetail__blockrating">
        <div className="productDetail__blockrating--starts">
          <span>4.5</span>
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarIcon color="success" />
          <StarHalfIcon color="success" />
        </div>
        <div className="productDetail__blockrating--reviewsummary">
          <Typography
            variant="subtitle1"
            sx={{
              marginLeft: "6px",
              borderBottom: "1px solid #757575",
              lineHeight: "none",
            }}
          >
            1
          </Typography>
          <Typography variant="subtitle2" sx={{ marginLeft: "6px", color: "#757575" }}>
            Đánh giá
          </Typography>
        </div>
      </div>
      <div className="productDetail__price">
        <div className="productDetail__price--box">
          <span className="productDetail__price--special">{formatPrice(product.salePrice)}</span>
          <span className="productDetail__price--old">{formatPrice(product.originalPrice)}</span>
          <span
            className="productDetail__price--special"
            style={{ color: "#2E7D32", fontSize: "18px", marginLeft: "20px" }}
          >
            -{product.promotionPercent}%
          </span>
        </div>
      </div>
      {/* <div className="productDetail__formgroup">
        <div className="productDetail__formgroup--box">
          <label className="productDetail__formgroup--label">Số lượng : </label>
          <div class="qty-input">
            <button className="qty-count qty-count--minus" data-action="minus" type="button">
              -
            </button>
            <input
              className="product-qty"
              type="number"
              name="product-qty"
              min="0"
              max="10"
              value="1"
            />
            <button className="qty-count qty-count--add" data-action="add" type="button">
              +
            </button>
          </div>
        </div>
        <div className="productDetail__btn">
          <div className="productDetail__addtocart">
            <ShoppingCartIcon sx={{ marginRight: "6px" }} color="success" />
            <a className="productDetail__addtocart--btn">THÊM GIỎ HÀNG</a>
          </div>
          <div className="productDetail__btnmua">
            <a className="productDetail__btnmua--btn">Mua Ngay</a>
          </div>
        </div>
      </div> */}

      <div className="productDetail__service">
        <div className="productDetail__service--item">
          <img
            src="https://res.cloudinary.com/phucdev/image/upload/v1666089710/chinh-sach-van-chuyen_b0nfko.png"
            alt=""
          />
          <h3>
            MIỄN PHÍ VẬN CHUYỂN VỚI ĐƠN HÀNG TỪ <span>500.000đ</span>
          </h3>
        </div>
        <div className="productDetail__service--item">
          <img
            src="https://res.cloudinary.com/phucdev/image/upload/v1666089656/Icon-Doi-Tra-Hang_al36gp.jpg"
            alt=""
          />
          <h3>
            ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG <span>7 NGÀY</span>
          </h3>
        </div>
        <div className="productDetail__service--item">
          <img
            src="https://res.cloudinary.com/phucdev/image/upload/v1666089610/h-icon-2sao-chepsao-chep_atyyxi.png"
            alt=""
          />
          <h3>
            CAM KẾT <span>100%</span> CHÍNH HÃNG
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
