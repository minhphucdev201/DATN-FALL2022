import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  hidden: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { hidden, form, name, label, disabled } = props;
  // const { errors } = form;
  // const hasError = errors[name];

  //   const { control } = form;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
        <TextField
          style={{ display: hidden }}
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          onChange={onChange}
          error={invalid}
          helperText={error?.message}
          value={value}
        />
      )}
    ></Controller>
  );
}

export default InputField;
