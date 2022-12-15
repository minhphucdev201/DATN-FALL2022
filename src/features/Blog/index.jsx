import React from "react";
import { Switch } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import DetailPageBlog from "./pages/DetailPageBlog";
import ListPageBlog from "./pages/ListPageBlog";
// import { Outlet } from "react-router-dom";

BlogFeature.propTypes = {};

function BlogFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPageBlog} />
        <Route path={`${match.url}/:blogId`} exact component={DetailPageBlog} />
      </Switch>
    </div>
  );
}

export default BlogFeature;
