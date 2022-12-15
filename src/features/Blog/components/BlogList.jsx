import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Pagination } from "@mui/material";
import Blog from "./Blog";
import { Key } from "@mui/icons-material";

BlogList.propTypes = {
  data: PropTypes.array,
};

function BlogList({ data = [] }) {
  return (
    <Box>
      {data.map((blog) => (
        <Grid Key={blog._id} spacing={2} container className="sectionBlog__post">
          <Blog blog={blog} />
        </Grid>
      ))}
    </Box>
  );
}

export default BlogList;
