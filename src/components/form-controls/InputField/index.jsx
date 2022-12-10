import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  // const { errors } = form;
  // const hasError = errors[name];

  //   const { control } = form;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field: { onChange }, fieldState: { invalid, error } }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          onChange={onChange}
          error={invalid}
          helperText={error?.message}
        />
      )}
    ></Controller>
  );
}

export default InputField;
