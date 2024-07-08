import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FiHelpCircle } from "react-icons/fi";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import "../assets/css/Sidebar.css";
import logo from "../assets/imgs/logo.png";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Initialize useLocation

  // Path to tab index mapping
  const pathToIndex = {
    "/dashboard": 0,
    "/track-location": 1,
    "/report": 2,
    "/about-us": 3,
  };

  // Update active tab based on current path
  useEffect(() => {
    const currentPath = location.pathname;
    if (pathToIndex.hasOwnProperty(currentPath)) {
      setActiveTab(pathToIndex[currentPath]);
    }
  }, [location.pathname]); // Re-run the effect when the path changes

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTabClick = (index, path) => {
    setActiveTab(index);
    navigate(path); // Navigate to the specified path
    closeModal(); // Close the modal if it's open
  };

  return (
    <Aside className="sidebar">
      <img className="imgbar" src={logo} alt="logo" />
      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleModal}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className="links">
        <li
          className={activeTab === 0 ? "selected" : ""}
          onClick={() => handleTabClick(0, "/dashboard")}
        >
          <DashboardOutlinedIcon />
          Dashboard
        </li>
        <li
          className={activeTab === 1 ? "selected" : ""}
          onClick={() => handleTabClick(1, "/track-location")}
        >
          <LocationOnOutlinedIcon />
          Track Location
        </li>
        <li
          className={activeTab === 2 ? "selected" : ""}
          onClick={() => handleTabClick(2, "/report")}
        >
          <AssessmentOutlinedIcon />
          Report
        </li>
        <li
          className={activeTab === 3 ? "selected" : ""}
          onClick={() => handleTabClick(3, "/about-us")}
        >
          <FiHelpCircle />
          About Us
        </li>
      </ul>

      {/* Modal */}
      {showModal && (
        <Modal>
          <ul className="modal-links">
            <li
              className={activeTab === 0 ? "selected" : ""}
              onClick={() => handleTabClick(0, "/dashboard")}
            >
              <DashboardOutlinedIcon />
              Dashboard
            </li>
            <li
              className={activeTab === 1 ? "selected" : ""}
              onClick={() => handleTabClick(1, "/track-location")}
            >
              <LocationOnOutlinedIcon />
              Track Location
            </li>
            <li
              className={activeTab === 2 ? "selected" : ""}
              onClick={() => handleTabClick(2, "/report")}
            >
              <AssessmentOutlinedIcon />
              Report
            </li>
            <li
              className={activeTab === 3 ? "selected" : ""}
              onClick={() => handleTabClick(3, "/about-us")}
            >
              <FiHelpCircle />
              About Us
            </li>
          </ul>
          <div className="close-modal" onClick={toggleModal}>
            &times;
          </div>
        </Modal>
      )}
    </Aside>
  );
}

const Aside = styled.aside``;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .modal-links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    li {
      border-radius: 1rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      svg {
        color: white;
        font-size: 2rem;
      }
      &:hover {
        box-shadow: 0 0 15px 2px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 15px 2px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: white;
  }
`;

export default Sidebar;
