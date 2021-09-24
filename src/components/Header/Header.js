import React from "react";
import { Logo } from "../Logo";
import Navbar from "../Navbar/Navbar";
import SecondaryNav from "../SecondaryNav/SecondaryNav";
import { StyledHeader } from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <SecondaryNav />
    </StyledHeader>
  );
};

export default Header;
