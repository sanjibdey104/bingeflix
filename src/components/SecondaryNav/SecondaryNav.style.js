import styled from "styled-components";

export const StyledSecondaryNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;
`;

export const SecondaryNavItem = styled.li`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  #caret-down {
    font-size: 0.9rem;
  }
`;
