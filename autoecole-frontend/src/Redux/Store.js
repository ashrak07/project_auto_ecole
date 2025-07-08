import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../Redux/clientSlice";
import courseReducer from "./courseSlice";

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    courses: courseReducer,
  },
});
