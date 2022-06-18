import { useState } from "react";

import { SearchButton, SearchInputWrapper, StyledSearchInput } from "./style";

export default function SearchInput({ width = "100%" }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target?.value;
    setValue(value);
  };

  return (
    <SearchInputWrapper>
      <StyledSearchInput
        width={width}
        value={value}
        onChange={handleChange}
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
      />
      <SearchButton />
    </SearchInputWrapper>
  );
}
