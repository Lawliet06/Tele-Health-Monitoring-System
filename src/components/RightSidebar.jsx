import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAuth } from '../contexts/authContext/authContext';
import { getUserDataFromFirestore } from '../firebase/UserData'; // Import the function to get user data
import avatar from "../assets/imgs/avatar.png";
import '../assets/css/rightSidebar.css'

function RightSidebar() {
  const { currentUser } = useAuth();
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (currentUser) {
      // Fetch user data from Firestore
      getUserDataFromFirestore(currentUser.uid)
        .then(userData => {
          if (userData && userData.firstName) {
            setFirstName(userData.firstName);
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [currentUser]);

  return (
    <Section className="section">
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span className="firstName">{firstName}</span>
      </div>
    </Section>
  );
}

const Section = styled.section`
  // Add your custom styles here
`;

export default RightSidebar;
