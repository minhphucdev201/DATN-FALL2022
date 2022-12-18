import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { PropTypes } from "prop-types";
import InputField from "../../../components/form-controls/InputField";
ProductReviewsForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
  },
  card: {
    padding: theme.spacing(0, 2),
  },
  title: {
    color: "#2E7D32",
    textDecoration: "underline",
    width: "100%",
    paddingBottom: theme.spacing(1),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  avatar: {
    backgroundColor: theme.palette.info.light,
    paddingLeft: theme.spacing(0),
  },
  left: {
    width: "500px",
  },
  right: {
    flex: "1 1 0",
    paddingLeft: theme.spacing(2),
  },
}));
function ProductReviewsForm(props) {
  const classes = useStyles();
  const [value, setValue] = useState();
  const schema = yup.object().shape({
    // fullName: yup
    //   .string()
    //   .required("Vui lòng nhập tên đầy đủ")
    //   .test("Nên nhập ít nhất 2 từ", "Vui lòng nhập ít nhất 2 từ", (value) => {
    //     return value.split(" ").length >= 2;
    //   }),
    // email: yup.string().required("Vui lòng nhập Email của bạn").email("Email không hợp lệ"),

    content: yup.string().required("Vui lòng nhập nội dung đánh giá"),
  });
  const form = useForm({
    defaultValues: {
      //   fullName: "",
      //   email: "",
      content: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  return (
    <Paper elevation={0} className={classes.root}>
      <Box sx={{}} mb={4}>
        <Typography component="h4" className={classes.title}>
          ĐÁNH GIÁ SẢN PHẨM
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item className={classes.left}>
            <Card className={classes.card}>
              <CardHeader
                p={0}
                avatar={<Avatar src="/broken-image.jpg" />}
                title="Shrimp and Chorizo Paella"
              />
              <CardContent p={0}>
                <Rating name="read-only" value={3.5} precision={0.5} readOnly />

                <Typography variant="body2" color="textSecondary" component="p">
                  Sản phẩm tốt!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.right}>
            <Box mx={2}>
              <Typography component="h4" variant="h5">
                Thêm đánh giá
              </Typography>
            </Box>
            <Box>
              <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.root}>
                {/* <InputField
                  name="fullName"
                  size="small"
                  label="Họ và Tên"
                  placeholder="Nhập họ và tên "
                  form={form}
                />
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Nhập Địa chỉ Email"
                  form={form}
                /> */}

                {/* <Box mt={2}>
                  <Typography variant="h6">Đánh giá:</Typography>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box> */}

                <InputField
                  name="content"
                  label="Nội dung"
                  placeholder="Nhập nội dung đánh giá"
                  form={form}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  style={{ marginTop: "15px" }}
                >
                  Gửi đánh giá
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default ProductReviewsForm;
