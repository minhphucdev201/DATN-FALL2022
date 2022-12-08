import React from "react";
// import { Outlet } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
ProductFeature.propTypes = {};
ProductFeature.defaultProps = {};
function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      {/* <Outlet /> */}
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
