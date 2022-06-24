import styled from "styled-components";

export const HeaderMenu = styled.header`
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    z-index: 15;

    > h2 {
        font-family: "Passion One";
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        color: white;

        transition: all 0.3s ease-in-out;
        &:hover {
            cursor: pointer;
            filter: brightness(1.1);
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 15px;
        cursor: pointer;

        @keyframes flipIn {
            from {
                transform: rotate(0);
            }
            to {
                transform: rotate(180deg);
            }
        }

        @keyframes flipOff {
            from {
                transform: rotate(180deg);
            }
            to {
                transform: rotate(0);
            }
        }

        > svg {
            animation: forwards
                ${(props) => (props.toggle ? "flipIn" : "flipOff")} 0.5s;
        }
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

export const Logout = styled.div`
    width: 150px;
    height: 47px;
    position: absolute;
    right: 0;
    top: 70px;
    background-color: #151515;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "lato", sans-serif;
    font-weight: 700;
    font-size: 17px;
    border-radius: 0 0 0 20px;
    z-index: 10;
`;

export const Box = styled.div`
    cursor: default;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 5;
`;
