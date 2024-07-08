import React from 'react'
import "../assets/css/Blankpage.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../assets/css/Home.css";
import undercons from "../assets/imgs/undercons.jpg";

function BlankPage() {
  return (
    
    <div className='main'>

<section className="HomeSection">
      <Navbar />
      <div className="content-wrapper">
        <Sidebar />
        <img className='undercons' src= {undercons} />
      </div>
    </section>
         
    </div>
  )
}

export default BlankPage
