import styled from "styled-components";

export const Container = styled.nav`
    width: 301px;
    height: 406px;
    background-color: #171717;
    border-radius: 16px;
    margin-top: 175px;

    h1 {
        padding: 10px 16px;
        font-family: "Oswald";
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;
        color: #ffffff;
    }

    .hl {
        width: 301px;
        height: 1px;
        background-color: #484848;
    }

    .hashtagBox {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-top: 22px;
        padding-left: 16px;

        h2 {
            font-family: "Lato";
            font-style: normal;
            font-weight: 700;
            font-size: 19px;
            line-height: 23px;
            letter-spacing: 0.05em;
            cursor: pointer;
            color: #ffffff;
        }
    }

    @media (max-width: 940px) {
        display: none;
    }
`;
