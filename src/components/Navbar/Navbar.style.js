import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: max-content;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;

  .dropdown-toggler {
    display: none;
    gap: 0.5rem;
    align-items: center;
    color: var(--fg-light);
    cursor: pointer;
    font-size: 1.1rem;

    &:hover {
      color: var(--fg-lighter);
    }

    svg {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
    .dropdown-toggler {
      display: flex;
    }

    ul {
      position: absolute;
      top: 100%;
      right: -10%;

      width: 10rem;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;
      border-radius: 0.5rem;
      padding: 0.5rem 0.3rem;
      background: linear-gradient(
        to top,
        rgba(20, 20, 20, 0.65) 10%,
        rgba(20, 20, 20, 0.85) 40%
      );
      box-shadow: 0 0 10px rgba(0, 0, 0, 1),
        inset 5px 5px 8px rgba(0, 0, 0, 0.3);

      transform: translateY(-150%);
      opacity: 0;
      transform-origin: center;
      transition: transform 200ms ease-in-out;
      &.active {
        opacity: 1;
        transform: translateY(0);
      }

      li {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    ul {
      transform: translateX(110%);
      opacity: 0;
      transition: transform 200ms ease-in-out;
      &.active {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
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
