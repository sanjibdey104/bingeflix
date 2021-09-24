import styled from "styled-components";

const StyledLogo = styled.img`
  width: clamp(7.5rem, 15vw, 15rem);
`;

export const Logo = () => {
  return (
    <a href="https://fontmeme.com/netflix-font/">
      <StyledLogo
        src="https://fontmeme.com/permalink/210923/8940988b646c386bf0ad82efbbd904de.png"
        alt="netflix-font"
        border="0"
      />
    </a>
  );
};
