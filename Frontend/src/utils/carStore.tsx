import { configureStore } from "@reduxjs/toolkit";

import carReducer from "../utils/reduxSlice/cars.slice";
import userSearchReducer from "../utils/reduxSlice/userSearch.slice";

const carStore = configureStore({
  reducer: {
    car: carReducer,
    userSearch: userSearchReducer,
  },
});

export default carStore;

// Define RootState type
export type RootState = ReturnType<typeof carStore.getState>;
export type AppDispatch = typeof carStore.dispatch;
