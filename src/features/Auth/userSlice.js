import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "./../../api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  // call API to register
  const data = await userApi.register(payload);
  // save data to localstorage
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  // call API to register
  const data = await userApi.login(payload);
  // save data to localstorage
  localStorage.setItem("access_token", data.jwt);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
    settings: {},
  },
  reducers: {
    logout(state, action) {
      // clear local storage
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("order");
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
