import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Skeleton } from "@mui/material";
ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 9,
};
function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Box padding={1}>
              <Skeleton variant="rect" width={242} height={242} />
              <Skeleton xs={12} md={6} lg={4} width="100%" />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
