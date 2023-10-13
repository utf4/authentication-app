import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PrivatePage = () => {
  const { state } = useAuth();
  return state.isAuthenticated ? <Outlet /> : <Navigate to="/" />
};

export default PrivatePage;
