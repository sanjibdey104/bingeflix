import styled from "styled-components";

export const StyledItemCard = styled.li`
  width: 16rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-dark);

  position: relative;
  color: var(--fg-lightest);
  font-size: 0.75rem;
  border-radius: 0.3rem;

  img {
    width: 100%;
    height: 7.5rem;
    object-fit: cover;
    border-radius: 0.3rem;
  }

  .title {
    font-size: 1.1rem;
    position: absolute;
    top: 6rem;
  }

  .overview {
    height: 3rem;
    font-size: 0.75rem;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 1.5rem;
      width: 25%;
      background: linear-gradient(
        to right,
        rgba(20, 20, 20, 0.3) 10%,
        rgba(20, 20, 20, 1) 50%
      );
    }
  }

  .release-date {
    padding: 0.5rem;
  }
`;
