import React from "react";
import { StyledNavbar, NavList, NavItem } from "./Navbar.style";
const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <StyledNavbar>
      <NavList>
        {navItems.map((navItem) => (
          <NavItem key={Math.round(Math.random() * 1000)}>{navItem}</NavItem>
        ))}
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
