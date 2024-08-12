import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMetricsReq } from "../api";
import { DateParams, analyticsState, statisticsState } from "./types";

type MetricsResponse = {
  analytics: analyticsState;
  statistics: statisticsState[];
};
interface ErrorResponse {
  message: string;
}

export const getMetrics = createAsyncThunk<
  MetricsResponse,
  DateParams,
  {
    rejectValue: ErrorResponse;
  }
>("metric/getMetric", async (params, { rejectWithValue }) => {
  try {
    const res: MetricsResponse = await getMetricsReq(params);
    return res;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});
