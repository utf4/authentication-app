import React from "react";
import BoyVector from "../images/boyVector.svg";
import BackgroundLayers from "../images/bgMain.png";
import '../styles/publicPage.scss'

const PublicPageUI = ({ email, password, error, success, onEmailChange, onPasswordChange, onLogin }) => {
  return (
    <div className="main_section">
      <div className="main_wrapper">
        <div className="login_form">
          <div className="login_wrapper">
            <h1>Login</h1>
            <div className="input_group">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
              />
            </div>
            <div className="input_group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
              />
            </div>
            <p className="validation_msg">
              {error && <p className="error_message validation_msg">{error}</p>}
              {success && <p className="success_message validation_msg">{success}</p>}
            </p>
            <button onClick={onLogin}>Login</button>
          </div>
        </div>
        <div className="vector_section">
          <img src={BackgroundLayers} alt="Background Layers" />
          <img className="main_vector" src={BoyVector} alt="Boy Vector" />
        </div>
      </div>
    </div>
  );
};

export default PublicPageUI;
