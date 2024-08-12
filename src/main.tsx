import React from "react";
import ReactDOM from "react-dom/client";
import "./app/style/index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router.jsx";
import { store } from "./app/store.js";
import NotificationComponent from "./features/notification-context/NotificationContext.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <NotificationComponent />
    </Provider>
  </React.StrictMode>
);
