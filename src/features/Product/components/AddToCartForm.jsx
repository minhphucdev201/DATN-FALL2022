import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "@mui/material";
import InputField from "../../../components/form-controls/InputField";
import QuantityField from "./../../../components/form-controls/QuantityField/index";
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup.number().min(1, "Vui lòng nhập 1 số").required("Vui lòng nhập số lượng"),
  });
  // create object form
  const form = useForm({
    defaultValues: {
      quantity: "1",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // console.log('Todo Form: ', values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Button type="submit" variant="contained" color="primary" fullWidth size="large">
        Mua Hàng
      </Button>
    </form>
  );
}

export default AddToCartForm;
