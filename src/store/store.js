import { configureStore } from "@reduxjs/toolkit";
import { toDoListReducer } from "../redux/reducers";
export const store = configureStore({
  reducer: {
    toDoListReducer,
  },
});
