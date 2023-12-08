import { createSlice } from "@reduxjs/toolkit";

const thermostatSettings = createSlice({
  name: "thermostat",
  initialState: {
    thermostat: 20,
  },

  reducers: {
    increaseTemp: (state) => {
      //I want to increases the value of thermostat.
      state.thermostat += 2;
    },
    decreaseTemp: (state) => {
      //I want to increases the value of thermostat.
      state.thermostat -= 2;
    },
  },
});

export const { increaseTemp, decreaseTemp } = thermostatSettings.actions;
export default thermostatSettings.reducer;
