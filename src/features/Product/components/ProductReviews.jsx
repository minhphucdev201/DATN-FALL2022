import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { PropTypes } from "prop-types";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartItemsSelector } from "../../Cart/selector";
import { comment } from "../productSlice";
import ProductReviewsForm from "./ProductReviewsForm";

import "./styles.scss";
ProductReviews.propTypes = {
  product: PropTypes.object,
};

function ProductReviews({ product = {} }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);

  const customer = useSelector((state) => state.user.current);
  const listProductCart = useSelector(cartItemsSelector);
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try {
      if (customer._id && product._id) {
        const action = comment(values);
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
        enqueueSnackbar("Đánh giá sản phẩm thành công!!! 🎉", { variant: "success" });
      } else {
        history.push(`/products/${product._id}/reviews`);
        enqueueSnackbar("Bạn cần phải đăng nhập để đánh giá!!!", { variant: "error" });
      }
    } catch (error) {
      console.log("Failed to Comment:", error);
    }
  };
  return (
    <div>
      <ProductReviewsForm product={product} onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductReviews;
