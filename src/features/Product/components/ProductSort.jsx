import { React, useState } from "react";
import PropTypes from "prop-types";
import "../pages/styles.scss";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {

  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <div className="main__sortcat">
      <Typography
        variant="subtitle1"
        className="main__sortcat--txt"
        sx={{ letterSpacing: "0.5px" }}
      >
        Xếp theo :
      </Typography>
      {/* Filter By Name product */}
      {/* <FormControl className="main__sortcat--btn" sx={{ marginLeft: "12px" }}>
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
      </FormControl> */}
      <FormControl className="main__sortcat--btn">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ pl: 4 }}
          value={currentSort}
          onChange={handleSortChange}
        >
          <FormControlLabel
            value="column=salePrice&type=asc"
            control={<Radio size="small" color="success" />}
            label="Giá thấp đến cao"
          />
          <FormControlLabel
            value="column=salePrice&type=desc"
            control={<Radio size="small" color="success" />}
            label="Giá cao xuống thấp"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default ProductSort;
