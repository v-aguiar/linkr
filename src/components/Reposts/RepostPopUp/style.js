import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        font-size: 29px;
        line-height: 35px;
        text-align: center;
        margin-bottom: 23px;
        font-weight: var(--font-weight-bold);
    }
    div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    div button {
        border-radius: 5px;
        border: none;
        min-height: 37px;
        width: 40%;
        font-size: 18px;
        font-weight: var(--font-weight-bold);
    }
    div button:first-child {
        background-color: var(--color-4);
        color: var(--color-1);
    }
    div button:last-child {
        background-color: var(--color-1);
        color: var(--color-4);
    }
`;

export const customStyles = {
    overlay: {
        backgroundColor: " rgba(255, 255, 255, 0.9)",
    },
    content: {
        background: "var(--color-3)",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        width: "var(--width-popup)",
        height: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "30px",
        padding: "2rem",
    },
};