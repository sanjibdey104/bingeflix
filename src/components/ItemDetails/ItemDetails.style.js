import styled from "styled-components";

export const StyledItemDetailsPage = styled.section`
  width: 100%;
  min-height: 100%;
  margin-top: 5rem;
  position: relative;

  .wrapper {
    height: 90%;

    .backdrop-image {
      width: 100%;
      height: 90%;
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
          rgba(0, 0, 0, 0.75) 70%
        );
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .info {
      color: var(--fg-lighter);
      font-size: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-left: 4rem;

      width: 35rem;
      max-width: 80%;
      position: absolute;
      bottom: 5rem;
      top: 5rem;

      span,
      .homepage-link {
        color: var(--fg-lighter);
        font-weight: bolder;
      }

      .title {
        font-size: clamp(1.85rem, 3vw, 3rem);
        color: var(--fg-light);
      }

      .extra {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-weight: 500;
        color: var(--fg-light);

        .language {
          height: 1.2rem;
          display: grid;
          place-content: center;
          border: 1px solid var(--fg-lighter);
          background-color: var(--bg-dark);
          padding: 0.2rem;
        }
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

        .like-dislike {
          button {
            width: initial;
            height: initial;
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
  }

  @media screen and (max-width: 800px) {
    .wrapper {
      .backdrop-image {
        &::after {
          display: none;
        }
      }

      .info {
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .wrapper {
      .info {
        position: static;
        margin-left: 0;
        padding: 1rem;
      }
    }
  }
`;
