import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  padding: 0.75rem 0;
  border-top: 1px solid rgba(80, 80, 80, 0.5);

  a {
    display: flex;
    gap: 0.5rem;
    color: var(--fg-lightest);
    transition: all 200ms ease-in-out;

    &:hover {
      color: var(--accent-color-primary);
    }
  }

  img {
    width: 6rem;
    display: inline;
  }
`;
