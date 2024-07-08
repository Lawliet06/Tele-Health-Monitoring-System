import React, { useEffect } from "react";
import BlankPage from "./Views/Blankpage";
import Home from "./Views/Home";
import "./App.css";

import Login from "./Views/auth/LoginPage";
import Register from "./Views/auth/SignupPage";

import { AuthProvider } from "./contexts/authContext/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard  from "./Views/Dashboard";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/track-location" element={<BlankPage />} />
            <Route path="/report" element={<BlankPage />} />
            <Route path="/about-us" element={<BlankPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
