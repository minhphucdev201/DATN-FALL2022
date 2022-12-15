import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

Blog.propTypes = {
  blog: PropTypes.object,
};

function Blog({ blog }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/blogs/${blog._id}`);
  };
  return (
    <>
      <Grid item xs={12} lg={4} onClick={handleClick}>
        <div>
          <a className="sectionBlog__post--thumbnail" href="">
            <img src={blog.thumbnail} alt={blog.title} />
          </a>
        </div>
      </Grid>
      <Grid item xs={12} lg={8} sx={{ textAlign: "left" }}>
        <h3 onClick={handleClick} className="sectionBlog__post--title">
          {blog.title}
        </h3>
        <p className="sectionBlog__post--desc">{blog.description}</p>
      </Grid>
    </>
  );
}

export default Blog;
