import styled from "styled-components";

export const HeaderMenu = styled.header`
  width: 100%;
  height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;

  h2 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const Img = styled.img`
  width: 53px;
  height: 53px;
  background: ${(props) =>
    props.url ? `url(${props.url}) no-repeat` : "white"};
  border-radius: 26.5px;
  background-position: center;
  background-size: cover;
`;
