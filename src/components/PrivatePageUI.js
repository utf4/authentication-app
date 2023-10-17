import React from 'react';
import '../styles/privatePage.scss'

const PrivatePageUI = ({ onLogout }) => {
  return (
    <div className='main_section'>
      <div className='main_wrapper'>
        <div>
          <h1>Hi Marcus</h1>
          <p>Welcome to your profile</p>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default PrivatePageUI;
