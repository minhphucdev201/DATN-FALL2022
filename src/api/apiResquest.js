import {
  createCommentFailed,
  createCommentStart,
  createCommentSuccess,
} from "../features/Product/productSlice";
import axiosClient from "./axiosClient";

export const createComment = async (accessToken, dispatch) => {
  try {
    const res = await axiosClient.post("/comment/create", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(createCommentSuccess(res.data));
  } catch (error) {
    dispatch(createCommentFailed);
  }
};
