import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import "./styles.scss";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core";
import "./styles.scss";
import {
  cartItemsCountSelector,
  cartItemsSelector,
  cartTotalSelector,
} from "../../../Cart/selector";
DeliveryInfo.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    // padding: theme.spacing(0, 2),
  },
}));
function DeliveryInfo(props) {
  const classes = useStyles();
  const totalPrices = useSelector(cartTotalSelector);
  const listProductCart = useSelector(cartItemsSelector);
  const customer = useSelector((state) => state.user.current);

  const history = useHistory();
  function handleClick(event) {
    history.push("/cart");
  }
  const breadcrumbs = [
    <Link
      sx={{ cursor: "pointer" }}
      underline="hover"
      key="1"
      color="inherit"
      onClick={handleClick}
    >
      Giỏ Hàng
    </Link>,

    <Typography key="2" color="text.primary">
      Thông Tin Giao Hàng
    </Typography>,
  ];
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Vui lòng nhập tên đầy đủ")
      .test("Nên nhập ít nhất 2 từ", "Vui lòng nhập ít nhất 2 từ", (value) => {
        return value.split(" ").length >= 2;
      }),
    email: yup
      .string()
      .required("Vui lòng nhập email của bạn!!!")
      .email("Địa chỉ email không hợp lệ"),
    phone: yup
      .string()
      .required("Vui lòng nhập số điện thoại của bạn!!!")
      .min(9, "Vui lòng nhập ít nhất 10 số")
      .max(10, "Số điện thoại không hợp lệ"),
    address: yup.string().required("Vui lòng nhập đỉa chỉ giao hàng"),
  });
  const form = useForm({
    defaultValues: {
      customerId: customer._id,
      fullName: "",
      email: "",
      phone: "",
      address: "",
      total: totalPrices,
      orderDetail: listProductCart.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
        price: item.product.salePrice * item.quantity,
      })),
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
    <Grid item xs={12} md={6} sm={4} lg={8}>
      <Typography sx={{ letterSpacing: "1.5px" }} component="h5" variant="h5">
        HERBAL OILD
      </Typography>
      <Breadcrumbs
        sx={{ margin: "20px 0" }}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>

      <Box>
        <Typography sx={{ letterSpacing: "0.2px" }} component="h5" variant="body1">
          Thông tin nhận giao hàng
        </Typography>
        <Box>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField
              name="customerId"
              size="small"
              width="550px"
              label="customer"
              form={form}
              hidden="none"
            />
            <br />
            <InputField
              name="email"
              size="small"
              width="550px"
              label="Email"
              placeholder="Nhập Địa chỉ Email"
              form={form}
            />
            <br />
            <InputField
              name="fullName"
              size="small"
              width="550px"
              label="Họ và tên"
              placeholder="Nhập họ tên đầy đủ"
              form={form}
            />
            <br />
            <InputField
              name="phone"
              size="small"
              width="550px"
              label="Số điện thoại"
              placeholder="Nhập số điện thoại của bạn"
              form={form}
            />
            <br />
            <InputField
              name="address"
              size="small"
              width="550px"
              label="Địa chỉ"
              placeholder="Nhập Địa chỉ giao hàng"
              form={form}
            />
            <br />
            <InputField
              name="reason"
              size="small"
              width="550px"
              label="Ghi chú"
              placeholder="Nhập ghi chú của bạn"
              form={form}
              rows={4}
            />
            <br />
            <InputField
              name="total"
              size="small"
              width="550px"
              label="total"
              placeholder=""
              form={form}
              hidden="none"
            />
            <br />
            <InputField
              name="orderDetail"
              size="small"
              width="550px"
              label="orderDetail"
              placeholder=""
              form={form}
              hidden="none"
            />
            <Box sx={{ textAlign: "right" }} spacing={2} px={12}>
              <Button
                disabled={isSubmitting}
                type="submit"
                sx={{ margin: "16px 0 16px 0px", textAlign: "right" }}
                color="success"
                variant="contained"
                size="large"
              >
                Hoàn tất đơn hàng
              </Button>
            </Box>
            {/* <Typography sx={{ letterSpacing: "0.2px" }} component="h5" variant="body1">
              Phương thức thanh toán
            </Typography> */}
          </form>
        </Box>
      </Box>
    </Grid>
  );
}

export default DeliveryInfo;
