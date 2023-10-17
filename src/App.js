import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PublicPage from "./containers/PublicPageContainer";
import PrivatePage from "./containers/PrivatePageContainer";
import PrivateRoute from "./containers/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PublicPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<PrivatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
