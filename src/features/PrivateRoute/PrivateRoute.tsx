import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserLS } from "../../utils";

const PrivateRoute: React.FC = () => {
  const user = getUserLS(); // Проверяем, есть ли токен

  return user ? <Outlet /> : <Navigate to="/admin/sign-in" />;
};

export default PrivateRoute;
