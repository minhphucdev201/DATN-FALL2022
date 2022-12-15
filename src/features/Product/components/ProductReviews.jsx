import { React, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../pages/styles.scss";
import { Box } from "@mui/system";
ProductReviews.propTypes = {};

function ProductReviews(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    console.log("hihi");
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
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
          <a className="productDetail__rating--btn" onClick={handleClickOpen}>
            Viết đánh giá
          </a>
        </div>
      </div>
      <div className="productDetail__rating--form">
        <Box>
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
        </Box>
      </div>
    </div>
  );
}

export default ProductReviews;
