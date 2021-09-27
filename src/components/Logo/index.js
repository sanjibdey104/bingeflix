import styled from "styled-components";

const StyledLogo = styled.img`
  width: clamp(6.5rem, 12vw, 12rem);
`;

export const Logo = () => {
  return (
    <StyledLogo
      src="https://fontmeme.com/permalink/210923/8940988b646c386bf0ad82efbbd904de.png"
      alt="netflix-font"
      border="0"
    />
  );
};
