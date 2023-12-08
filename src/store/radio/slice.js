import { createSlice } from "@reduxjs/toolkit";

const radioSettings = createSlice({
  name: "radio",
  initialState: {
    radio: { genre: "classic rock", power: false },
  }, // The names of these keys in initialState will be used in selector definitions
  reducers: {
    toggleOnOff: (state) => {
      state.radio.power = !state.radio.power;
    },
    changeGenre: (state, action) => {
      state.radio.genre = action.payload;
    },
  },
});

export const { toggleOnOff, changeGenre } = radioSettings.actions;
export default radioSettings.reducer;
