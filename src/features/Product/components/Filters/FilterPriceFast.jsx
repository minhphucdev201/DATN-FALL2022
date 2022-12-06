import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { React, useState } from "react";
import "../../pages/styles.scss";
import { PropTypes } from "prop-types";
FilterPriceFast.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterPriceFast({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, value } = e.target;

    onChange({ [name]: value });
  };
  return (
    <div className="main__filterPrice">
      <div>
        <h3 className="main__filterPrice--title">Giá sản phẩm</h3>
        <ul className="main__filterPrice--list">
          {[
            { name: "salePrice[$gte]", value: "50000", label: "Giá trên 50.000đ" },
            { name: "salePrice[$gte]", value: "1000000", label: "Giá trên 1.000.000đ" },
          ].map((service) => (
            <li key={service.value} className="main__filterPrice--item">
              <FormControlLabel
                control={
                  <Checkbox
                    name={service.name}
                    onChange={handleChange}
                    color="success"
                    value={service.value}
                  />
                }
                label={service.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterPriceFast;
