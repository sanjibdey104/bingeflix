import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { StyledNavbar, NavList, NavItem } from "./Navbar.style";

const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];
  const navItemRef = useRef();

  const highlightNavitem = () => {};

  return (
    <StyledNavbar>
      <NavList>
        {navItems.map((navItem, index) => (
          <NavLink
            to={`/${
              navItem.toLowerCase() === "home" ? "home" : navItem.toLowerCase()
            }`}
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
