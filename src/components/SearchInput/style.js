import { DebounceInput } from "react-debounce-input";
import { FaSearch } from "react-icons/fa";

import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  height: 2.8125rem;
  width: ${(props) => props.width};

  margin: 0 0.625rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const StyledSearchInput = styled(DebounceInput)`
  height: 100%;
  width: 100%;

  padding: 0.625rem 2.25rem 0.625rem 1rem;

  border-radius: 0.5rem;
  border: none;
  outline: none;

  background-color: #fff;
  color: #515151;

  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.063rem;
  line-height: 1.275rem;

  &::placeholder {
    color: #949494;
  }
`;

export const SearchButton = styled(FaSearch)`
  color: #949494;
  font-size: 1.3125rem;
  background-color: #fff;

  position: absolute;
  right: 0.9rem;
  z-index: 1;

  transition: all 0.3s ease-in-out;

  &::hover {
    color: #515151;
    cursor: pointer;
  }
`;
