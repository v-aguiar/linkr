import styled from "styled-components";

export const Container = styled.main`
  font-family: "oswald", sans-serif;
  width: 100%;
  height: 100vh;
  background-color: #333333;

  a {
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 18px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 17px;
  }

  @media (min-width: 1023px) {
    display: flex;

    .content {
      width: 37%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 40px;

  input,
  button {
    margin: 0 auto;
    height: 55px;
    width: 88%;
    max-width: 330px;
    border-radius: 6px;
    border: none;
  }

  input {
    margin: 0 auto;
    height: 55px;
    width: 88%;
    max-width: 330px;
    border-radius: 6px;
    border: none;
    font-size: 22px;
    font-family: "oswald", sans-serif;
    padding-left: 17px;

    ::placeholder {
      color: #9f9f9f;
    }
  }

  button {
    background-color: ${(props) => (props.disable ? "#87b1e5" : "#1877F2")};
    color: white;
    font-family: "oswald", sans-serif;
    font-size: 22px;
    cursor: ${(props) => (props.disable ? "default" : "pointer")};
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 175px;
  background-color: #151515;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 76px;
    font-family: "Passion One", cursive;
  }

  h3 {
    font-size: 23px;
    width: 237px;
    text-align: center;
    line-height: 34px;
  }

  @media (min-width: 1023px) {
    width: 63%;
    height: 100%;
    display: block;
    padding-left: 144px;
    padding-top: 301px;

    h3 {
      text-align: start;
      font-size: 43px;
      width: 442px;
      line-height: 64px;
    }

    h1 {
      font-size: 106px;
    }
  }
`;
