import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { removeNotification } from "./slice";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const NotificationComponent: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 5000); // Удаление уведомления через 7 секунд
      return () => clearTimeout(timer);
    }
  }, [notifications, dispatch]);

  return (
    <Stack sx={{ position: "fixed", bottom: 34, right: 34, width: "auto" }} spacing={2}>
      {notifications.map((notif, index) => (
        <Alert key={index} severity={notif.type}>
          {notif.message}
        </Alert>
      ))}
    </Stack>
  );
};

export default NotificationComponent;
