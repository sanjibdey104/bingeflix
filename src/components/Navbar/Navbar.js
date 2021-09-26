import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import { StyledNavbar, NavList, NavItem } from "./Navbar.style";
import { BiCaretDown } from "react-icons/bi";

const Navbar = () => {
  const navItems = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];
  const navMenu = createRef();

  const handleDropdown = () => {
    navMenu.current.classList.toggle("active");
  };

  return (
    <StyledNavbar>
      <button className="dropdown-toggler" onClick={handleDropdown}>
        <p className="title">Browse</p>
        <BiCaretDown />
      </button>
      <NavList ref={navMenu}>
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
