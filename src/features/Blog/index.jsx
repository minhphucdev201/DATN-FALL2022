import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import ListPage from "./pages/ListPage";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  return (
    <div>
      <ListPage />
    </div>
  );
}

export default BlogFeature;
