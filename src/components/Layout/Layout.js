import React from "react";
import { StyledLayout } from "./Layout.style";

const Layout = ({ children }) => {
  return <StyledLayout id="container">{children}</StyledLayout>;
};

export default Layout;
