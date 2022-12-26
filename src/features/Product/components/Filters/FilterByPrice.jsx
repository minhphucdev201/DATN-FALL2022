import { Box, Button, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { React, useState } from "react";
import "../../pages/styles.scss";
import { PropTypes } from "prop-types";
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};
function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    "salePrice[$gte]": 0,
    "salePrice[$lte]": 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      "salePrice[$gte]": 0,
      "salePrice[$lte]": 0,
    });
  };
  return (
    <div className="main__filterPrice--range">
      <h5 className="main__filterPrice--titleblog">Chọn khoảng giá</h5>
      <Box className="main__filterPrice--input">
        <TextField
          name="salePrice[$gte]"
          className="main__filterPrice--txt"
          variant="outlined"
          size="small"
          value={values["salePrice[$gte]"]}
          onChange={handleChange}
        />
        <RemoveIcon />
        <TextField
          className="main__filterPrice--txt"
          variant="outlined"
          size="small"
          name="salePrice[$lte]"
          value={values["salePrice[$lte]"]}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="outlined"
        color="success"
        size="small"
        className="main__filterPrice--btn"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </div>
  );
}

export default FilterByPrice;
