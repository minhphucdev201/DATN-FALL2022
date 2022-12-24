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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
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
function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập email của bạn.")
      .email("Địa chỉ email không hợp lệ."),

    password: yup.string().required("Vui lòng nhập mật khẩu."),
  });
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
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
        Đăng Nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" placeholder="Nhập Địa chỉ Email" form={form} />
        <PasswordField name="password" label="Mật Khẩu" placeholder="Nhập Mật khẩu" form={form} />

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
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
