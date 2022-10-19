import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Breadcrumbs } from "@material-ui/core";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
ListPage.propTypes = {};

function ListPage(props) {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      TRANG CHỦ
    </Link>,

    <Typography key="3" color="text.primary" sx={{ fontWeight: "550" }}>
      TIN TỨC
    </Typography>,
  ];
  return (
    <div className="sectionBlog">
      <div className="sectionBlog__breadcrumb">
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
      <div className="sectionBlog__main">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8} className="sectionBlog__content">
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/12-2021/2-SKCN%2012.12%20870x435-01-min.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    5 Lợi Ích Khi Dùng Máy Xông Phun Sương
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Máy xông tinh dầu dần thay thế các thiết bị tỏa hương như đèn đốt, nến
                    thơm,...bởi độ an toàn và hiệu quả mang lại.
                  </p>
                </Grid>
              </Grid>
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/11-2021/5bfe9edf4296abc8f287.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    TOP 7 TINH DẦU SƯỞI ẤM KHÔNG GIAN TRONG NGÀY MÙA ĐÔNG
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Mùa đông ngày xưa gắn liền với những hình ảnh cổ điển là những chiếc áo len,
                    khăn choàng rộng thùng thình hay hơn là thể nữa là khung cảnh ấm áp cả gia đình
                    quay quần bên nhau cạnh lò sưởi đỏ rực. Ngày nay, với tốc độ phát triển nhanh
                    chóng, bạn khó mà tìm thấy những hình ảnh ấm cúng của ngày xưa thay vào đó là
                    máy sưởi điện, máy sưởi, quạt sưởi hay chăn điện,...
                  </p>
                </Grid>
              </Grid>
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/tramtra.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    9 tác dụng của tinh dầu Chanh cho sức khoẻ & sắc đẹp
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Tác dụng của tinh dầu chanh tươi là gì? Tinh dầu chanh tươi với hương thơm tươi
                    mát, thanh sạch. Mùi hương có thể thanh lọc bầu không khí, tăng tâm trạng và là
                    thành phần thường xuyên bắt gặp trong các loại nước hoa. Lợi ích của tinh dầu
                    chanh tươi vượt xa những gì bạn có thể nghĩ.
                  </p>
                </Grid>
              </Grid>
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/tinh-dau-chanh-01.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    5 Lợi Ích Khi Dùng Máy Xông Phun Sương
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Máy xông tinh dầu dần thay thế các thiết bị tỏa hương như đèn đốt, nến
                    thơm,...bởi độ an toàn và hiệu quả mang lại.
                  </p>
                </Grid>
              </Grid>
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/12-2021/2-SKCN%2012.12%20870x435-01-min.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    5 Lợi Ích Khi Dùng Máy Xông Phun Sương
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Máy xông tinh dầu dần thay thế các thiết bị tỏa hương như đèn đốt, nến
                    thơm,...bởi độ an toàn và hiệu quả mang lại.
                  </p>
                </Grid>
              </Grid>
              <Grid spacing={2} container className="sectionBlog__post">
                <Grid item xs={12} lg={4}>
                  <div>
                    <a className="sectionBlog__post--thumbnail" href="#">
                      <img
                        src="https://haeva.com.vn/wwwroot/resources/upload/img/news/6-2021/banner-8-1876x1247-01.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
                  <h3 className="sectionBlog__post--title">
                    TOP 7 TINH DẦU SƯỞI ẤM KHÔNG GIAN TRONG NGÀY MÙA ĐÔNG
                  </h3>
                  <p className="sectionBlog__post--desc">
                    Mùa đông ngày xưa gắn liền với những hình ảnh cổ điển là những chiếc áo len,
                    khăn choàng rộng thùng thình hay hơn là thể nữa là khung cảnh ấm áp cả gia đình
                    quay quần bên nhau cạnh lò sưởi đỏ rực. Ngày nay, với tốc độ phát triển nhanh
                    chóng, bạn khó mà tìm thấy những hình ảnh ấm cúng của ngày xưa thay vào đó là
                    máy sưởi điện, máy sưởi, quạt sưởi hay chăn điện,...
                  </p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} className="sectionBlog__newslatest">
              <Grid container>
                <Grid item xs={12} lg={4}>
                  1
                </Grid>
                <Grid item xs={12} lg={8}>
                  1
                </Grid>
              </Grid>
            </Grid>
            {/* </div> */}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ListPage;
