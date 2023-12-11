import { createSlice } from "@reduxjs/toolkit";

const lamps = createSlice({
  name: "lamps",
  initialState: {
    lamps: [
      { id: 1, power: false, powerUnits: 0 },
      { id: 2, power: false, powerUnits: 0 },
      { id: 3, power: false, powerUnits: 0 },
      { id: 4, power: false, powerUnits: 0 },
    ],
  },
  // The names of these keys in initialState will be used in selector definitions
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const lampToToggle = state.lamps.find((lamp) => lamp.id === id);
      if (lampToToggle) {
        lampToToggle.power = !lampToToggle.power;
        lampToToggle.powerUnits = lampToToggle.power ? 25 : 0;
      }
      //state.lamps.powerUnits = state.lamps.power ? 25 : 0;
    }, // These are the actions you can dispatch in UI components. They will always have state and
    // action parameters. The value of the state parameter is supplied by Redux
  },
});

export const { toggle } = lamps.actions;
export default lamps.reducer;
