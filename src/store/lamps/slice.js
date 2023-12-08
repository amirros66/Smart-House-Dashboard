import { createSlice } from "@reduxjs/toolkit";

const lamps = createSlice({
  name: "lamps",
  initialState: {
    lamps: [
      { id: 1, power: false },
      { id: 2, power: false },
      { id: 3, power: false },
      { id: 4, power: false },
    ],
  },
  // The names of these keys in initialState will be used in selector definitions
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const lampToToggle = state.lamps.find((lamp) => lamp.id === id);
      if (lampToToggle) {
        lampToToggle.power = !lampToToggle.power;
      }
    }, // These are the actions you can dispatch in UI components. They will always have state and
    // action parameters. The value of the state parameter is supplied by Redux
  },
});

export const { toggle } = lamps.actions;
export default lamps.reducer;
