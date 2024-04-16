import React, { useEffect } from "react";
import HeartRate from "../components/Parameters/HeartRate";
import Temperature from "../components/Parameters/Temperature";
import Sidebar from "../components/Sidebar";

import scrollreveal from "scrollreveal";
import "../assets/css/Dashboard.css";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";

function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        .row,
        .row2
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <section className="dashboard-section">
      <div>
        <h3> User Monitoring Dashboard</h3>
      </div>
  
      <div className="dashboard-content">
        <div className="dashboard-row">
          <RightSidebar />
        </div>
        <div className="dashboard-row2">
          <Temperature />
          <HeartRate />
          <HeartRate />
          <HeartRate />
        </div>
      </div>
    </section>
  );
  
}

export default Dashboard;
