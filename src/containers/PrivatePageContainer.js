import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { removeAuthToken } from '../utils/authUtils'
import PrivatePageUI from "../components/PrivatePageUI";

const PrivatePageContainer = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    removeAuthToken();
    navigate("/");
  };

  return <PrivatePageUI onLogout={handleLogout} />;
};

export default PrivatePageContainer;
