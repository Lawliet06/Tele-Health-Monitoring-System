import React from "react";
import styled from "styled-components";
import '../assets/css/rightSidebar.css'
import avatar from "../assets/imgs/avatar.png";


function RightSidebar() {
  return (
    <Section className="section">
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span>Timothy</span>
      </div>
    </Section>
  );
}

const Section = styled.section`

`;
export default RightSidebar;
