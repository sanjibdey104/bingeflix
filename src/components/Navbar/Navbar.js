import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar, NavList, NavItem } from "./Navbar.style";

const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

  return (
    <StyledNavbar>
      <NavList>
        {navItems.map((navItem, index) => (
          <NavLink
            to={`/${navItem.toLowerCase()}`}
            key={index}
            activeClassName="selected"
          >
            <NavItem>{navItem}</NavItem>
          </NavLink>
        ))}
      </NavList>
    </StyledNavbar>
  );
};

export default Navbar;
