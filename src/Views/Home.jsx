import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
import Dashboard from "./Dashboard";


function Home() {


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
