import React from "react";
import PropTypes from "prop-types";
import "../pages/styles.scss";
import DOMPurify from "dompurify";
import { Paper } from "@mui/material";
ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
