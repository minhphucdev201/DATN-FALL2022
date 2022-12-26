import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles } from "@material-ui/core";
import QuantityField from "../../../components/form-controls/QuantityField";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Box } from "@mui/material";
import "./styles.scss";
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "30px",
  },
  main: {
    marginTop: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #2e7d32",
    padding: "6px 8px",
    backgroundColor: "#f5f5f5f5",
    maxWidth: "216px",
    maxHeight: "46px",
    borderRadius: "2px",
  },
}));
function AddToCartForm({ onSubmit = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Vui lòng nhập ít nhất là 1")
      .required("vui lòng nhập số lượng")
      .typeError("Vui lòng nhập 1 số"),
  });
  // create object form
  const form = useForm({
    defaultValues: {
      quantity: 1,
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
    <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.root}>
      <QuantityField name="quantity" label="Quantity" form={form} />
      <Box className={classes.main}>
        <AddShoppingCartIcon color="success" />
        <button type="submit" className="btnCart" color="success">
          Thêm Vào Giỏ Hàng
        </button>
      </Box>
    </form>
  );
}

export default AddToCartForm;
