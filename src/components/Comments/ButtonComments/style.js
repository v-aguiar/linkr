import styled from "styled-components";

export const ButtonCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  button {
      width: 100%;
      background: none;
      margin-top: 0.8rem;
      margin-bottom: 0.1rem;
      svg {
          cursor: pointer;
          color: var(--color-4);
          font-size: 25px;
      }
  }
  p {
      text-align: center;
      width: 100%;
      font-size: 70%;
      cursor: default;
  }
`;