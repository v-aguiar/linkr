import styled from "styled-components";

export const LinkPreviewContainer = styled.article`
    display: flex;
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    border: 1px solid #4d4d4d;
    & > a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: auto;
        text-decoration: none;
        overflow: hidden;
        @media (max-width: 500px) {
            max-height: 6rem;
        }
        section {
            --preview-color-1: #cecece;
            --preview-color-2: #9b9595;
            --preview-font-size1: 11px;
            --preview-font-size2: 9px;
            --preview-font-size3: 16px;
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            border: 1px solid var(--color-3);
            border-top-left-radius: 0.8rem;
            border-bottom-left-radius: 0.8rem;
            background-color: var(--color-2);
            font-weight: var(--font-weight-regular);
            overflow-y: auto;
            h1 {
                font-size: var(--preview-font-size1);
                color: var(--preview-color-1);
                line-height: 13px;
                margin-bottom: 5px;
            }
            small {
                font-size: var(--preview-font-size2);
                color: var(--preview-color-2);
                margin-bottom: 0.8rem;
                line-height: 11px;
            }
            p {
                font-size: var(--preview-font-size2);
                color: var(--preview-color-1);
                margin-bottom: 0;
                line-height: 11px;
            }

            @media (min-width: 500px) {
                small,
                p {
                    font-size: var(--preview-font-size1);
                }

                h1 {
                    font-size: var(--preview-font-size3);
                }
            }
        }
        & > section:last-child {
            width: 30%;
            min-width: 30%;
            max-width: 30%;
            padding: 0;
            border-radius: 0;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            background-color: var(--color-3);
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: right;
                background-repeat: no-repeat;
            }
        }

        & > section:first-child {
            overflow-x: inherit;
        }
    }
`;
