import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHousesReq, getHousesReqFilter, postHouseReq, getHouseByIdReq, patchHouseReq, deleteHouseReq, getHousesReqCategory } from "../api.ts";
import { FilterSliceState } from "../../Filters/store/types.ts";
import { NavigateFunction } from "react-router-dom";
import { PostHouseState } from "./types.ts";
import { addNotification } from "../../notification-context/slice.ts";

export const getHouses = createAsyncThunk(
  "get/getHouses",
  async ({ params, page, category }: { params?: FilterSliceState | null; page: number, category?: string }, { rejectWithValue }) => {
    try {
      if (params) {
        return (await getHousesReqFilter(params, page)).data;
      } else if (category) {
        return (await getHousesReqCategory(page, category)).data;
      }else {
        return (await getHousesReq(page)).data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getHouseById = createAsyncThunk("get/getHouseById", async (id: number, { rejectWithValue }) => {
  try {
    const res = await getHouseByIdReq(id);
    return res.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const postHouse = createAsyncThunk(
  "post/postHouse",
  async ({ data, navigate }: { data: PostHouseState; navigate: NavigateFunction }, { rejectWithValue, dispatch }) => {
    try {
      console.log(data);
      const res = await postHouseReq(data);
      navigate("/admin/real-estate");
      dispatch(addNotification({ type: "success", message: "Данные успешно сохранены" }));
      return res.data;
    } catch (err) {
      navigate("/admin/real-estate");
      dispatch(addNotification({ type: "error", message: "Не удалось сохранить данные" }));
      console.error("Error occurred:", err);
      return rejectWithValue(err);
    }
  }
);

export const patchHouse = createAsyncThunk(
  "patch/patchHouse",
  async (
    { data, id, navigate }: { data: PostHouseState; id: number; navigate: NavigateFunction },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await patchHouseReq(data, id);
      alert("Объявление обновлено");
      navigate("/admin/real-estate");
      dispatch(addNotification({ type: "success", message: "Данные успешно обновлены" }));
      return res.data;
    } catch (err) {
      navigate("/admin/real-estate");
      dispatch(addNotification({ type: "error", message: "Не удалось обновить данные" }));
      console.error("Error occurred:", err);
      return rejectWithValue(err);
    }
  }
);

export const deleteHouse = createAsyncThunk("delete/deleteHouse", async (id: number, { rejectWithValue }) => {
  try {
    const res = await deleteHouseReq(id);
    return res.data;
  } catch (err) {
    console.error("Error occurred:", err);
    return rejectWithValue(err);
  }
});
