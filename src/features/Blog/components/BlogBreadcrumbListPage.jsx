import React from "react";
import PropTypes from "prop-types";
import { Container, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../pages/styles.scss";
BlogBreadcrumbListPage.propTypes = {
  blog: PropTypes.object,
};

function BlogBreadcrumbListPage({ blog = {} }) {
  return (
    <div className="sectionDetail__breadcrumb">
      <Container>
        <Stack spacing={2}>
          <ul className="sectionDetail__list">
            <li className="sectionDetail__list--item">
              <a href="/blogs" className="sectionDetail__list--link">
                Trang chủ
              </a>
              <NavigateNextIcon sx={{ paddingLeft: "0px" }} size="large" color="inherit" />
            </li>
            <li className="sectionDetail__list--item">
              <a href="/" className="sectionDetail__list--link">
                Tin Tức
              </a>
              <NavigateNextIcon sx={{ paddingLeft: "0px" }} size="large" color="inherit" />
            </li>
            <li className="sectionDetail__list--item">
              <a href="/" className="sectionDetail__list--link"></a>
            </li>
          </ul>
        </Stack>
      </Container>
    </div>
  );
}

export default BlogBreadcrumbListPage;
