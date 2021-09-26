import React from "react";
import { StyledSecondaryNav, SecondaryNavItem } from "./SecondaryNav.style";

import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";

const SecondaryNav = () => {
  return (
    <StyledSecondaryNav>
      <SecondaryNavItem>
        <FaSearch id="search-icon" />
      </SecondaryNavItem>
      <SecondaryNavItem className="gifts">
        <AiOutlineGift id="gift" />
      </SecondaryNavItem>
      <SecondaryNavItem className="notification">
        <FaBell />
      </SecondaryNavItem>
      <SecondaryNavItem data-tooltip="profile">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
          alt="user portrait"
        />
        <FaCaretDown id="caret-down" />
      </SecondaryNavItem>
    </StyledSecondaryNav>
  );
};

export default SecondaryNav;
