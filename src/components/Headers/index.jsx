import { ShoppingCart } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";

import { alpha, styled } from "@mui/material/styles";

import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.scss";

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
export default function Header() {
  const activeLink = "active-menu";
  const normalLink = "";
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEls, setAnchorEls] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const opens = Boolean(anchorEls);
  const handleClicks = (event) => {
    setAnchorEls(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEls(null);
  };
  return (
    <div>
      <Container className="header">
        <Grid container spacing={2} className="header__top">
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__item">
            <Typography variant="h3">
              <p className="header__item--hotline">
                HOTLINE : <span>028 7308 8800</span>
              </p>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <Typography variant="h3">
              <Link to="/">
                <p className="header__item--name">HERBAL OIL</p>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3}>
            <div className="header__icon">
              <div className="header__search">
                <input className="header__search--txt" type="text" placeholder="Nhập để tìm kiếm" />
                <a href="#" className="header__search--btn">
                  <SearchIcon />
                </a>
              </div>
              <div className="header__user">
                <span>
                  <Link to="/register">
                    <PersonIcon color="success" />
                  </Link>
                </span>
              </div>
              <div className="header__cart">
                <span>
                  <Link to="/cart">
                    <ShoppingCart color="success"></ShoppingCart>
                  </Link>
                </span>
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
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: "#1c1c1c",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                SẢN PHẨM
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <NavLink to="/products/1">
                  <MenuItem
                    onClick={handleClose}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Tinh dầu thiên nhiên
                  </MenuItem>
                </NavLink>
                <Link to="/products/2">
                  <MenuItem
                    onClick={handleClose}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Tinh Dầu Xá Xị
                  </MenuItem>
                </Link>
                <Link to="/products">
                  <MenuItem
                    onClick={handleClose}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Tất cả sản phẩm
                  </MenuItem>
                </Link>
              </Menu>
              {/* </a> */}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center ">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "inactive")}>
                <a className="header__box--link">Giảm giá</a>
              </NavLink>
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
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
                  fontWeight: "400",
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
                <Link to="/blog/1">
                  <MenuItem
                    onClick={handleCloses}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Tin khuyến mãi
                  </MenuItem>
                </Link>
                <Link to="/blog/2" color="inherit">
                  <MenuItem
                    onClick={handleCloses}
                    sx={{ color: "#1c1c1c", fontSize: "16px", fontWeight: "400" }}
                  >
                    Mẹo sử dụng tinh dầu
                  </MenuItem>
                </Link>
                <Link to="/blog/">
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
    </div>
  );
}
