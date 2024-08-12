import { createSlice } from "@reduxjs/toolkit";
import { getMetrics } from "./action";
import { MetricsSliceState } from "./types";
import { RootState } from "../../../app/store";

const initialState: MetricsSliceState = {
  analytics: null,
  statistics: [],
  isLoading: false,
  error: null,
};

const metricSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMetrics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMetrics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.analytics = payload.analytics;
        state.statistics = payload.statistics;
      })
      .addCase(getMetrics.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error";
      });
  },
});

export const selectMetrics = (state: RootState) => state.metrics;

export default metricSlice;
