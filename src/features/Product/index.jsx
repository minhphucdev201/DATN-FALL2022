import React from "react";
import { Switch } from "react-router-dom";
import { Route, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
ProductFeature.propTypes = {};
ProductFeature.defaultProps = {};
function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </div>
  );
}
export default ProductFeature;
