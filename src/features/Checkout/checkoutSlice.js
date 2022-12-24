import orderApi from "../../api/orderApi";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const checkout = createAsyncThunk("checkout/create", async (payload) => {
  const data = await orderApi.create(payload);
  localStorage.setItem("order", JSON.stringify(data.data));
  return data.data;
});

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    current: JSON.parse(localStorage.getItem("order")) || {},
    checkout: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { actions, reducer } = checkoutSlice;
export const {} = actions; // named export
export default reducer; // default export
