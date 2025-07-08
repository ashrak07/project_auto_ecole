import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    selectedCourse: "true",
  },
  reducers: {
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const { setSelectedCourse } = courseSlice.actions;

export default courseSlice.reducer;
