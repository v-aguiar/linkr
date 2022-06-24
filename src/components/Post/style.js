import styled from "styled-components";

export const PostContainer = styled.article`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1rem;
    overflow: hidden;
    background-color: #171717;
    font-family: "Lato", sans-serif;

    @media (min-width: 500px) {
        border-radius: 0.8rem;
    }
    & > section {
        display: flex;
        flex-direction: column;
        width: 4rem;
        padding-right: 1rem;
        align-items: center;

        img {
            --size-icon: 2.5rem;
            width: var(--size-icon);
            height: var(--size-icon);
            object-fit: cover;
            object-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;
        }
        button {
            background: none;
            padding-block: 0.8rem;
            svg {
                color: var(--text-color-main);
            }
        }
        p {
            width: 100%;
            font-size: 70%;
        }
    }
    & > div {
        width: calc(100% - 4rem);
        font-weight: 400;

        h2 {
            margin-bottom: 0.5rem;
            font-size: 1rem;
            color: #fff;
            line-height: 20px;
            font-size: 17px;

            transition: all 0.3s ease-in-out;

            &:hover {
                cursor: pointer;
                filter: brightness(1.1);
            }
        }
        p {
            font-size: 0.9rem;
            color: #b7b7b7;
            margin-bottom: 0.8rem;
        }

        span {
            color: #fff;
            font-weight: 700;
            cursor: pointer;
        }
    }
`;
