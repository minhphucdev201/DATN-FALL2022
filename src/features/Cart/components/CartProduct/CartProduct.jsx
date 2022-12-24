import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import FormSetQuantity from "../FormSetQuantity/FormSetQuantity";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart, setQuantity } from "./../../cartSlice";
import { Box, Grid, Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { formatPrice } from "../../../../utils";

CartProduct.propTypes = {
  product: PropTypes.object,
  quantity: PropTypes.number,
};

function CartProduct({ product = {}, quantity = 1 }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const originalPrice = formatPrice(product.originalPrice);
  const salePrice = formatPrice(product.salePrice);
  const totalPrice = formatPrice(product.salePrice * quantity);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = ({ quantity }) => {
    const action = setQuantity({
      id: product._id,
      quantity,
    });
    dispatch(action);
    handleClose();
  };
  const handleDeleteItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };
  return (
    <Grid
      container
      spacing={2}
      className="cart__item"
      sx={{ paddingBottom: "24px", paddingTop: "24px" }}
    >
      <Grid item>
        <div className="cart__item--thumbnail">
          <img src={product.thumbnail[0].imageUrl} alt="" />
        </div>
      </Grid>
      <Grid item xs={12} md={9} sm={10} lg={9} className="cart__box">
        <div className="cart__item--info">
          <p className="cart__item--name">{product.name}</p>
          <DeleteIcon
            style={{ cursor: "pointer" }}
            onClick={handleClickOpen}
            color="success"
            sx={{ marginTop: "4px" }}
          />
          <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
            <DialogContent>
              <DialogContentText>Bạn có muốn bỏ 1 sản phẩm?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} variant="contained" color="success">
                Trở lại
              </Button>
              <Button onClick={() => handleDeleteItem(product._id)} color="primary">
                Có
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="cart__item--originalPrice">{originalPrice}</span>
          <span className="cart__item--price">{salePrice}</span>
          {/* <span className="cart__item--price">Thành tiền: {totalPrice}</span> */}
        </div>
        <div className="cart__item--quantity">
          <FormSetQuantity quantity={quantity} onSubmit={onSubmit} />
        </div>
      </Grid>
    </Grid>
  );
}

export default CartProduct;
