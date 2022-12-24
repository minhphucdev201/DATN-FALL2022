import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../../components/form-controls/InputField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Avatar, Button, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/core";
import PasswordField from "../../../../components/form-controls/PasswordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingTop: theme.spacing(3),
  },
  avatar: {
    margin: "0 auto",
    backgroundColor: "#546de5",
  },
  title: {
    textAlign: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  progress: {
    position: "absolute",
    top: "16px",
    left: 0,
    right: 0,
  },
}));
function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Vui lòng nhập tên đầy đủ")
      .test("Nên nhập ít nhất 2 từ", "Vui lòng nhập ít nhất 2 từ", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup.string().required("Vui lòng nhập email.").email("Địa chỉ email không hợp lệ."),

    password: yup
      .string()
      .required("Nhập mật khẩu của bạn")
      .min(6, "Vui lòng nhập ít nhất 6 kí tự."),
    retypePassword: yup
      .string()
      .required("Xác nhận mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && (
        <LinearProgress
          sx={{ position: "absolute", top: "10px", left: 0, right: 0 }}
          className={classes.progress}
        />
      )}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography sx={{ margin: "16px 0px" }} className={classes.title} component="h3" variant="h5">
        Đăng Ký
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và Tên" placeholder="Nhập họ và tên " form={form} />
        <InputField name="email" label="Email" placeholder="Nhập Địa chỉ Email" form={form} />
        <PasswordField name="password" label="Mật Khẩu" placeholder="Nhập Mật khẩu" form={form} />
        <PasswordField
          name="retypePassword"
          label="Nhập Lại Mật Khẩu "
          placeholder="Vui lòng xác nhận lại mật khẩu"
          form={form}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          sx={{ margin: "32px 0 16px 0px" }}
          fullWidth
          className={classes.submit}
          color="success"
          variant="contained"
          size="large"
        >
          Đăng Ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
