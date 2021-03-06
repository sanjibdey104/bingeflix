import styled from "styled-components";

export const StyledItemList = styled.section`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 3rem;

  .category {
    font-size: 1.2rem;
    margin-left: 4rem;
  }

  .list-wrapper {
    margin-left: 4rem;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .list {
      width: max-content;
      display: flex;
      gap: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .list-wrapper,
    .category {
      margin-left: 1rem;
    }
  }
`;
