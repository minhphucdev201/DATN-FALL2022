import commentApi from "../../api/commentApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const comment = createAsyncThunk("comment/create", async (payload) => {
  // call API to register
  const data = await commentApi.create(payload);
  // save data to localstorage
  return data;
});
const productSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(comment.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { actions, reducer } = productSlice;
export const {} = actions; // named export
export default reducer; // default export
