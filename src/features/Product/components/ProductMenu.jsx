import { makeStyles } from "@material-ui/core";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignContent: "center",
    padding: theme.spacing(8, 0, 0, 0),
    listStyle: "none",
    "& > li": {
      padding: theme.spacing(4, 4),
      fontSize: "20px",
      textDecoration: "none",
    },
    "& > li > a": {
      color: "#2c3e50",
      fontWeight: "400",
    },
    "& > li > a.active": {
      color: "#2E7D32",
      //   textDecoration: "underline",
    },
  },
}));
function ProductMenu(props) {
  const { url } = useRouteMatch();
  const classes = useStyles();
  return (
    <Box component="ul" className={classes.root}>
      <li component="li">
        <Link sx={{ textDecoration: "none" }} component={NavLink} to={url} exact>
          Mô Tả Chi Tiết
        </Link>
      </li>
      <li component="li">
        <Link sx={{ textDecoration: "none" }} component={NavLink} to={`${url}/additional`} exact>
          Thông Tin Thêm
        </Link>
      </li>
      <li component="li">
        <Link sx={{ textDecoration: "none" }} component={NavLink} to={`${url}/reviews`} exact>
          Đánh Giá
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
