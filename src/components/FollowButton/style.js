import styled from "styled-components";

export const StyledFollowButton = styled.button`
  width: 7rem;
  height: 1.9375rem;

  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.05rem;

  color: ${({ followed }) => (followed ? "#1877F2" : "#fff")};
  background-color: ${({ followed }) => (followed ? "#fff" : "#1877F2")};

  border: none;
  border-radius: 0.3125rem;

  display: flex;
  align-items: center;
  justify-self: flex-end;
  justify-content: center;

  padding: 0.4375rem 2.1875rem;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  &:disabled {
    cursor: initial;

    color: #fff;
    background-color: #6e839e;
  }
`;
