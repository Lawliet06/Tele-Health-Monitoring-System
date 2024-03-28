import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Views/Dashboard";
import "./App.css";
import scrollreveal from "scrollreveal";

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
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
