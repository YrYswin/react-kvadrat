import { Navigate } from "react-router-dom";
import TokenService from "../../utils";

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const token = TokenService.getUserLS();

  if (!token) {
    return <Navigate to="/admin/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;
