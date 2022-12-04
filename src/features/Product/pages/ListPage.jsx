import { Add } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductSkeletonList from "../components/ProductSkeletonList";

import productApi from "./../../../api/productApi";
import "./styles.scss";
import ProductList from "./../components/ProductList";
ListPage.propTypes = {};

function ListPage(props) {
  const [open, setOpen] = useState(true);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll(filters);
        setProductList(data);
        console.log({ data });
      } catch (error) {
        console.log("Failed fetch to data:", error);
      }
      setLoading(false);
    })();
  }, [filters]);
  return (
    <div>
      <div className="sectionBanner">
        <img
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
        <h1>Tất cả sản phẩm</h1>
      </div>
      <Container className="main">
        <Grid container spacing={2}>
          <Grid item xs={4} className="main__left">
            <div className="main__sidebar">
              <Box>
                <div className="main__viewcat">
                  <h2 className="main__viewcat--title">Danh Mục</h2>
                  <h3 className="main__viewcat--title">Trang chủ</h3>
                  <List sx={{ width: "90%" }} className="main__viewcat--list">
                    <ListItemButton onClick={handleClick} autoFocus={true} disableGutters>
                      <ListItemText primary="Sản phẩm" className="main__viewcat--txt" />
                      {open ? <RemoveIcon /> : <Add />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Tất cả sản phẩm" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Tình dầu thơm phòng" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Chất khử mùi, làm thơm" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Trang trí nhà cửa" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Phụ kiện bên trong ô tô" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </List>

                  <h3 className="main__viewcat--title">Giảm giá</h3>
                </div>
              </Box>
              <Box>
                <div className="main__filterPrice">
                  <div>
                    <h3 className="main__filterPrice--title">Giá sản phẩm</h3>
                    <ul className="main__filterPrice--list">
                      {[
                        { value: "", label: "Giá dưới 100.000đ" },
                        { value: "", label: "100.000đ - 200.000đ" },
                        { value: "", label: "200.000đ - 300.000đ" },
                        { value: "", label: "300.000đ - 500.000đ" },
                        { value: "", label: "Giá trên 1.000.000đ" },
                      ].map((service) => (
                        <li key={service.value} className="main__filterPrice--item">
                          <FormControlLabel
                            control={<Checkbox color="success" />}
                            label={service.label}
                          />
                        </li>
                      ))}
                    </ul>

                    <div className="main__filterPrice--range">
                      <h5 className="main__filterPrice--titleblog">Chọn khoảng giá</h5>
                      <Box className="main__filterPrice--input">
                        <TextField
                          // name="salePrice_gte"
                          // value="0"
                          // onChange={handleChange}
                          className="main__filterPrice--txt"
                          variant="outlined"
                          size="small"
                        />
                        <RemoveIcon />
                        <TextField
                          className="main__filterPrice--txt"
                          variant="outlined"
                          size="small"
                          // name="salePrice_lte"
                          // value="0"
                          // onChange={handleChange}
                        />
                      </Box>
                      <Button
                        variant="outlined"
                        color="success"
                        size="small"
                        className="main__filterPrice--btn"
                      >
                        Áp dụng
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
              <Box>
                <div className="main__filterPrice">
                  <div>
                    <h3 className="main__filterPrice--title">Dịch vụ</h3>
                    <ul className="main__filterPrice--list">
                      {[
                        { value: "", label: "Có khuyến mãi" },
                        { value: "", label: "Free Ship" },
                      ].map((service) => (
                        <li key={service.value} className="main__filterPrice--item">
                          <FormControlLabel
                            control={<Checkbox color="success" />}
                            label={service.label}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={8} className="main__right">
            <div className="main__products">
              <div className="main__sortcat">
                <Typography
                  variant="subtitle1"
                  className="main__sortcat--txt"
                  sx={{ letterSpacing: "0.5px" }}
                >
                  Xếp theo :
                </Typography>
                <FormControl className="main__sortcat--btn" sx={{ marginLeft: "12px" }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio size="small" color="success" />}
                      label="Tên A-Z"
                      checked
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio size="small" color="success" />}
                      label="Tên Z-A"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl className="main__sortcat--btn">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{ pl: 4 }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio size="small" color="success" />}
                      label="Giá thấp đến cao"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio size="small" color="success" />}
                      label="Giá cao xuống thấp"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="main__productsview">
                <Grid container spacing={2}>
                  {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                </Grid>
              </div>
              <div className="main__products--pag">
                <Box>
                  <Pagination padding="20px" count={10} color="success" size="medium"></Pagination>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ListPage;
