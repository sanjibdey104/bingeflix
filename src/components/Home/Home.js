import React from "react";
import { Billboard } from "../index";
import { StyledHome } from "./Home.style";

const Home = () => {
  return (
    <StyledHome>
      <h2>This is the homepage</h2>
      <Billboard />
    </StyledHome>
  );
};

export default Home;
