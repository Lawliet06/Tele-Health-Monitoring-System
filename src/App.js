import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Views/Dashboard";
import "./App.css";
import scrollreveal from "scrollreveal";

import Login from "./Views/auth/LoginPage";
import Register from "./Views/auth/SignupPage";

import { AuthProvider } from "./contexts/authContext/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}
          </Routes>
          
        </div>
      </Router>
    </AuthProvider>
  );
}
