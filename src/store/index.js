//redux store

import { configureStore } from "@reduxjs/toolkit";
import lampsReducer from "./lamps/slice";
import radioReducer from "./radio/slice";
import thermostatReducer from "./thermostat/slice";

const store = configureStore({
  reducer: {
    lamps: lampsReducer,
    radioSettings: radioReducer,
    thermostatSettings: thermostatReducer,
  },
});

export default store;
