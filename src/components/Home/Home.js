import React from "react";
import MovieListContainer from "../../containers/MovieListContainer";
import { StyledHome } from "./Home.style";

const Home = () => {
  return (
    <StyledHome>
      <MovieListContainer />
    </StyledHome>
  );
};

export default Home;
