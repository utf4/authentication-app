import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivatePage = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('authState');
    navigate('/');
  };

  return (
    <div className='main_section'>
      <div className='main_wrapper'>
      <h1>Hi Marcus</h1>
      <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default PrivatePage;
