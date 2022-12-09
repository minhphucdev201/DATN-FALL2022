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
import { React, useEffect, useState } from "react";
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
import ProductInfo from "./../components/ProductInfo";
import ProductBestSell from "./../../HomePage/Components/ProductBestSell";
import ProductBreadcrumb from "./../components/ProductBreadcrumb";
import ProductRelate from "./../components/ProductRelate";
import productApi from "./../../../api/productApi";
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
  const [relate, setRelate] = useState([]);
  const {
    params: { productId },
  } = useRouteMatch();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getProductNew({ page: 1, limit: 4 });
        setRelate(data);
        console.log(data);
      } catch (error) {
        console.log("Failed to fetch product new", error);
      }
    })();
  }, []);
  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return <Box>Loading</Box>;
  }

  return (
    <div className="sectionDetail">
      <ProductBreadcrumb product={product} />
      <Container>
        <div className="productDetail">
          <Grid container spacing={2} className="productDetail__main">
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__image">
              {/* <ProductImagesSlider images={productImages} /> */}
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__details">
              <ProductInfo product={product} />
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
            <ProductRelate product={relate} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailPage;
