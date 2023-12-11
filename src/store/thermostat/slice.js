import { createSlice } from "@reduxjs/toolkit";

const calculatePowerUnits = (temperature) => {
  if (temperature > 20) {
    return (temperature - 20) * 10;
  }
  return 0;
}; // this is the function to add 10 power units for every degree above 20

const thermostatSettings = createSlice({
  name: "thermostat",
  initialState: {
    thermostat: { temperature: 20, powerUnits: 0 },
  },

  reducers: {
    increaseTemp: (state) => {
      //I want to increases the value of thermostat:
      state.thermostat.temperature += 1;
      //I want to add 10 power units to every 1 degree above 20:
      state.thermostat.powerUnits = calculatePowerUnits(
        state.thermostat.temperature
      );
      // This logic does the following
      // 1)Access Temperature:Retrieve the current temperature from state.thermostat.temperature.
      // 2)Calculate Power Units: Use the calculatePowerUnits function to determine the power
      // units based on the temperature.
      // If temperature is above 20, calculate (temperature - 20) * 10.
      // If not, set power units to 0.
      // 3)Update State: Assign the calculated power units to state.thermostat.powerUnits.
    },
    decreaseTemp: (state) => {
      //I want to increases the value of thermostat.
      state.thermostat.temperature -= 1;
      state.thermostat.powerUnits = calculatePowerUnits(
        state.thermostat.temperature
      );
    },
  },
});

export const { increaseTemp, decreaseTemp } = thermostatSettings.actions;
export default thermostatSettings.reducer;
