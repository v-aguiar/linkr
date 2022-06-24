import styled from "styled-components";

export const Title = styled.h1`
    color: #fff;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
`;

export const PostWrite = styled.div`
    height: 164px;
    background-color: #fff;
    padding: 10px 15px;
    display: flex;
    gap: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    section {
        height: 100%;
        width: 2.5rem;
        display: none;
    }

    img {
        --size-icon: 2.5rem;
        width: var(--size-icon);
        height: var(--size-icon);
        object-fit: cover;
        object-position: center;
        background-repeat: no-repeat;
        border-radius: 50%;
    }

    @media (min-width: 500px) {
        border-radius: 0.8rem;
        height: 209px;

        section {
            display: block;
        }
    }
`;

export const WriteContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    & > p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        color: #707070;
        margin-bottom: 10px;
    }

    & > input,
    textarea {
        width: 100%;
        background-color: #efefef;
        border-radius: 5px;
        border: none;
        height: 30px;
        padding: 7px 0 7px 11px;
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;

        ::placeholder {
            color: #949494;
        }
    }
    textarea {
        resize: none;
        height: 47px;
        padding: 10px 0 21px 10px;
    }

    & > div {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    button {
        background: ${(props) => (props.submited ? "#81b3ef" : "#1877f2")};
        border-radius: 5px;
        width: 112px;
        height: 22px;
        border: none;
        color: #fff;
        cursor: ${(props) => (props.submited ? "default" : "pointer")};
        transition: 0.5s;

        :hover {
            background-color: ${(props) =>
                props.submited ? "#81b3ef" : "#1e62b5"};
        }
    }

    @media (min-width: 500px) {
        p {
            margin-top: 10px;
            font-size: 20px;
            text-align: left;
        }

        textarea {
            height: 66px;
        }

        button {
            height: 31px;
        }
    }
`;
