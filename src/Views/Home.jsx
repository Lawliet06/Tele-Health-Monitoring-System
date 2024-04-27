import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import scrollreveal from "scrollreveal";
import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
import Dashboard from "./Dashboard";
import RightSidebar from "../components/RightSidebar";

function Home() {
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
    <section className="HomeSection">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <Dashboard />
      </div>
    </section>
  );
}

export default Home;
