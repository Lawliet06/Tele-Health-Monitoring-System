import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { applyCardStyles } from "../ReusableStyles";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/hrt2.json"; // Import the animation JSON file
import { getHealthParametersFromFirestore } from "./ParaData"; // Import the function to fetch data from Firestore

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
    <Section className="Hsection">
      <div className="title" style={{ alignItems: "center" }}>
        <h4>Heart Rate</h4>
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
        {heartRateData && <span>{heartRateData.HeartRate} BPM</span>}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}

  
  color: white;
    .title {
      display: flex;
      justify-content: space-between;
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

  .heart-rate-number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: white;
    font-size: 1.5rem;
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
