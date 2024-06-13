import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
