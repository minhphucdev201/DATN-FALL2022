import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import "./styles.scss";
NewsPage.propTypes = {};

function NewsPage(props) {
  return (
    <div className="sectionNews">
      <Container>
        <div className="sectionNews__head">
          <h3 className="sectionNews__head--title">
            TIN TỨC &nbsp;
            <a href="#" className="sectionNews__head--link">
              HERBAL OIL
            </a>
          </h3>
        </div>
        <Grid container spacing={2} className="sectionNews__blog" pt={2}>
          <Grid item xs={12} md={4} sm={6} lg={3} className="">
            <div className="sectionNews__item">
              <div className="sectionNews__item--thumbnailUrl">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/tinh-dau-chanh-01.jpeg"
                  alt=""
                />
              </div>
              <div className="sectionNews__item--titleBlog">
                <a href=""> LỢI ÍCH TUYỆT VỜI TỪ COMBO TINH DẦU THIÊN NHIÊN</a>
              </div>
              <div className="sectionNews__item--descBlog">
                <p>
                  Khi kết hợp nhiều loại tinh dầu lại với nhau, những đặc tính của thảo dược có thể
                  cân bằng, bổ sung....
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="">
            <div className="sectionNews__item">
              <div className="sectionNews__item--thumbnailUrl">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/news/3-2022/27024930347542329346626393634689628883706040n.jpeg"
                  alt=""
                />
              </div>
              <div className="sectionNews__item--titleBlog">
                <a href=""> LỢI ÍCH TUYỆT VỜI TỪ COMBO TINH DẦU THIÊN NHIÊN</a>
              </div>
              <div className="sectionNews__item--descBlog">
                <p>
                  Khi kết hợp nhiều loại tinh dầu lại với nhau, những đặc tính của thảo dược có thể
                  cân bằng, bổ sung....
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="">
            <div className="sectionNews__item">
              <div className="sectionNews__item--thumbnailUrl">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/news/7-2021/may-xong-tinh-dau-02.jpeg"
                  alt=""
                />
              </div>
              <div className="sectionNews__item--titleBlog">
                <a href=""> LỢI ÍCH TUYỆT VỜI TỪ COMBO TINH DẦU THIÊN NHIÊN</a>
              </div>
              <div className="sectionNews__item--descBlog">
                <p>
                  Khi kết hợp nhiều loại tinh dầu lại với nhau, những đặc tính của thảo dược có thể
                  cân bằng, bổ sung....
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="">
            <div className="sectionNews__item">
              <div className="sectionNews__item--thumbnailUrl">
                <img
                  src="https://haeva.com.vn/wwwroot/resources/upload/img/news/12-2021/2-SKCN%2012.12%20870x435-01-min.jpg"
                  alt=""
                />
              </div>
              <div className="sectionNews__item--titleBlog">
                <a href=""> LỢI ÍCH TUYỆT VỜI TỪ COMBO TINH DẦU THIÊN NHIÊN</a>
              </div>
              <div className="sectionNews__item--descBlog">
                <p>
                  Khi kết hợp nhiều loại tinh dầu lại với nhau, những đặc tính của thảo dược có thể
                  cân bằng, bổ sung....
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NewsPage;
