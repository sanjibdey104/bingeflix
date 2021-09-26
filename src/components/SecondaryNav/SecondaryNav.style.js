import styled from "styled-components";

export const StyledSecondaryNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: auto;

  @media screen and (max-width: 600px) {
    position: fixed;
    bottom: 0;
    gap: 1rem;
    width: 100%;
    justify-content: space-around;
    background-color: var(--bg-dark);
    margin-left: 0;
    padding: 0.75rem;
    border-radius: 5rem;
    transform: translateX(-1rem) translateY(-0.5rem);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.85);

    li {
      svg {
        font-size: 1.75rem;
      }

      #caret-down {
        display: none;
      }

      #gift {
        font-size: 1.75rem;
      }

      img {
        width: 2.2rem;
      }

      &::before {
        display: none;
      }
    }
  }
`;

export const SecondaryNavItem = styled.li`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;

  &:hover {
    color: var(--fg-lighter);
  }

  #gift {
    font-size: 1.5rem;
  }

  &.notification {
    position: relative;

    &::after {
      content: "3";
      position: absolute;
      top: -3px;
      right: -3px;
      font-size: 0.75rem;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      text-align: center;
      display: grid;
      place-content: center;
      background-color: var(--accent-color-secondary);
    }
  }

  &.gifts {
    &::after {
      content: "2";
      position: absolute;
      top: -3px;
      right: -3px;
      font-size: 0.75rem;
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      text-align: center;
      display: grid;
      place-content: center;
      background-color: var(--accent-color-secondary);
    }
  }

  #caret-down {
    font-size: 0.9rem;
  }

  img {
    width: 1.5rem;
    border-radius: 0.2rem;
  }
`;
