import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import PublicPage from "./components/PublicPage";
import PrivatePage from "./components/PrivatePage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PublicPage />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="/private" element={<PrivatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
