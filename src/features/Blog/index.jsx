import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import ListPageBlog from "./pages/ListPageBlog";
import DetailPageBlog from "./pages/DetailPageBlog";
import { Outlet } from "react-router-dom";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  return (
    <div>
      {/* <ListPage /> */}
      {/* <DetailPage /> */}
      <Outlet />
    </div>
  );
}

export default BlogFeature;
