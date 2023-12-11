import { createSlice } from "@reduxjs/toolkit";

const radioSettings = createSlice({
  name: "radio",
  initialState: {
    radio: { genre: "classic rock", power: false, powerUnits: 0 },
  }, // The names of these keys in initialState will be used in selector definitions
  reducers: {
    toggleOnOff: (state) => {
      state.radio.power = !state.radio.power;
      state.radio.powerUnits = state.radio.power ? 25 : 0; //this is to show power units used when it is on.
    },
    changeGenre: (state, action) => {
      state.radio.genre = action.payload;
    },
  },
});

export const { toggleOnOff, changeGenre } = radioSettings.actions;
export default radioSettings.reducer;
