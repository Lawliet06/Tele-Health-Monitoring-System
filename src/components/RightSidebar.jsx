import React from "react";
import styled from "styled-components";

import avatar from "../assets/imgs/avatar.png";


function RightSidebar() {
  return (
    <Section id="rightSidebar">
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
  border-radius: 10px;
  height: 80%;
  width: auto;
  background-color: #CCCCFF;
  margin-top: 50px;
  margin: 8px;
  padding: 0 3rem;
  padding-top: 2rem;
  .image {
    img {
      height: 3rem;
      border-radius: 2rem;
    }
  }
  .name {
    display: flex;
    align-content: center;
    gap: 0.5rem;
    svg {
      color: var(--primary-color);
      font-size: 1.3rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 0 2rem;
    padding-top: 2rem;
  }
`;
export default RightSidebar;
