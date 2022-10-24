import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs, Container, Grid, Link, makeStyles, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./styles.scss";
Account.propTypes = {};
// const useStyles = makeStyles((theme) => {});
function Account(props) {
  //   const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="2" color="text.primary" sx={{ fontWeight: "550", textTransform: "uppercase" }}>
      thông tin của tôi
    </Typography>,
  ];
  return (
    <div className="account">
      <div className="account__breadcrumb">
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
      <div className="account__info">
        <Container>
          <Grid container>
            <Grid item xs={12} lg={4}>
              <div className="account__left">
                <h5 className="account__left--title">TRANG TÀI KHOẢN</h5>
                <p className="account__left--fullname">
                  Xin chào, &nbsp;
                  <span>TRƯƠNG MINH PHÚC !</span>
                </p>
                <ul className="account__list">
                  <li className="account__item">
                    <a href="" className="account__item--link account__item--active">
                      Thông tin tài khoản
                    </a>
                  </li>
                  <li className="account__item">
                    <a href="" className="account__item--link">
                      Đơn hàng của bạn
                    </a>
                  </li>
                  <li className="account__item">
                    <a href="" className="account__item--link">
                      Đổi mật khẩu
                    </a>
                  </li>
                  <li className="account__item">
                    <a href="" className="account__item--link">
                      Sổ địa chỉ (0)
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} lg={8}>
              <div className="account__right">
                <h5 className="account__right--title">THÔNG TIN TÀI KHOẢN</h5>
                <div className="account__right--useraccount">
                  <p>
                    <strong>Họ tên:</strong> Trương Minh Phúc
                  </p>
                  <p>
                    <strong>Email:</strong> truongminhphuc2001@gmail.com
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Account;
