import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Container, Grid } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

// Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { productImages } from "../../../assets/index";
import ProductImagesSlider from "../../../components/product-images-slider";
import "./styles.scss";
// import required modules
DetailPage.propTypes = {};

function DetailPage(props) {
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
              <ProductImagesSlider images={productImages} />
            </Grid>
            <Grid item xs={12} md={4} sm={6} lg={6} className="productDetail__details">
              <div className="productDetail__details">1</div>
            </Grid>
          </Grid>

          <div className="productDetail__desc"></div>
          <div className="productDetail__rating"></div>
          <div className="productDetail__related"></div>
        </div>
      </Container>
    </div>
  );
}

export default DetailPage;
