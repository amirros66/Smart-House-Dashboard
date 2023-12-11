import { createSlice } from "@reduxjs/toolkit";

// const calculatePowerUnits = (temperature) => {
//   if (temperature > 20) {
//     return (temperature - 20) * 10;
//   }
//   return 0;
// };

const thermostatSettings = createSlice({
  name: "thermostat",
  initialState: {
    thermostat: 20,
    // powerUnits: 0,
  },

  reducers: {
    increaseTemp: (state) => {
      //I want to increases the value of thermostat.
      state.thermostat += 1;
      // state.powerUnits = calculatePowerUnits(state.thermostat);
    },
    decreaseTemp: (state) => {
      //I want to increases the value of thermostat.
      state.thermostat -= 1;
      // state.powerUnits = calculatePowerUnits(state.thermostat);
    },
  },
});

export const { increaseTemp, decreaseTemp } = thermostatSettings.actions;
export default thermostatSettings.reducer;
