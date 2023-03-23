import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { filter: "" },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addFilter } = bookSlice.actions;
export default bookSlice.reducer;
