import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0.75rem 4rem;
  z-index: 100;
  height: 5rem;

  position: fixed;
  top: 0;

  background: linear-gradient(to top, transparent 10%, rgba(0, 0, 0, 0.5) 50%);
`;
