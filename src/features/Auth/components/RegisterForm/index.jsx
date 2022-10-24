import React from "react";
import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

import "./styles.scss";
RegisterForm.propTypes = {};

function RegisterForm(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "550", textTransform: "uppercase" }}>
      Đăng kí tài khoản
    </Typography>,
  ];
  return (
    <div className="register">
      <div className="register__breadcrumb">
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
      <div className="register__head">
        <h2 className="register__head--title">ĐĂNG KÝ TÀI KHOẢN</h2>
        <Typography variant="subtitle1" sx={{ textAlign: "center", marginTop: "6px" }}>
          Nếu chưa có tài khoản vui lòng đăng ký tại đây &nbsp;
          <a href="" style={{ color: "#2e7d32" }}>
            tại đây
          </a>
        </Typography>
      </div>
      <div className="register__social">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
        >
          <Grid item xs={12} lg={1} sx={{ marginRight: "12px" }}>
            <div className="register__social--facebook">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPAcp6myHZQn8VsfoQV5Lmv2OE24hD22VCdBkHoO2LVc0nv9M1VSMkuuHO1NMs_H1tfU&usqp=CAU"
                alt=""
              />
              <span>Facebook</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={1} sx={{ marginLeft: "12px" }}>
            <div className="register__social--google">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBF69Ugt82cQ4Agk9RFemPGatG_2MhmSpgO_eTOrBLxC24CutQjdmnXiBB7jSCQB6Ef0&usqp=CAU"
                alt=""
              />
              <span>Google</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="register__form">
        <Container>
          <form action="">
            <div className="register__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="HỌ Và Tên"
                  placeholder="Nhập Họ và Tên"
                  color="success"
                  multiline
                  sx={{ width: "60%" }}
                  size="small"
                />
              </div>
            </div>
            <div className="register__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="SỐ ĐIỆN THOẠI"
                  placeholder="Nhập Số điện thoại"
                  color="success"
                  multiline
                  sx={{ width: "60%", color: "#1c1c1c" }}
                  size="small"
                />
              </div>
            </div>
            <div className="register__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="EMAIL"
                  placeholder="Nhập Địa chỉ Email"
                  color="success"
                  multiline
                  sx={{ width: "60%" }}
                  size="small"
                />
              </div>
            </div>
            <div className="register__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="MẬT KHẨU"
                  placeholder="Nhập Mật khẩu"
                  color="success"
                  multiline
                  sx={{ width: "60%" }}
                  size="small"
                />
              </div>
            </div>
            <div className="register__form--submit">
              <button className="register__form--btn register__form--btn1">TẠO TÀI KHOẢN</button>
            </div>
          </form>
          <div className="register__box">
            <p className="">
              BẠN ĐÃ CÓ TÀI KHOẢN. ĐĂNG NHẬP &nbsp;
              <a href="register__box--link" style={{ color: "#2e7d32" }}>
                TẠI ĐÂY.
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default RegisterForm;
