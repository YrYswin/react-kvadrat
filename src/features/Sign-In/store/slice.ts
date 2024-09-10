import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { adminLogin } from "./action";
import { loginSliceState, Status } from "./types";

const initialState: loginSliceState = {
  status: Status.LOADING,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(adminLogin.fulfilled, (state) => {
        state.status = Status.SUCCESS;
      })
      .addCase(adminLogin.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectStatus = (state: RootState) => state.admin.status;

export default adminSlice;
