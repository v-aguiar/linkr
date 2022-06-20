import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import UserContext from "../../contexts/UserContext";
import MainScreen from "../../components/MainScreen";
import api from "../../services/api";

import { Div, StyledUserSpan } from "./style";

export default function UserPage() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!userInfo.token) {
    alert("!⚠ Session expired. Please login again.");
    navigate("/");
    return;
  }

  async function fetchUserData() {
    try {
      const response = await api.get(`/user/searchId/${id}`);

      setUserData(response.data);
    } catch (err) {
      console.error("⚠ Error fetching user data", err);
    }
  }

  return (
    <MainScreen>
      {userData ? (
        <StyledUserSpan>
          <img src={userData.imgUrl} alt="User profile pic" />
          <h1> {userData.username}</h1>
        </StyledUserSpan>
      ) : (
        <ThreeDots />
      )}
      <Div>POSTS ↔ ⚠ Em desenvolvimento...</Div>
    </MainScreen>
  );
}
