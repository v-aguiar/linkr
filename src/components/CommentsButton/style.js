import styled from "styled-components";

import { AiOutlineComment } from "react-icons/ai";

export const StyledCommentButton = styled.button`
    outline: none;
    border: none;

    background-color: #333333;

    .toolTip {
        color: #505050 !important;
        font-family: "Lato", sans-serif !important;
        font-weight: 700 !important;
        font-size: 0.685rem !important;

        span {
            background-color: #fff !important;
        }
    }

    p {
        color: #fff;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        font-size: 0.685rem;
        line-height: 0.83rem;
        text-align: center;
    }
`;

export const CommentLine = styled(AiOutlineComment)`
    color: #fff;
    font-size: 1.125rem;

    &:hover {
        cursor: pointer;
    }
`;