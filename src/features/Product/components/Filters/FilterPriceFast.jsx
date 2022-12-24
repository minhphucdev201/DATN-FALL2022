import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { React, useState } from "react";
import "../../pages/styles.scss";
import { PropTypes } from "prop-types";
FilterPriceFast.propTypes = {
  onChange: PropTypes.func,
};

function FilterPriceFast({ onChange }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!onChange) return;
    onChange({ [name]: value });
    if (!e.target.checked) {
      setChecked(false);
      onChange({ [name]: value });
      // value = "0";
    }
  };
  return (
    <div className="main__filterPrice">
      <div>
        <h3 className="main__filterPrice--title">Giá sản phẩm</h3>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
        >
          {/* <ul className="main__filterPrice--list"> */}
          {[
            { name: "salePrice[$gte]", value: "200000", label: "Giá trên 200.000đ" },
            {
              name: "salePrice[$gte]",
              value: "1000000",
              label: "Giá trên 1.000.000đ",
            },
          ].map((service) => (
            <FormControlLabel
              control={
                <Radio
                  name={service.name}
                  onChange={handleChange}
                  color="success"
                  value={service.value}
                />
              }
              label={service.label}
            />
          ))}
        </RadioGroup>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default FilterPriceFast;
