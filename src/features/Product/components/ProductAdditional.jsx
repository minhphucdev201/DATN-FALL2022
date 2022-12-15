import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { Paper } from "@mui/material";
ProductAdditional.propTypes = {
  product: PropTypes.object,
};

function ProductAdditional({ product = {} }) {
  const safeShortDescription = DOMPurify.sanitize(product.shortDescription);
  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      <div dangerouslySetInnerHTML={{ __html: safeShortDescription }} />
    </Paper>
  );
}

export default ProductAdditional;
