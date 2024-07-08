import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { applyCardStyles } from "../ReusableStyles";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/temp.json"; // Import the animation JSON file
import { getHealthParametersFromFirestore } from "./ParaData"; // Import the function to fetch data from Firestore

import "../../assets/css/Temperature.css";


function HeartRate() {
  const [heartRateData, setHeartRateData] = useState(null); // State to store heart rate data

  useEffect(() => {
    // Fetch heart rate data from Firestore
    getHealthParametersFromFirestore().then((data) => {
      // Set the heart rate data to the latest document
      setHeartRateData(data[data.length - 1]);
    });
  }, []);


  return (
    <Section style={{ height: "300px" }}>
      <div className="title-container">
        <div className="title">
          <h4>Temperature</h4>
        </div>
      </div>
      <div className="animation-container" style={{ height: "200px" }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          height={180} // Adjust the height as needed
          width={200} // Adjust the width as needed
        />
      </div>
      <div>
        {/* Display the heart rate value from the latest document */}
        {heartRateData && <span>{heartRateData.Temperature} C°</span>}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color: white;

  .title-container {
    display: flex;
    justify-content: space-between;

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
      }
    }
  }

  .animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {


    .title {
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
      }
    }


`;

export default HeartRate;
