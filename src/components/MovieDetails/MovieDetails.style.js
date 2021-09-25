import styled from "styled-components";

export const StyledMovieDetailsPage = styled.section`
  width: 85%;
  margin: 0 auto;
  min-height: 100%;
  color: var(--fg-lighter);
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;

  span {
    color: var(--fg-lighter);
    font-weight: bolder;
  }

  .title {
    font-size: 3rem;
    color: var(--fg-light);
  }

  .backdrop-image {
    width: 50rem;
    height: 25rem;
    position: absolute;
    right: 0;
    z-index: -1;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left,
        transparent 20%,
        rgba(0, 0, 0, 0.3) 80%
      );
    }

    img {
      height: 100%;
      width: 100%;
      opacity: 0.85;
      object-fit: cover;
    }
  }

  .extra {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .overview {
    width: 30rem;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    button {
      border-radius: 0.3rem;
      width: 7rem;
      font-weight: bolder;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.5rem;
        color: inherit;
      }

      &.play {
        background-color: var(--bg-light);
      }
      &.add-to-list {
        background-color: var(--bg-gray);
        color: var(--fg-light);
      }
    }

    .like-dislike {
      button {
        width: initial;
        border: 1px solid white;
        color: var(--fg-light);
        border-radius: 50%;
        padding: 0.5rem;
      }
      display: flex;
      gap: 1rem;
      svg {
        font-size: 1.05rem;
      }
    }
  }
`;
