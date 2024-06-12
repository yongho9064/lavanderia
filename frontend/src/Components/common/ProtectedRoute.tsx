import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
