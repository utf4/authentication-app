// authUtils.js for the localstorage management

// Set Auth Token in the localstorage
export const setAuthToken = (state) => {
  localStorage.setItem("authState", JSON.stringify(state));
};

// Get Auth Token from the localstorage
export const getAuthToken = () => {
 return localStorage.getItem("authState");
};

// Remove Auth Token from the localstorage
export const removeAuthToken = () => {
  localStorage.removeItem("authState");
};

// Verifying Auth Token
export const checkAuthToken = () => {
  const persistedState = localStorage.getItem("authState");
  const isAuthValue = JSON.parse(persistedState);
  return isAuthValue && isAuthValue.isAuthenticated;
};
