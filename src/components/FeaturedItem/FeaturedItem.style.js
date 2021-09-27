import styled from "styled-components";

export const StyledFeaturedItem = styled.section`
  width: 100%;
  margin-bottom: 4rem;

  .wrapper {
    width: 100%;
    position: relative;

    .backdrop-image {
      width: 100%;
      z-index: -1;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to left,
          transparent 10%,
          rgba(0, 0, 0, 0.65) 80%
        );
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      width: 35rem;
      max-width: 100%;
      color: var(--fg-lighter);
      font-size: 0.9rem;

      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 4rem;
      position: absolute;
      bottom: 8.5rem;

      .title {
        font-size: clamp(1.75rem, 3.5vw, 3.5rem);
        color: var(--fg-light);
      }

      .controls {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        button,
        .play {
          border-radius: 0.3rem;
          width: 7rem;
          height: 2.5rem;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            opacity: 0.75;
          }

          svg {
            font-size: 1.5rem;
            color: inherit;
          }
          &.add-to-list {
            background-color: var(--bg-gray);
            color: var(--fg-light);
          }
        }

        .play {
          background-color: var(--bg-light);
          color: black;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .wrapper {
      .info {
        width: 30rem;
        bottom: 3rem;
        position: static;
        margin-left: 0;
        padding: 0.5rem 0.75rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper {
      .info {
        width: 30rem;
        bottom: 3rem;
      }
    }
  }
`;
