import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./styles/styles.scss";

const PublicPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  useEffect(() => {
    const persistedState = localStorage.getItem("authState");
    const isAuthValue = JSON.parse(persistedState)
    if (isAuthValue && isAuthValue.isAuthenticated == true) {
      navigate("/Private");
    } else {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    if (email === "user@test.com" && password === "1234") {
      dispatch({ type: "LOGIN" });
      setSuccess("Login successful!");
      setError("");
      navigate("/private");
    } else {
      setError("Invalid email or password. Please try again.");
      setSuccess("");
    }
  };
  const handleInputChange = () => {
    setError("");
    setSuccess("");
  };
  return (
    <div className="main_section">
      <div className="main_wrapper">
        <h1>Login</h1>
        <div className="login_form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
          />
          <p>
            {error && <p className="error_message">{error}</p>}
            {success && <p className="success_message">{success}</p>}
          </p>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default PublicPage;
