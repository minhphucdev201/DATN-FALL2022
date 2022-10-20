import React from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter as Routes } from "react-router-dom";
import {} from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import SideBar from "../../components/SideBar";
import BlogFeature from "../Blog";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  // const match = useMatch();

  return (
    <div>
      <ListPage />
      {/* <DetailPage/> */}
    </div>
  );
}

export default ProductFeature;
