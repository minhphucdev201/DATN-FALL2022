import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FilterByCatalog from "./Filters/FilterByCatalog";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterPriceFast from "./Filters/FilterPriceFast";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCatalogChange = (category) => {
    if (!onChange) return;
    const newFilters = {
      ...filters,
      idCatalog: category._id,
    };
    onChange(newFilters);
  };
  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  const handlePriceFastChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCatalog filters={filters} onChange={handleCatalogChange} />
      {/* <FilterPriceFast filters={filters} onChange={handlePriceFastChange} /> */}
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
