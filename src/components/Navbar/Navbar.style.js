import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: max-content;
  height: 3rem;
  display: grid;
  place-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;

  .selected {
    li {
      color: var(--fg-light);
    }
  }
`;

export const NavItem = styled.li`
  color: var(--fg-lighter);
  font-size: 0.85rem;

  &:hover {
    color: var(--fg-light);
  }
`;
