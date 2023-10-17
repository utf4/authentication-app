import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { checkAuthToken } from "../utils/authUtils";
import PublicPageUI from "../components/PublicPageUI";

const PublicPageContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  useEffect(() => {
    if (checkAuthToken()) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = () => {
    if (email === "user@test.com" && password === "1234") {
      dispatch({ type: "LOGIN" });
      setSuccess("Login successful!");
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
      setSuccess("");
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setError("");
    setSuccess("");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setError("");
    setSuccess("");
  };

  return (
    <PublicPageUI
      email={email}
      password={password}
      error={error}
      success={success}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
    />
  );
};

export default PublicPageContainer;
