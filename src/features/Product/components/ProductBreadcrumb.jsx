import React from "react";
import PropTypes from "prop-types";
import { Container, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../pages/styles.scss";
ProductBreadcrumb.propTypes = {
  product: PropTypes.object,
};

function ProductBreadcrumb({ product = {} }) {
  return (
    <div className="sectionDetail__breadcrumb">
      <Container>
        <Stack spacing={2}>
          <ul className="sectionDetail__list">
            <li className="sectionDetail__list--item">
              <a href="/" className="sectionDetail__list--link">
                Trang chủ
              </a>
              <NavigateNextIcon sx={{ paddingLeft: "0px" }} size="large" color="inherit" />
            </li>
            <li className="sectionDetail__list--item">
              <a href="/" className="sectionDetail__list--link">
                {product.idCatalog.name}
              </a>
              <NavigateNextIcon sx={{ paddingLeft: "0px" }} size="large" color="inherit" />
            </li>
            <li className="sectionDetail__list--item">
              <a href="/" className="sectionDetail__list--link">
                {product.name}
              </a>
            </li>
          </ul>
        </Stack>
      </Container>
    </div>
  );
}

export default ProductBreadcrumb;
