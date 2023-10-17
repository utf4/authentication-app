import React, { createContext, useReducer, useContext, useEffect } from "react";
import {setAuthToken , getAuthToken} from '../utils/authUtils'

const AuthContext = createContext();

// Initial Value
const initialState = {
  isAuthenticated: false,
};

// Auth Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// Auth Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, () => {
    const persistedState = getAuthToken();
    if(persistedState == ""){
    }
    const isAuthValue = JSON.parse(persistedState)
    return persistedState ? isAuthValue : initialState;
  });

  useEffect(() => {
    setAuthToken(state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

