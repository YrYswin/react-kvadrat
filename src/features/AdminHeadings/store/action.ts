import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHeadingsByIdReq, getHeadingsReq, postHeadingReq, patchHeadingReq, deleteHeadingReq } from "../api";
import { PatchHeadingState, PostHeadingState } from "./types";
import { AxiosError, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router-dom";
import { addNotification } from "../../notification-context/slice";

export const getHeadings = createAsyncThunk("heading/getHeading", async (_, { rejectWithValue }) => {
  try {
    return (await getHeadingsReq()).data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getHeadingById = createAsyncThunk("heading/getHeadingById", async (id: number, { rejectWithValue }) => {
  try {
    return (await getHeadingsByIdReq(id)).data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

interface SuccessResponse {
  data: string;
}

interface ErrorResponse {
  message: string;
}

export const postHeading = createAsyncThunk<
  SuccessResponse,
  { data: PostHeadingState; navigate: NavigateFunction },
  { rejectValue: ErrorResponse }
>("heading/postHeading", async ({ data, navigate }, { rejectWithValue, dispatch }) => {
  try {
    const res: AxiosResponse<SuccessResponse> = await postHeadingReq(data);
    dispatch(addNotification({ type: "success", message: "Объявление cоздано" }));
    navigate("/admin/headings");
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError<ErrorResponse>;
    dispatch(addNotification({ type: "error", message: "Не удалось создать объявление" }));
    return rejectWithValue(axiosError.response?.data || { message: axiosError.message });
  }
});

export const patchHeading = createAsyncThunk(
  "heading/patchHeading",
  async ({ data, navigate }: { data: PatchHeadingState; navigate: NavigateFunction }, { rejectWithValue, dispatch }) => {
    try {
      console.log(data);
      const res = await patchHeadingReq(data);
      dispatch(addNotification({ type: "success", message: "Объявление обновлено" }));
      navigate("/admin/headings");
      return res.data;
    } catch (err) {
      console.log(err);
      dispatch(addNotification({ type: "error", message: "Произошла ошибка с сервером" }));
      return rejectWithValue(err);
    }
  }
);

export const deleteHeading = createAsyncThunk(
  "heading/deleteHeading",
  async ({ id, navigate }: { id: number; navigate: NavigateFunction }, { rejectWithValue, dispatch }) => {
    try {
      const res = await deleteHeadingReq(id);
      dispatch(addNotification({ type: "success", message: "Объявление удалено" }));
      navigate("/admin/headings");
      return res.data;
    } catch (err) {
      console.log(err);
      dispatch(addNotification({ type: "error", message: "Произошла ошибка с сервером" }));
      navigate("/admin/headings");
      return rejectWithValue(err);
    }
  }
);
