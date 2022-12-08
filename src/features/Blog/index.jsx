import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import ListPageBlog from "./pages/ListPageBlog";
import DetailPageBlog from "./pages/DetailPageBlog";
import { Route, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
import DetailPage from "./pages/DetailPageBlog";
// import { Outlet } from "react-router-dom";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPageBlog} />
        <Route path={`${match.url}/:productId`} exact component={DetailPage} />
      </Switch>
    </div>
  );
}

export default BlogFeature;
