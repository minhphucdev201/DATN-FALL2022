import { Add, Category } from "@mui/icons-material";
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
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/FilterViewer";
ListPage.propTypes = {};

function ListPage(props) {
  const [open, setOpen] = useState(true);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    page: 1,
    limit: 9,
    column: "salePrice",
    type: "ASC",
  });
  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        console.log(data, pagination);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed fetch to data:", error);
      }
      setLoading(false);
    })();
  }, [filters]);
  const handlePageChange = (e, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      page: page,
    }));
  };

  const handleSortChange = (newValues) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      column: "salePrice",
      type: "DESC",
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };
  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };
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
            <ProductFilters filters={filters} onChange={handleFiltersChange} />
          </Grid>
          <Grid item xs={8} className="main__right">
            <div className="main__products">
              <ProductSort currentSort="column=salePrice&type=asc" onChange={handleSortChange} />
              <FilterViewer filters={filters} onChange={setNewFilters} />
              <div className="main__productsview">
                <Grid container spacing={2}>
                  {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                </Grid>
              </div>
              <div className="main__products--pag">
                <Box>
                  <Pagination
                    padding="20px"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                    color="success"
                    size="medium"
                  ></Pagination>
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
