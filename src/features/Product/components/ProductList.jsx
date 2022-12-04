import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import "../pages/styles.scss";
import Product from "./Product";
ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: 10,
};
function ProductList({ data }) {
  return (
    <Grid container spacing={2}>
      {data.map((product) => (
        <Grid key={product.id} item xs={12} md={6} sm={6} lg={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
