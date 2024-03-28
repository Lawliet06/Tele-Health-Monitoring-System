import React, { useEffect } from "react";
import HeartRate from "../components/HeartRate";
import Temperature from "../components/Temperature";

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
        nav,
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
        <Navbar />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-row">
          <RightSidebar />
          <HeartRate />
        </div>
        <div className="dashboard-row2">
          <Temperature />
          <HeartRate />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
