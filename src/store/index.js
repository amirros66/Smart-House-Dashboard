//redux store

import { configureStore } from "@reduxjs/toolkit";
import lampsReducer from "./lamps/slice";

const store = configureStore({
  reducer: {
    lamps: lampsReducer,
  },
});

export default store;
