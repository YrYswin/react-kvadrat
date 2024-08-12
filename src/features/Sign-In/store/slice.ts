import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { adminLogin } from "./action";
import { loginSliceState, loginState, Status } from "./types";
import { deleteUserLS, getUserLS, setUserLS } from "../../../utils";

const initialState: loginSliceState = {
  users: getUserLS(),
  status: Status.LOADING,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    adminLogout: (state) => {
      state.users = null;
      deleteUserLS();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }: PayloadAction<loginState>) => {
        state.users = payload;
        setUserLS(payload);
        state.status = Status.SUCCESS;
      })
      .addCase(adminLogin.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectStatus = (state: RootState) => state.admin.status;

export default adminSlice;
