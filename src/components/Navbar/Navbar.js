import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar, NavList, NavItem } from "./Navbar.style";

const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <StyledNavbar>
      <NavList>
        {navItems.map((navItem, index) => (
          <Link to={`/${navItem.toLowerCase()}`} key={index}>
            <NavItem>{navItem}</NavItem>
          </Link>
        ))}
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
