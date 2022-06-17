import styled from "styled-components";

import { RiHeartLine, RiHeartFill } from "react-icons/ri";

export const StyledLikeButton = styled.button`
  background-color: #333333;
`;

export const HeartLine = styled(RiHeartLine)`
  color: #fff;
  font-size: 1.125rem;
`;

export const HeartFill = styled(RiHeartFill)`
  color: red;
  font-size: 1.125rem;
`;
