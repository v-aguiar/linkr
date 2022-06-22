import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { SearchButton, SearchInputWrapper, StyledSearchInput, StyledSearchList } from "./style";

export default function SearchInput({ width = "100%" }) {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function searchUsername(username) {
    try {
      const searchResponse = await api.get(`user/searchName/${username}`);
      setUsers(searchResponse.data);
    } catch (err) {
      console.log("⚠ Error searching users");
      setUsers([]);
    }
  }

  function navigateToUserPage(userId) {
    navigate(`/user/${userId}`);
    setInputValue("");
    setUsers([]);
  }

  const handleChange = (e) => {
    const value = e.target?.value;
    setInputValue(value);
    searchUsername(value);
  };

  return (
    <SearchInputWrapper width={width}>
      <StyledSearchInput
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for people"
        minLength={3}
        debounceTimeout={300}
      />
      <SearchButton />
      <StyledSearchList width={width}>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <li onClick={() => navigateToUserPage(user.id)} key={user.id}>
                {user.imgUrl && <img src={user.imgUrl} alt="User profile pic" />}
                <span>{user.username}</span>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </StyledSearchList>
    </SearchInputWrapper>
  );
}
