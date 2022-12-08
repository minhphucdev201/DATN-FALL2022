import { Box, Container, Grid, Pagination } from "@mui/material";
import { React, useEffect, useState } from "react";
import ProductSkeletonList from "../components/ProductSkeletonList";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import FilterViewer from "../components/FilterViewer";
import ProductFilters from "../components/ProductFilters";
import ProductSort from "../components/ProductSort";
import productApi from "./../../../api/productApi";
import ProductList from "./../components/ProductList";
import { useMemo } from "react";
import "./styles.scss";
ListPage.propTypes = {};

function ListPage(props) {
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      column: params.column || "salePrice",
      type: params.type || "ASC",
      page: Number.parseInt(params.page) || 1,
      limit: Number.parseInt(params.limit) || 9,
      isPromotion: params.isPromotion === "true",
      isFreeShip: params.isFreeShip === "true",
    };
  }, [location.search]);
  console.log("==>", location);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  // filters default
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   column: queryParams.column || "salePrice",
  //   type: queryParams.type || "ASC",
  //   page: Number.parseInt(queryParams.page) || 1,
  //   limit: Number.parseInt(queryParams.limit) || 9,
  // }));
  // useEffect(() => {
  //   history.push({
  //     // lay pathname hien tai
  //     pathname: history.location.pathname,
  //     // update filter len tren url
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  // lay data product
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        console.log(data, pagination);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed fetch to data:", error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  // xu li page (pagination)
  const handlePageChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   page: page,
    // }));
    const filters = {
      ...queryParams,
      page: page,
    };
    history.push({
      // lay pathname hien tai
      pathname: history.location.pathname,
      // update filter len tren url
      search: queryString.stringify(filters),
    });
  };
  // sap xep theo gia
  const handleSortChange = (newValues) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   column: "salePrice",
    //   type: "DESC",
    // }));

    const filters = {
      ...queryParams,
      column: "salePrice",
      type: "DESC",
    };
    history.push({
      // lay pathname hien tai
      pathname: history.location.pathname,
      // update filter len tren url
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFilters) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      // lay pathname hien tai
      pathname: history.location.pathname,
      // update filter len tren url
      search: queryString.stringify(filters),
    });
  };
  const setNewFilters = (newFilters) => {
    // setFilters(newFilters);
    history.push({
      // lay pathname hien tai
      pathname: history.location.pathname,
      // update filter len tren url
      search: queryString.stringify(newFilters),
    });
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
            <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
          </Grid>
          <Grid item xs={8} className="main__right">
            <div className="main__products">
              <ProductSort currentSort="column=salePrice&type=asc" onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={setNewFilters} />
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
