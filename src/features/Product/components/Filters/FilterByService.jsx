import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { React, useState } from "react";
import "../../pages/styles.scss";
import { PropTypes } from "prop-types";
FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};
function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;

    onChange({ [name]: checked });
  };

  return (
    <Box>
      <div className="main__filterPrice">
        <div>
          <h3 className="main__filterPrice--title">Dịch vụ</h3>

          <ul className="main__filterPrice--list">
            {[
              { value: "isPromotion", label: "Đang giảm giá" },
              { value: "isFreeShip", label: "Miễn phí vận chuyển" },
            ].map((service) => (
              <li key={service.value} className="main__filterPrice--item">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(filters[service.value])}
                      name={service.value}
                      onChange={handleChange}
                      color="success"
                    />
                  }
                  label={service.label}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}

export default FilterByService;
