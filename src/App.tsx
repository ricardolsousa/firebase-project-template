import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { AuthenticationStateProps } from "./types/authentication/AuthenticationTypes";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/authentication/register/RegisterPage";
import LoginPage from "./pages/authentication/login/LoginPage";

function App() {
  const isAuthenticated = useSelector(
    (state: AuthenticationStateProps) => state.auth.userId
  );

  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-16 pb-4">
          <div className="lg:mx-28 md:mx-1 sm:mx-1 xs:mx-1 lg:px-6 px-4 py-8">
            <Routes>
              {isAuthenticated && (
                <Route path="/home" element={<div>Homepage</div>} />
              )}
              {!isAuthenticated && (
                <>
                  {/* Auth routes */}
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </>
              )}
              <Route path="/" element={<div>Homepage</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
