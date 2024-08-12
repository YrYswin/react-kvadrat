import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Notification = {
  type: "success" | "info" | "warning" | "error";
  message: string;
};

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications.push(action.payload);
    },
    removeNotification(state) {
      state.notifications.shift();
    },
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice;
