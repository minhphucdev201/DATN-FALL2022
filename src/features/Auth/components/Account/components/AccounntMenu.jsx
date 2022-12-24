import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { Link } from "@mui/material";
import { useRouteMatch, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

AccountMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "flex-start",

    padding: 0,
    listStyle: "none",
    "& > li": {
      padding: theme.spacing(1, 0),
      fontSize: "16px",
      textDecoration: "none",
    },

    "& > li > a": {
      color: "#2c3e50",
      fontWeight: "400",
    },
    "& > li > a.active": {
      color: "#2E7D32",
      textDecoration: "none",
      borderBottom: "none",
    },
  },
}));
function AccountMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const customer = useSelector((state) => state.user.current);
  return (
    <Grid item xs={12} lg={3}>
      <div className="account__left">
        <h5 className="account__left--title">TRANG TÀI KHOẢN</h5>
        <p className="account__left--fullname">
          Xin chào, &nbsp;
          <span>{customer.fullName}!!!</span>
        </p>
      </div>
      <Box component="ul" className={classes.root}>
        <li>
          <Link sx={{ textDecoration: "none" }} component={NavLink} to={url} exact>
            Thông tin tài khoản
          </Link>
        </li>
        <li>
          <Link sx={{ textDecoration: "none" }} component={NavLink} to={`${url}/orders`} exact>
            Đơn hàng của bạn
          </Link>
        </li>
        <li>
          <Link
            sx={{ textDecoration: "none" }}
            component={NavLink}
            to={`${url}/changepassword`}
            exact
          >
            Đổi mật khẩu
          </Link>
        </li>
        <li>
          <Link sx={{ textDecoration: "none" }} component={NavLink} to={`${url}/address`} exact>
            Địa chỉ
          </Link>
        </li>
      </Box>
    </Grid>
  );
}

export default AccountMenu;
