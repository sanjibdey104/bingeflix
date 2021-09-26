import styled from "styled-components";

export const StyledMovieDetailsPage = styled.section`
  width: 100%;
  height: 80vh;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
      to left,
      transparent 10%,
      rgba(0, 0, 0, 0.75) 60%
    );
  }

  .wrapper {
    width: 100%;
    height: 100%;
    margin-left: 4rem;
    margin-top: 7.5rem;

    color: var(--fg-lighter);
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    span {
      color: var(--fg-lighter);
      font-weight: bolder;
    }

    .title {
      font-size: 3rem;
      color: var(--fg-light);
      width: 40rem;
    }

    .backdrop-image {
      width: 60rem;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: -1;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .extra {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-weight: 500;
      color: var(--fg-light);
    }

    .overview {
      width: 30rem;
      max-width: 100%;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      button {
        border-radius: 0.3rem;
        width: 7rem;
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

    .genre-cast {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
  }

  @media screen and (max-width: 600px) {
    &::after {
      display: none;
    }

    .wrapper {
      margin-left: 0;
      padding: 0.75rem;

      .overview {
        width: 100%;
      }

      .backdrop-image {
        position: static;
        width: 100%;
      }

      .controls {
        justify-content: space-around;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    &::after {
      display: none;
    }
    width: 85%;
    margin: 0 auto;

    .wrapper {
      margin-left: 0;
      padding: 0.75rem;
      height: initial;

      .overview {
        width: 100%;
      }

      .backdrop-image {
        position: static;
        width: 100%;
      }
    }
  }
`;
