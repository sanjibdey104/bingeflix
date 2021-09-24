import React from "react";
import { StyledSecondaryNav, SecondaryNavItem } from "./SecondaryNav.style";

import { FaSearch, FaSlidersH, FaCaretDown, FaUser } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { BiBell } from "react-icons/bi";

const SecondaryNav = () => {
  return (
    <StyledSecondaryNav>
      <SecondaryNavItem>
        <FaSearch />
      </SecondaryNavItem>
      <SecondaryNavItem>
        <BiBell />
      </SecondaryNavItem>
      <SecondaryNavItem>
        <AiOutlineGift />
      </SecondaryNavItem>
      <SecondaryNavItem>
        <FaUser />
        <FaCaretDown id="caret-down" />
      </SecondaryNavItem>
      <SecondaryNavItem>
        <FaSlidersH />
        <FaCaretDown id="caret-down" />
      </SecondaryNavItem>
    </StyledSecondaryNav>
  );
};

export default SecondaryNav;
