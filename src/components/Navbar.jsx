import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext/authContext';
import { doSignOut } from '../firebase/auth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../assets/css/Navbar.css'

function Navbar() {
  const [popupVisible, setPopupVisible] = useState(false);
  const { userLoggedIn, currentUser } = useAuth();
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate('/'); // Fix navigation to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="nav">
      <h2>Tele-Health Monitoring System</h2>
      <div className="icons">
        <NotificationsIcon />
        <AccountCircleIcon onClick={togglePopup} />

        {popupVisible && (
          <div className="popup">
            <p>Admin_Timo</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
