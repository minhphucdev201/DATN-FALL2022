import React from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter as Routes, Outlet } from "react-router-dom";
import {} from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import SideBar from "../../components/SideBar";
import BlogFeature from "../Blog";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProductFeature;
