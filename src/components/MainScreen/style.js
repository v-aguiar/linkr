import styled from "styled-components";

export const MainScreenContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 611px;
    height: 100vh;
    padding-top: 4.5rem;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    background-color: #333333;

    overflow-y: auto;
    overflow-x: hidden;

    & > main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 500px) {
        width: 100%;
    }

    & > h1 {
        width: 100%;
        padding-block: 0.8rem;
        font-size: 1.8rem;
        padding-left: 0;
        @media (max-width: 500px) {
            padding-left: 0.8rem;
        }
    }
    & > h2 {
        padding: 0.8rem;
        color: #fff;
    }
`;
