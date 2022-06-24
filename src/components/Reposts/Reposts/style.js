import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 100%;
button {
    width: 100%;
    height: 25px;
    background: none;
    margin-top: 0.8rem;
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