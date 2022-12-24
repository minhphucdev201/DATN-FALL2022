import React from "react";
import PropTypes from "prop-types";
import QuantityField from "../../../../components/form-controls/QuantityField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

FormSetQuantity.propTypes = {
  onSubmit: PropTypes.func,
  quantity: PropTypes.number,
};

const schema = yup.object().shape({
  quantity: yup
    .number()
    .min(1, "Vui lòng nhập ít nhất là 1")
    .required("vui lòng nhập số lượng")
    .typeError("Vui lòng nhập 1 số"),
});

function FormSetQuantity({ onSubmit = null, quantity = 1 }) {
  const form = useForm({
    defaultValues: {
      quantity: quantity,
    },
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const callSubmit = (quantity) => {
    if (!onSubmit) return;
    onSubmit(quantity);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <QuantityField name="quantity" form={form} submitCall={form.handleSubmit(callSubmit)} />
    </form>
  );
}

export default FormSetQuantity;
