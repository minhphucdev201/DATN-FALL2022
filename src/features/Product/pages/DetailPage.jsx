import { makeStyles } from "@material-ui/core";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Container, Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
// import "../../../utils/index";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { productImages } from "../../../assets/index";
import ProductImagesSlider from "../../../components/product-images-slider";
import "./styles.scss";
import ProductThumbnail from "../components/ProductThumbnail";
// import required modules
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import useProductDetail from "./../hooks/useProductDetail";
DetailPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
    maxWidth: "150px",
    flexFlow: "row nowap",
    border: "1px solid #ccc",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    "& input": {
      textAlign: "center",
      padding: "0",
    },
    "& fieldset": {
      border: "none",
    },
    "& div": {
      width: "calc(40%)",
      borderRadius: "0",
      borderLeft: "1px solid #ccc",
      borderRight: "1px solid #ccc",
    },
  },
  button: {
    // marginTop: theme.spacing(2),
    minWidth: "calc(30%)",
    padding: "0",
  },
}));
function DetailPage(props) {
  const classes = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return <Box>Loading</Box>;
  }
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      SẢN PHẨM MỚI
    </Link>,
    <Typography key="3" color="text.primary" sx={{ fontWeight: "550" }}>
      TINH DẦU BẠC HÀ THIÊN NHIÊN
    </Typography>,
  ];
  return (
    <div className="sectionDetail">
      <div className="sectionDetail__breadcrumb">
        <Container>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              sx={{ color: "#5C5757" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Container>
      </div>
      <Container>
        <div className="productDetail">
          <Grid container spacing={2} className="productDetail__main">
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__image">
              {/* <ProductImagesSlider images={productImages} /> */}
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__details">
              <div className="productDetail__details--main">
                <h3 className="productDetail__title">
                  (Set 3 Chai) Tinh dầu Giải cảm & Tinh dầu Xá xị sát khuẩn, khử trùng không khí
                </h3>
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
                    <span className="productDetail__price--special">279.000đ</span>
                    <span className="productDetail__price--old">299.000đ</span>
                  </div>
                </div>
                <div className="productDetail__formgroup">
                  <div className="productDetail__formgroup--box">
                    <label className="productDetail__formgroup--label">Số lượng : </label>
                    <div class="qty-input">
                      <button
                        className="qty-count qty-count--minus"
                        data-action="minus"
                        type="button"
                      >
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
                </div>

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
            </Grid>
          </Grid>

          <div className="productDetail__desc">
            <div className="productDetail__desc--div">
              <span className="productDetail__desc--title productDetail__desc--active">MÔ TẢ</span>
            </div>
            <div className="productDetail__desc--content">
              <p className="productDetail__desc--txt">
                BỘ LỌ VÀ QUE KHUẾCH TÁN TINH DẦU - LỌ ĐỰNG TINH DẦU KHUẾCH TÁN XINH XẮN
              </p>
              <span>
                Sản phẩm mang phong cách vintage với thiết kế nhỏ nhắn, xinh xắn, phù hợp trang trí
                mọi vị trí trong nhà, phòng ngủ hoặc nơi làm việc. Giúp người dùng cảm thấy thoải
                mái cũng như góp phần giúp ngôi nhà của bạn thêm phần ấn tượng.
              </span>
              <div className="productDetail__desc--list">
                <p className="productDetail__desc--txt">
                  1. Trọn bộ Lọ và que khuếch tán tinh dầu bao gồm:
                </p>
                <p>
                  -&nbsp; Lọ thủy tinh xinh xắn dùng để cắm que khuếch tán và đựng tinh dầu (size
                  100ml)
                </p>
                <p>
                  -&nbsp; 5 que khuếch tán tin dầu có đính kèm lá hoa Mộc lan và cầu mây xinh xắn
                </p>
              </div>
              <div className="productDetail__desc--list">
                <p className="productDetail__desc--txt">2. Hướng dẫn sử dụng</p>
                <p>Bước 1: Đổ tinh dầu từ chai đựng vào lọ khuếch tán</p>
                <p>Bước 2: Cắm bộ cây khuếch tán vào lọ</p>
                <p>Bước 3: 1 – 2 giờ sau, đảo đầu cây để tăng khả năng khuếch tán.</p>
                <p>
                  Bước 4: 7 – 10 ngày/lần đảo đầu cây khuếch tán để hiệu quả khuếch tán được tốt
                  nhất.
                </p>
                <p>Bước 5: Khi tinh dầu sắp cạn, rót thêm để đảm bảo nồng độ của mùi hương</p>
                <span>
                  Khi vắng nhà, các bạn có thể đậy nắp hoặc rút bớt que khuếch tán để giảm lượng
                  tinh dầu thoát ra trong thời gian đó.
                </span>
              </div>
              <p className="productDetail__desc--txt">
                *Lưu ý: Sản phẩm khuếch tán tốt nhất trong phạm vi nhỏ nhất định như phòng ngủ,
                phòng làm việc Hỗ trợ khách hàng: 0705 090919 – Fanpage: Tinh dầu Tâm An Nhiên
              </p>
            </div>
          </div>
          <div className="productDetail__rating">
            <div className="productDetail__rating--div">
              <span className="productDetail__rating--title productDetail__rating--active">
                Đánh GIÁ SẢN PHẨM
              </span>
            </div>
            <div className="productDetail__rating--head">
              <div className="productDetail__rating--left">
                <div className="productDetail__rating--stars">
                  <StarOutlineIcon color="success" />
                  <StarOutlineIcon color="success" />
                  <StarOutlineIcon color="success" />
                  <StarOutlineIcon color="success" />
                  <StarOutlineIcon color="success" />
                </div>
                <span>Dựa trên 0 đánh giá</span>
              </div>
              <div className="productDetail__rating--right">
                <ChatBubbleOutlineOutlinedIcon color="success" />
                <a className="productDetail__rating--btn">Viết đánh giá</a>
              </div>
            </div>
            <div className="productDetail__rating--form">
              <form action="">
                <div className="productDetail__rating--list">
                  <div className="productDetail__rating--item">
                    <div>
                      <TextField
                        id="outlined-textarea"
                        label="Tên"
                        placeholder="Nhập tên của bạn"
                        multiline
                        sx={{ width: 350, marginRight: "12px" }}
                        size="small"
                      />
                    </div>
                    <div>
                      <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="hi@example.com"
                        multiline
                        sx={{ width: 350, marginRight: "12px" }}
                        size="small"
                      />
                    </div>
                    <div>
                      <TextField
                        id="outlined-textarea"
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại của bạn"
                        fullWidth
                        multiline
                        sx={{ width: 400 }}
                        size="small"
                      />
                    </div>
                  </div>
                  <div>
                    <TextField
                      id="outlined-textarea"
                      label="Tiêu đề đánh giá"
                      placeholder="Nhập tiêu đề đánh giá của bạn......"
                      multiline
                      sx={{ width: "100%", marginRight: "12px", marginBottom: "1.4rem" }}
                      size="small"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-textarea"
                      label="Nội dung"
                      placeholder="Viết nội dung đánh của bạn....."
                      multiline
                      sx={{ width: "100%" }}
                      // size="small"
                      rows={6}
                    />
                  </div>
                </div>
                <div className="productDetail__rating--submit">
                  <button className="productDetail__rating--btns">Gửi đánh giá</button>
                </div>
              </form>
            </div>
          </div>
          <div className="productDetail__related">
            <div className="productDetail__related--title">
              <h3>
                SẢN PHẨM <span className="productDetail__related--span">LIÊN QUAN</span>
              </h3>
            </div>
            <Grid container spacing={2} className="">
              <Grid item xs={12} md={6} sm={6} lg={3}>
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="https://cf.shopee.vn/file/d6f20d2a2f986bcd87c76a4de6991515" alt="" />
                    <img
                      className="hover-img"
                      src="https://cf.shopee.vn/file/f56c94800b763ed85570b0a169ed1d6e"
                      alt=""
                    />

                    <div className="product-badge offer-badge">
                      <span>-12%</span>
                    </div>
                  </div>
                  <div className="product-description">
                    <a href="">
                      <h5>TINH DẦU HOẮC HƯƠNG</h5>
                    </a>
                    <p className="product-price">
                      <p>139.000đ</p> <p className="old-price">260.000đ</p>
                    </p>
                  </div>
                  <div className="product-addtocart">
                    <a href="" className="product-btn">
                      Thêm giỏ hàng
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={3}>
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="https://cf.shopee.vn/file/d6f20d2a2f986bcd87c76a4de6991515" alt="" />
                    <img
                      className="hover-img"
                      src="https://cf.shopee.vn/file/f56c94800b763ed85570b0a169ed1d6e"
                      alt=""
                    />

                    <div className="product-badge offer-badge">
                      <span>-12%</span>
                    </div>
                  </div>
                  <div className="product-description">
                    <a href="">
                      <h5>TINH DẦU HOẮC HƯƠNG</h5>
                    </a>
                    <p className="product-price">
                      <p>139.000đ</p> <p className="old-price">260.000đ</p>
                    </p>
                  </div>
                  <div className="product-addtocart">
                    <a href="" className="product-btn">
                      Thêm giỏ hàng
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={3}>
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="https://cf.shopee.vn/file/d6f20d2a2f986bcd87c76a4de6991515" alt="" />
                    <img
                      className="hover-img"
                      src="https://cf.shopee.vn/file/f56c94800b763ed85570b0a169ed1d6e"
                      alt=""
                    />

                    <div className="product-badge offer-badge">
                      <span>-12%</span>
                    </div>
                  </div>
                  <div className="product-description">
                    <a href="">
                      <h5>TINH DẦU HOẮC HƯƠNG</h5>
                    </a>
                    <p className="product-price">
                      <p>139.000đ</p> <p className="old-price">260.000đ</p>
                    </p>
                  </div>
                  <div className="product-addtocart">
                    <a href="" className="product-btn">
                      Thêm giỏ hàng
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={3}>
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src="https://cf.shopee.vn/file/d6f20d2a2f986bcd87c76a4de6991515" alt="" />
                    <img
                      className="hover-img"
                      src="https://cf.shopee.vn/file/f56c94800b763ed85570b0a169ed1d6e"
                      alt=""
                    />

                    <div className="product-badge offer-badge">
                      <span>-12%</span>
                    </div>
                  </div>
                  <div className="product-description">
                    <a href="">
                      <h5>TINH DẦU HOẮC HƯƠNG</h5>
                    </a>
                    <p className="product-price">
                      <p>139.000đ</p> <p className="old-price">260.000đ</p>
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
            <div className="productDetail__viewmore">
              <button className="productDetail__viewmore--btn productDetail__viewmore--btn1">
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailPage;
