import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const hotelSlice = createSlice({
    name: "hotelSearch",
    initialState,
    reducers: {
      saveSearch: (state, action) => {
          console.log("SAVE Hotel ", action.payload);
          state.value = action.payload;
      },
      clearSearch: (state) => {
          console.log("SIGN OUT REDUCER ");
          state.value = {};
      }
    },
});

export const { saveSearch, clearSearch } = hotelSlice.actions;
export default hotelSlice.reducer;