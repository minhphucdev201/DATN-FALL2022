import React from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import "../pages/styles.scss";
BlogInfo.propTypes = {
  blog: PropTypes.object,
};

function BlogInfo({ blog = {} }) {
  return (
    <div>
      <Container>
        <div className="blogDetail__main">
          <div className="blogDetail__head">
            <h3 className="blogDetail__head--title">{blog.title}</h3>
            {/* <span className="blogDetail__head--date">25/09/2022</span> */}
          </div>
          <div className="blogDetail__content">
            <p>{blog.description}</p>
            <div className="blogDetail__content--item">
              <div className="blogDetail__content--thumbnail">
                <img src={blog.thumbnail} alt="" />
              </div>
            </div>
            <div className="blogDetail__content--item">
              <p>
                <strong>{blog.title}</strong>
              </p>
              <p>{blog.content}</p>
              <div className="blogDetail__content--thumbnail">
                <img src={blog.thumbnail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BlogInfo;
