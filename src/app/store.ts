import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import userSlice from "../features/AdminMainDashboard/store/slice";
import metricSlice from "../features/AdminMainDashboard/store/slice";
import headingSlice from "../features/AdminHeadings/store/slice";
import houseSlice from "../features/AdminRealEstate/store/slice";
import adminSlice from "../features/Sign-In/store/slice";
import filterSlice from "../features/Filters/store/slice";
import notificationSlice from "../features/notification-context/slice";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [metricSlice.name]: metricSlice.reducer,
    [headingSlice.name]: headingSlice.reducer,
    [houseSlice.name]: houseSlice.reducer,
    [adminSlice.name]: adminSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [notificationSlice.name]: notificationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
