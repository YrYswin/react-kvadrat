import { createSlice } from "@reduxjs/toolkit";
import { getHouses, getHouseById } from "./action";
import { RootState } from "../../../app/store";
import { HouseSliceState, Status } from "./types";

const initialState: HouseSliceState = {
  items: [],
  item: null,
  count: 0,
  status: Status.LOADING,
};

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    itemClear: (state) => {
      state.item = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHouses.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getHouses.fulfilled, (state, { payload }) => {
        state.items = payload.results;
        state.status = Status.SUCCESS;
        state.count = payload.count;
      })
      .addCase(getHouses.rejected, (state) => {
        state.status = Status.ERROR;
      });

    builder
      .addCase(getHouseById.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getHouseById.fulfilled, (state, { payload }) => {
        state.item = { ...payload, image: payload.image };
        state.status = Status.SUCCESS;
      })
      .addCase(getHouseById.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const selectHouses = (state: RootState) => state.houses;
export const selectHouse = (state: RootState) => state.houses.item;
export const selectHouseCount = (state: RootState) => state.houses.count;

export const { itemClear } = houseSlice.actions;
export default houseSlice;
