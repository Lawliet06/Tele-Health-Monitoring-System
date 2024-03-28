import React from "react";
import "../assets/css/Navbar.css";

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
    <nav className="nav">
      <h2>Tele-Health Monitoring System</h2>
      <div className="icons">
        <NotificationsIcon />
        <AccountCircleIcon />
      
        
      </div>
    </nav>
  );
}

export default Navbar;

