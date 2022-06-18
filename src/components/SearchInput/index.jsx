import { useState } from "react";

import api from "../../services/api";

import { SearchButton, SearchInputWrapper, StyledSearchInput, StyledSearchList } from "./style";

export default function SearchInput({ width = "100%" }) {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);

  async function searchUsername(username) {
    try {
      const searchResponse = await api.get(`user/searchName/${username}`);
      console.log("searchResponse: ", searchResponse.data);
      setUsers(searchResponse.data);
    } catch (err) {
      console.log("⚠ Error searching users");
      setUsers([{username: "⚠ No user found!"}]);
    }
  }

  const handleChange = (e) => {
    const value = e.target?.value;
    setInputValue(value);
    searchUsername(value);
  };

  return (
    <SearchInputWrapper>
      <StyledSearchInput
        width={width}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
      />
      <SearchButton />
      <StyledSearchList width={ width }>
        {users.length > 0 && users.map((user) => {
          return (
            <li key={user.id}>
              <img src={user.imgUrl} alt="" />
              <span>{user.username}</span>
            </li>
          );
        })}
      </StyledSearchList>
    </SearchInputWrapper>
  );
}
