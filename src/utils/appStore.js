import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
// reducer returns a new state object based on the action type and payload. It takes the current state and an action as arguments and returns the new state. The reducer is a pure function that should not mutate the state directly but instead return a new state object.

export default appStore;