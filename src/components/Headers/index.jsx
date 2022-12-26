import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";

import { alpha, styled } from "@mui/material/styles";

import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./styles.scss";
import Register from "../../features/Auth/components/Register";
import { makeStyles } from "@material-ui/core";
import Login from "../../features/Auth/components/Login";
import RegisterForm from "../../features/Auth/components/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";
import { cartItemsCountSelector } from "./../../features/Cart/selector";
import ShowMiniCart from "../../features/Cart/components/ShowMiniCart";
import { hideMiniCart } from "../../features/Cart/cartSlice";
import blogCatalogApi from "../../api/blogCatalogApi";

const StyledMenu = styled((props) => (
  <Menu
    elevation={5}
    anchorOrigin={{
      horizontal: "right",
      vertical: "bottom",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
    z
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 100,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
const useStyles = makeStyles((theme) => ({
  closeButton: {},
  miniCart: {
    position: "absolute",
    top: theme.spacing(6),
    right: theme.spacing(0),
  },
}));
export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const showMiniCart = useSelector((state) => state.cart.showMiniCart);
  const isLoggedIn = !!loggedInUser._id;
  const [mode, setMode] = useState(MODE.LOGIN);
  const [catalogBlog, setCatalogBlog] = useState([]);
  const activeLink = "active-menu";
  const normalLink = "";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEls, setAnchorEls] = React.useState(null);
  const [anchorElement, setAnchorElement] = useState(null);
  // const open = Boolean(anchorEl);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  const handleUserClick = (e) => {
    setAnchorElement(e.currentTarget);
  };

  const opens = Boolean(anchorEls);
  const handleClicks = (event) => {
    setAnchorEls(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEls(null);
  };
  const handleLogoutClick = () => {
    const action = logout();
    dispatch(action);
    setAnchorElement(null);
  };
  const handleCartClick = () => {
    history.push("/cart");
  };
  const handleCartClose = () => {
    dispatch(hideMiniCart());
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await blogCatalogApi.getAll();
        setCatalogBlog(data);
      } catch (error) {
        console.log("Failed to fetch catalog blog:", error);
      }
    })();
  }, []);
  return (
    <div>
      <Container className="header">
        <Grid container spacing={2} className="header__top">
          <Grid item xs={12} md={4} sm={6} lg={4} className="header__item">
            <Typography variant="h3">
              <p className="header__item--hotline">
                HOTLINE : <span>028 7308 8800</span>
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4} className="header__item">
            <div className="header__item--logo">
              <img
                alt="logo-tan-store"
                src="https://res.cloudinary.com/phucdev/image/upload/v1672063387/f6c254926abcb2e2ebad_p0uqe1.jpg"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4}>
            <div className="header__icon">
              <div className="header__user">
                {!isLoggedIn && (
                  <a className="header__user--btn" onClick={handleClickOpen}>
                    Đăng Nhập
                  </a>
                )}
                {isLoggedIn && (
                  <IconButton color="success" onClick={handleUserClick}>
                    <AccountCircle />
                    <Button sx={{ textTransform: "capitalize" }} color="success">
                      {loggedInUser.fullName}{" "}
                    </Button>
                  </IconButton>
                )}
              </div>
              <div className="header__cart" style={{ position: "relative" }}>
                <span>
                  <IconButton size="small" color="inherit" onClick={handleCartClick}>
                    <Badge badgeContent={cartItemsCount} color="success">
                      <ShoppingCart color="success"></ShoppingCart>
                    </Badge>
                  </IconButton>
                </span>
                <Box className={classes.miniCart}>
                  {showMiniCart && <ShowMiniCart onClose={handleCartClose} />}
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="header__bottom" pt={2}>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <a className="header__box--link">Trang chủ</a>
              </NavLink>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <a className="header__box--link">SẢN PHẨM</a>
              </NavLink>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center ">
              <NavLink
                to="/chinh-sach-huong-dan"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <a className="header__box--link">Chính sách - Hướng dẫn</a>
              </NavLink>
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sm={6}
            lg={3}
            className="header__box"
            sx={{ textAlign: "center" }}
          >
            <Typography>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClicks}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: "#1c1c1c",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                TIN TỨC
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEls}
                open={opens}
                onClose={handleCloses}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {catalogBlog.map((catalog) => (
                  <Link to={`/blogs?idCatalogBlog=${catalog._id}`}>
                    <MenuItem
                      onClick={handleCloses}
                      sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                    >
                      {catalog.name}
                    </MenuItem>
                  </Link>
                ))}
                <Link to="/blogs">
                  <MenuItem
                    onClick={handleCloses}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Tất cả
                  </MenuItem>
                </Link>
              </Menu>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <IconButton
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 1,
          }}
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Bạn đã có tài khoản? Đăng nhập
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Bạn chưa có tài khoản? Đăng ký
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Menu
        // id="demo-positioned-menu"
        // aria-labelledby="demo-positioned-button"
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            history.push("/account");
            setAnchorElement(null);
          }}
        >
          Tài khoản của tôi
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>Đăng xuất</MenuItem>
      </Menu>
    </div>
  );
}
