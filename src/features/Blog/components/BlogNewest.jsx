import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

BlogNewest.propTypes = {
  dataNewest: PropTypes.object,
};

function BlogNewest({ dataNewest = {} }) {
  const history = useHistory();

  return (
    <>
      {dataNewest.map((blog) => (
        <Grid key={blog._id} spacing={1} container className="sectionBlog__item">
          <Grid item xs={12} lg={3}>
            <div>
              <a
                onClick={() => {
                  history.push(`/blogs/${blog._id}`);
                }}
                className="sectionBlog__newslatest--thumbnail"
                href=""
              >
                <img src={blog.thumbnail} alt="" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} lg={9}>
            <h3
              onClick={() => {
                history.push(`/blogs/${blog._id}`);
              }}
              className="sectionBlog__newslatest--title"
            >
              {blog.title}
            </h3>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default BlogNewest;
