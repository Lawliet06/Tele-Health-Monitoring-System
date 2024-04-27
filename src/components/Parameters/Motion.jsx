import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { applyCardStyles } from "../ReusableStyles";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/Motion.json"; // Import the animation JSON file
import { getHealthParametersFromFirestore } from "./ParaData"; // Import the function to fetch data from Firestore

import logo1 from "../../assets/imgs/heart.png";

function HeartRate() {
  const [heartRateData, setHeartRateData] = useState(null); // State to store heart rate data

  useEffect(() => {
    // Fetch heart rate data from Firestore
    getHealthParametersFromFirestore().then((data) => {
      // Set the heart rate data to the latest document
      setHeartRateData(data[data.length - 1]);
    });
  }, []);

  const sliderData = [
    {
      image: logo1,
      serviceName: "Heart Rate",
    },
  ];

  return (
    <Section style={{ height: "300px" }}>
      <div className="title-container">
        <div className="title" style={{ alignItems: "center" }}>
          <h4>Motion</h4>
        </div>
      </div>
      <div className="animation-container" style={{ height: "200px" }}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          height={300} // Adjust the height as needed
          width={400} // Adjust the width as needed
        />
      </div>
      <div>
        {/* Display the heart rate value from the latest document */}
        {heartRateData && <span>{heartRateData.Oxygen} Mph</span>}
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
    .slider {
      justify-content: center;
      align-items: center;
      .services {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .service {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.6rem;
          min-width: 5rem;
          img {
            height: 2rem;
          }
        }
      }
    }
  }

  .animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heart-rate-number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: white;
    font-size: 1.5rem;
  }
`;

export default HeartRate;
