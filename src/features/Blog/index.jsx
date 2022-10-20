import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  return (
    <div>
      {/* <ListPage /> */}
      <DetailPage />
    </div>
  );
}

export default BlogFeature;
