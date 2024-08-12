import { createSlice } from "@reduxjs/toolkit";
import { getHeadings, getHeadingById, patchHeading } from "./action";
import { HeadingSliceState } from "./types";

const initialState: HeadingSliceState = {
  items: [],
  item: null,
  isLoading: false,
  error: null,
};

const headingSlice = createSlice({
  name: "headings",
  initialState,
  reducers: {
    headingClear: (state) => {
      state.item = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeadings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getHeadings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.results;
      })
      .addCase(getHeadings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(patchHeading.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(patchHeading.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(patchHeading.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error";
      });

    builder
      .addCase(getHeadingById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHeadingById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getHeadingById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error";
      });
  },
});

export const { headingClear } = headingSlice.actions;
export default headingSlice;
