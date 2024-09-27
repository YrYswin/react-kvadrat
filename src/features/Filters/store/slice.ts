import { createSlice } from "@reduxjs/toolkit";
import { priceVariable } from "../../../utils/data";
import { FilterSliceState } from "./types";
import { RootState } from "../../../app/store";

const initialState: FilterSliceState = {
  page: 0,
  filterType: "По популярности",
  price: priceVariable[0],
  typeHouse: "Все",
  place: "Все",
  comfort: {
    garden: false,
    elevator: false,
    close_area: false,
    open_area: false,
    fenced_yard: false,
    playground: false,
    insulated: false,
    cross_layout: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // page
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    // filterType
    setFilterType: (state, { payload }) => {
      state.filterType = payload;
    },

    // price
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setPriceClear: (state) => {
      state.price.min = null;
      state.price.max = null;
    },

    // typeHouses
    setTypeHouse: (state, { payload }) => {
      state.typeHouse = payload;
    },
    clearTypeHouse: (state) => {
      state.typeHouse = "Все";
    },

    // place
    setPlace: (state, { payload }) => {
      state.place = payload;
    },

    // comfort
    setGarden: (state) => {
      state.comfort.garden = !state.comfort.garden;
    },
    setElevator: (state) => {
      state.comfort.elevator = !state.comfort.elevator;
    },
    setFencedYard: (state) => {
      state.comfort.fenced_yard = !state.comfort.fenced_yard;
    },
    setOpenArea: (state) => {
      state.comfort.open_area = !state.comfort.open_area;
    },
    setCloseArea: (state) => {
      state.comfort.close_area = !state.comfort.close_area;
    },
    setPlayground: (state) => {
      state.comfort.playground = !state.comfort.playground;
    },
    setInsulated: (state) => {
      state.comfort.insulated = !state.comfort.insulated;
    },
    setCrossLayout: (state) => {
      state.comfort.cross_layout = !state.comfort.cross_layout;
    },

    // clear filter
    setClearFilter: () => {
      return initialState;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const {
  clearTypeHouse,
  setPage,
  setFilterType,
  setPrice,
  setTypeHouse,
  setPlace,
  setClearFilter,
  setPriceClear,
  setGarden,
  setElevator,
  setFencedYard,
  setOpenArea,
  setCloseArea,
  setPlayground,
  setInsulated,
  setCrossLayout,
} = filterSlice.actions;
export default filterSlice;
