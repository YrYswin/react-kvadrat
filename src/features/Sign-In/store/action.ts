import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoot } from "../../../app/api";
import { loginState } from "./types";
import { NavigateFunction } from "react-router-dom";
import TokenService from "../../../utils";
import { toast } from "react-toastify";

const adminLoginReq = (data: loginState) => {
  return apiRoot.post("api/admin/login/", data);
};

export const adminLogin = createAsyncThunk(
  "post/adminLogin",
  async ({ data, navigate }: { data: loginState; navigate: NavigateFunction }, { rejectWithValue }) => {
    TokenService.deleteUserLS();
    try {
      const res = await adminLoginReq(data);
      if (res.status === 200) {
        TokenService.setUserLS(data);
        navigate("/admin");
        alert("Вы успешно вошли в аккаунт");
        return data;
      } else {
        return res.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
