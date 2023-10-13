import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  carousel: 1,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    increaseCarousel: (state) => {
      state.carousel = 2;
    },
    decreaseCarousel: (state) => {
      state.carousel = 1;
    },
  },
});

export const { toggleMenu, increaseCarousel, decreaseCarousel } =
  uiSlice.actions;
export default uiSlice.reducer;
