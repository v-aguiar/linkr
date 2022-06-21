import { DebounceInput } from "react-debounce-input";
import { FaSearch } from "react-icons/fa";

import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  height: 2.8125rem;
  width: ${(props) => props.width};

  margin: 0 0.625rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
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

  position: relative;
  z-index: 1;

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
  top: 0.625rem;
  z-index: 1;

  transition: all 0.3s ease-in-out;

  &:hover {
    color: #515151;
    cursor: pointer;
  }
`;

export const StyledSearchList = styled.ul`
  height: fit-content;
  width: ${(props) => props.width};

  color: #515151;

  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.063rem;
  line-height: 1.275rem;

  position: absolute;
  top: 2.5rem;
  left: 0;
  z-index: 0;

  li {
    width: ${(props) => props.width};
    padding: 0.625rem 2.25rem 0.625rem 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: #e7e7e7;
    transition: all 0.3s ease-in-out;

    img {
      width: 2.438rem;

      border-radius: 50%;
    }

    &:first-child {
      min-height: 3.125rem;
    }

    &:last-child {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
