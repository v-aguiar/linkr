import styled from "styled-components";

export const StyledUserSpan = styled.span`
    display: flex;
    align-items: center;
    align-self: flex-start;
    justify-content: space-between;

    margin-top: 3.3125rem;
    width: 100%;

    > span {
        display: flex;
        align-items: center;

        > h1 {
            font-family: "Oswald", sans-serif;
            font-weight: 700;
            font-size: 2.6875rem;
            color: #fff;

            margin: 0 1.125rem;
        }

        > img {
            border-radius: 50%;
            height: 3.125rem;
            width: 3.125rem;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #333333;
    gap: 25px;
`;
