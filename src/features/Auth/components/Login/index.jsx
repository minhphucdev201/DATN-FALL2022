import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import LoginForm from "./../LoginForm/index";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      // toast error
      unwrapResult(resultAction);
      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      // hien thi thong bao
      enqueueSnackbar("Đăng nhập thành công!!! 🎉", { variant: "success" });
    } catch (error) {
      console.log("Failed to login:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <div style={{ width: "350px" }}>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
