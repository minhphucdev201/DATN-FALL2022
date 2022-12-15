import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      // toast error
      unwrapResult(resultAction);
      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      // hien thi thong bao
      enqueueSnackbar("Đăng ký tài khoản thành công!!! 🎉", { variant: "success" });
    } catch (error) {
      console.log("Failed to register:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
