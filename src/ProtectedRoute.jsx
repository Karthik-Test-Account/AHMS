// src/ProtectedRoute.js
import React from "react";
import { Navigate, Outlet ,useLocation} from "react-router-dom";
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { currentUser } = useAuth();
  const location=useLocation();
  if (!currentUser) {
    return <Navigate to="/login" replace state={{from:location}}/>;
  }

  const userRole = currentUser.email === "xyz@gmail.com" ? "admin" : "student";
  console.log(userRole);
  if (!allowedRoles.includes(userRole)) {
    console.log("inside back");
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
