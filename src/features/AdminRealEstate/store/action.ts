import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHousesReq, getHousesReqFilter, postHouseReq, getHouseByIdReq, patchHouseReq, deleteHouseReq } from "../api.ts";
import { FilterSliceState } from "../../Filters/store/types.ts";
import { NavigateFunction } from "react-router-dom";
import { PostHouseState } from "./types.ts";

export const getHouses = createAsyncThunk(
  "get/getHouses",
  async ({ params, page }: { params?: FilterSliceState | null; page: number }, { rejectWithValue }) => {
    try {
      let data: any;
      if (params) {
        const response = await getHousesReqFilter(params, page);
        data = response.data;
      } else {
        const response = await getHousesReq(page);
        data = response.data;
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "An error occurred");
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
  async ({ data, navigate }: { data: PostHouseState; navigate: NavigateFunction }, { rejectWithValue }) => {
    try {
      console.log(data);
      const res = await postHouseReq(data);
      navigate("/admin/real-estate");
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const patchHouse = createAsyncThunk(
  "patch/patchHouse",
  async ({ data, id, navigate }: { data: PostHouseState; id: number; navigate: NavigateFunction }, { rejectWithValue }) => {
    try {
      const res = await patchHouseReq(data, id);
      alert("Объявление обновлено");
      navigate("/admin/real-estate");
      return res.data;
    } catch (err) {
      console.error("Error occurred:", err);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const deleteHouse = createAsyncThunk("delete/deleteHouse", async (id, { rejectWithValue }) => {
  try {
    const res = await deleteHouseReq(id);
    return res.data;
  } catch (err) {
    console.error("Error occurred:", err);
    return rejectWithValue(err.response?.data || err.message);
  }
});
