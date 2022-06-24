import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";

import {
  SearchButton,
  SearchInputWrapper,
  StyledSearchInput,
  StyledSearchList,
} from "./style";

export default function SearchInput({ width = "100%" }) {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({});
  const [friendsData, setFriendsData] = useState({});

  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const config = {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  useEffect(() => {
    fetchUserData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (userData?.userId) {
      fetchFriends();
    }
  }, [userData, location]); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchUserData() {
    try {
      const user = await api.get(`/user/session`, config);

      setUserData(user.data);
    } catch (err) {
      console.error("⚠ Error fetching user data", err);
    }
  }

  async function fetchFriends() {
    try {
      const friends = await api.get(`/friends/${userData.userId}`, config);
      setFriendsData(friends.data);
    } catch (err) {
      console.error("⚠ Error fetching friends data", err);
    }
  }

  async function searchUsername(username) {
    try {
      const searchResponse = await api.get(`user/searchName/${username}`);
      // se algum dos usuários retornados for amigo, retornar eles primeiro na array
      const friends = friendsData.friends;
      const friendsIds = friends.map((friend) => friend.id);
      const filteredUsers = searchResponse.data.filter(
        (user) => !friendsIds.includes(user.id)
      );
      const filteredFriends = searchResponse.data.filter((user) =>
        friendsIds.includes(user.id)
      );

      if (filteredFriends.length > 0) {
        filteredFriends.forEach((user) => {
          user.isFriend = true;
        });
      }
      if (filteredUsers.length > 0) {
        filteredUsers.forEach((user) => {
          user.isFriend = false;
        });
      }

      setUsers([...filteredFriends, ...filteredUsers]);
    } catch (err) {
      console.error("⚠ Error searching users");
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
                {user.imgUrl && (
                  <img src={user.imgUrl} alt="User profile pic" />
                )}
                <span>
                  <p>{user.username}</p>
                  {user.isFriend ? (
                    <p className="followingText">• following</p>
                  ) : (
                    <></>
                  )}
                </span>
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
