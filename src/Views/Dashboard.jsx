import React, { useEffect } from "react";
import HeartRate from "../components/Parameters/HeartRate";
import Oxygen from "../components/Parameters/Oxygen";
import Motion from "../components/Parameters/Motion";
import Temperature from "../components/Parameters/Temperature";

import scrollreveal from "scrollreveal";
import "../assets/css/Dashboard.css";
import RightSidebar from "../components/RightSidebar";

/* DONT IGNORE THIS the best way to capture data in aphabetical order*/

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
          <HeartRate />
          <Temperature />
          <Oxygen />
          <Motion />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
