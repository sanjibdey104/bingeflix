import React from "react";
import ItemListContainer from "../../containers/ItemListContainer";
import { StyledHome } from "./Home.style";

const Home = () => {
  return (
    <StyledHome>
      <ItemListContainer itemType={"movie"} />
    </StyledHome>
  );
};

export default Home;
