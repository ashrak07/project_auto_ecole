import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
  name: "clients",
  initialState: {
    selectedList: "true",
  },
  reducers: {
    setSelectedList: (state, action) => {
      state.selectedList = action.payload;
    },
  },
});

export const { setSelectedList } = clientSlice.actions;

export default clientSlice.reducer;
