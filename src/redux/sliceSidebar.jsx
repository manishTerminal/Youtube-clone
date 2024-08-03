import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggle: true,
  },
  reducers: {
    clicked: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { clicked } = toggleSlice.actions;

export default toggleSlice.reducer;
