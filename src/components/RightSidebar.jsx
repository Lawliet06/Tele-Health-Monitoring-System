import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/authContext/authContext";
import { getUserDataFromFirestore } from "../firebase/UserData"; // Import the function to get user data
import avatar from "../assets/imgs/user4.png";
import "../assets/css/rightSidebar.css";

function RightSidebar() {
  const { currentUser } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      // Fetch user data from Firestore
      getUserDataFromFirestore(currentUser.uid)
        .then((userData) => {
          if (userData) {
            setFirstName(userData.firstName);
            // Parse and format dob string
            const parsedDob = parseDate(userData.dob);
            setDob(parsedDob);
            setGender(userData.gender);
          } else {
            setError("User data not found");
          }
        })
        .catch((error) => {
          setError("Error fetching user data: " + error.message);
        });
    }
  }, [currentUser]);

  // Custom function to parse date string
  const parseDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const options = { month: "long", day: "numeric", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    } catch (error) {
      console.error("Error parsing date:", error);
      return "Invalid Date";
    }
  };

  return (
    <Section className="section">
      <p>User Profile</p>
      <div className="items">
      <div className="image">
        <img className="usrimg" src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <p>User Name</p>
        <span className="firstName">{firstName}</span>
      </div>
      <div className="dob">
        <p>Date of Birth</p>
        <span className="yr">{dob}</span>
      </div>
      <div className="gender">
        <p>Gender</p>
        <span className="gndr">{gender}</span>
      </div>
      <div className="weight">
        <p>Weight</p>
        <span className="wght">-</span>
      </div>
      {error && <div className="error">{error}</div>}
      </div>
    </Section>
  );
}

const Section = styled.section`
  // Add your custom styles here
`;

export default RightSidebar;
