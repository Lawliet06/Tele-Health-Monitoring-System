import React, { useState } from "react";
import styled from "styled-components";

import { FiHelpCircle } from "react-icons/fi";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import "../assets/css/Sidebar.css";
import logo from "../assets/imgs/logo.png";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    toggleModal();
  };

  return (
    <Aside className="sidebar">
      <img className="imgbar" src={logo} alt="logo" />

      <ul className="links">
        <li
          className={activeTab === 0 ? "selected" : ""}
          onClick={() => handleTabClick(0)}
        >
          <DashboardOutlinedIcon />
          Dashboard
        </li>
        <li
          className={activeTab === 1 ? "selected" : ""}
          onClick={() => handleTabClick(1)}
        >
          <LocationOnOutlinedIcon />
          Track Location
        </li>
        <li
          className={activeTab === 2 ? "selected" : ""}
          onClick={() => handleTabClick(2)}
        >
          <AssessmentOutlinedIcon />
          Report
        </li>
        <li
          className={activeTab === 3 ? "selected" : ""}
          onClick={() => handleTabClick(3)}
        >
          <FiHelpCircle />
          About Us
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleModal}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal>
          <ul className="modal-links">
            <li
              className={activeTab === 0 ? "selected" : ""}
              onClick={() => handleTabClick(0)}
            >
              <DashboardOutlinedIcon />
              Dashboard
            </li>
            <li
              className={activeTab === 1 ? "selected" : ""}
              onClick={() => handleTabClick(1)}
            >
              <LocationOnOutlinedIcon />
              Track Location
            </li>
            <li
              className={activeTab === 2 ? "selected" : ""}
              onClick={() => handleTabClick(2)}
            >
              <AssessmentOutlinedIcon />
              Report
            </li>
            <li
              className={activeTab === 3 ? "selected" : ""}
              onClick={() => handleTabClick(3)}
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
    /* Modal links styles */
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
        box-shadow: 0 0 20px 4px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 20px 4px var(--primary-color);
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
