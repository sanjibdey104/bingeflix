import React from "react";
import { StyledFooter } from "./Footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://fontmeme.com/netflix-font/"
        target="_blank"
        rel="noopener noreferrer"
      >
        logo by: Font Meme
      </a>
      <a href="themoviedb.com" target="_blank" rel="noopener noreferrer">
        powered by:
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="tmdb logo"
        />
      </a>
    </StyledFooter>
  );
};

export default Footer;
