import { ShoppingCart } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <p className="header__item--name">HERBAL OIL</p>
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
                  <PersonIcon color="" />
                </span>
              </div>
              <div className="header__cart">
                <span>
                  <ShoppingCart color="" />
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2} className="header__bottom" pt={2}>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link header__box--active">
                Trang chủ
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link">
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  disableElevation={true}
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  color="inherit"
                  size="large"
                >
                  Sản phẩm
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    Tinh Dầu Xá Xị
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    Tinh Dầu Thiên Nhiên
                  </MenuItem>
                </StyledMenu>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="center">
              <a href="#" className="header__box--link">
                Giảm giá
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={3} className="header__box">
            <Typography align="left">
              <a href="#" className="header__box--link">
                chính sách - hướng dẫn
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
