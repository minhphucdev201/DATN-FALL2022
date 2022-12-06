import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import "../pages/styles.scss";
import Product from "./Product";
ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};
function ProductList({ data }) {
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid key={product._id} item xs={12} md={6} sm={6} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
