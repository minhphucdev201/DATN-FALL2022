import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartReducer from "../features/Cart/cartSlice";
import userReducer from "../features/Auth/userSlice";
import commentReducer from "../features/Product/productSlice";
import checkoutReducer from "../features/Checkout/checkoutSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart"], // luu reducer cart vao redux persist
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  comment: commentReducer,
  checkout: checkoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export let persistor = persistStore(store);

export default store;
