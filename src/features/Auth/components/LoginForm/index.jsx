import React from "react";
import PropTypes from "prop-types";

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
import "./styles.scss";
LoginForm.propTypes = {};

function LoginForm(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "550", textTransform: "uppercase" }}>
      Đăng nhập tài khoản
    </Typography>,
  ];
  return (
    <div className="login">
      <div className="login__breadcrumb">
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
      <div className="login__head">
        <h2 className="login__head--title">ĐĂNG NHẬP TÀI KHOẢN</h2>
      </div>
      <div className="login__social">
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
        >
          <Grid item xs={12} lg={1} sx={{ marginRight: "12px" }}>
            <div className="login__social--facebook">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPAcp6myHZQn8VsfoQV5Lmv2OE24hD22VCdBkHoO2LVc0nv9M1VSMkuuHO1NMs_H1tfU&usqp=CAU"
                alt=""
              />
              <span>Facebook</span>
            </div>
          </Grid>
          <Grid item xs={12} lg={1} sx={{ marginLeft: "12px" }}>
            <div className="login__social--google">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBF69Ugt82cQ4Agk9RFemPGatG_2MhmSpgO_eTOrBLxC24CutQjdmnXiBB7jSCQB6Ef0&usqp=CAU"
                alt=""
              />
              <span>Google</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="login__form">
        <Container>
          <form action="">
            <div className="login__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="EMAIL"
                  placeholder="Nhập Địa chỉ Email"
                  color="success"
                  multiline
                  sx={{ width: "60%" }}
                  size="medium"
                />
              </div>
            </div>
            <div className="login__form--item">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="MẬT KHẨU"
                  placeholder="Nhập Mật khẩu"
                  color="success"
                  multiline
                  sx={{ width: "60%", color: "#1c1c1c" }}
                  size="medium"
                />
              </div>
            </div>
            <div className="login__form--submit">
              <button className="login__form--btn login__form--btn1">ĐĂNG NHẬP</button>
            </div>
          </form>
          <div className="login__forget">
            <Link underline="hover" color="inherit" href="" sx={{ color: "#4B4949" }}>
              Quên mật khẩu?
            </Link>
          </div>
          <div className="login__box">
            <p className="">
              BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ &nbsp;
              <a href="login__box--link" style={{ color: "#2e7d32" }}>
                TẠI ĐÂY.
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default LoginForm;
